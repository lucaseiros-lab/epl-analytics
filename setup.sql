-- EPL Analytics - Setup SQL para Supabase

-- Crear tabla de empresas
CREATE TABLE IF NOT EXISTS companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  cuit TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de registros financieros
CREATE TABLE IF NOT EXISTS financial_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  period TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}',
  ventas NUMERIC,
  costo_ventas NUMERIC,
  gastos_administracion NUMERIC,
  gastos_comercializacion NUMERIC,
  gastos_financieros NUMERIC,
  ebitda NUMERIC,
  ebit NUMERIC,
  utilidad_neta NUMERIC,
  flujo_operativo NUMERIC,
  activos_corrientes NUMERIC,
  pasivos_corrientes NUMERIC,
  activos_totales NUMERIC,
  pasivos_totales NUMERIC,
  patrimonio NUMERIC,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(company_id, period)
);

-- Crear tabla de movimientos bancarios
CREATE TABLE IF NOT EXISTS bank_movements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  period TEXT NOT NULL,
  fecha DATE NOT NULL,
  concepto TEXT NOT NULL,
  tipo TEXT NOT NULL, -- 'entrada' o 'salida'
  monto NUMERIC NOT NULL,
  saldo NUMERIC,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de clientes
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  cuit TEXT,
  nombre TEXT NOT NULL,
  tipo_cliente TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de facturas por cliente
CREATE TABLE IF NOT EXISTS invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id),
  period TEXT NOT NULL,
  fecha DATE NOT NULL,
  numero TEXT,
  tipo TEXT, -- 'FA', 'FB', 'NC A', 'NC B'
  monto NUMERIC NOT NULL,
  iva NUMERIC,
  total NUMERIC,
  estado TEXT, -- 'cobrada', 'pendiente'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de proveedores
CREATE TABLE IF NOT EXISTS suppliers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  cuit TEXT,
  nombre TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear tabla de compras
CREATE TABLE IF NOT EXISTS purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  supplier_id UUID REFERENCES suppliers(id),
  period TEXT NOT NULL,
  fecha DATE NOT NULL,
  numero TEXT,
  monto NUMERIC NOT NULL,
  iva NUMERIC,
  total NUMERIC,
  estado TEXT, -- 'pagada', 'pendiente'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Crear índices para mejorar queries
CREATE INDEX IF NOT EXISTS idx_companies_cuit ON companies(cuit);
CREATE INDEX IF NOT EXISTS idx_financial_records_company_id ON financial_records(company_id);
CREATE INDEX IF NOT EXISTS idx_financial_records_period ON financial_records(company_id, period);
CREATE INDEX IF NOT EXISTS idx_bank_movements_company_id ON bank_movements(company_id);
CREATE INDEX IF NOT EXISTS idx_bank_movements_period ON bank_movements(company_id, period);
CREATE INDEX IF NOT EXISTS idx_invoices_company_id ON invoices(company_id);
CREATE INDEX IF NOT EXISTS idx_invoices_period ON invoices(company_id, period);
CREATE INDEX IF NOT EXISTS idx_purchases_company_id ON purchases(company_id);
CREATE INDEX IF NOT EXISTS idx_purchases_period ON purchases(company_id, period);

-- Crear vista de resumen mensual
CREATE OR REPLACE VIEW monthly_summary AS
SELECT
  fr.company_id,
  fr.period,
  fr.ventas,
  fr.costo_ventas,
  fr.gastos_administracion,
  fr.gastos_comercializacion,
  fr.gastos_financieros,
  fr.ebitda,
  fr.ebit,
  fr.utilidad_neta,
  fr.flujo_operativo,
  fr.activos_corrientes,
  fr.pasivos_corrientes,
  fr.activos_totales,
  fr.pasivos_totales,
  fr.patrimonio,
  CASE
    WHEN fr.ventas > 0 THEN ((fr.ventas - fr.costo_ventas) / fr.ventas * 100)
    ELSE 0
  END AS margen_bruto,
  CASE
    WHEN fr.ventas > 0 THEN (fr.ebit / fr.ventas * 100)
    ELSE 0
  END AS margen_operativo,
  CASE
    WHEN fr.ventas > 0 THEN (fr.ebitda / fr.ventas * 100)
    ELSE 0
  END AS margen_ebitda,
  CASE
    WHEN fr.ventas > 0 THEN (fr.utilidad_neta / fr.ventas * 100)
    ELSE 0
  END AS margen_neto,
  CASE
    WHEN fr.ventas > 0 THEN (fr.flujo_operativo / fr.ventas * 100)
    ELSE 0
  END AS margen_flujo,
  CASE
    WHEN fr.pasivos_corrientes > 0 THEN (fr.activos_corrientes / fr.pasivos_corrientes)
    ELSE 0
  END AS liquidez_corriente
FROM financial_records fr;

-- Insertar empresa ejemplo (Opcional)
INSERT INTO companies (name, cuit)
VALUES ('EPL Consultores', '30-71193999-3')
ON CONFLICT (cuit) DO NOTHING;

-- Confirmar creación
SELECT 'Setup completado exitosamente' as status;
