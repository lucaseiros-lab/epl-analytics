# EPL Analytics - Dashboard Financiero

Sistema integral de análisis financiero para EPL Consultores con 5 márgenes clave y semáforos automáticos.

## 🚀 Características

- ✅ **5 Márgenes Financieros Clave**
  - Margen Bruto
  - Margen Operativo
  - Margen EBITDA
  - Margen Neto
  - Margen de Flujo de Caja

- ✅ **Semáforos Automáticos** (Verde/Amarillo/Rojo)
- ✅ **Importación de CSV** (Ventas, Compras, Pagos, Cobranzas, Banco, Balance)
- ✅ **Dashboard en Tiempo Real**
- ✅ **Análisis de Liquidez, ROI, Endeudamiento**
- ✅ **Histórico de Períodos**
- ✅ **Soporte para Múltiples Empresas**

## 📋 Requisitos

- Node.js 18+
- npm o yarn
- Cuenta en Supabase (gratis)
- Cuenta en Vercel (gratis)

## 🔧 Instalación Local

### 1. Clonar/Descargar el Proyecto

```bash
cd epl-analytics
npm install
```

### 2. Configurar Variables de Entorno

Copiar `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Editar `.env.local` y agregar:

```
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

### 3. Configurar Base de Datos (Supabase)

#### A. Crear Proyecto en Supabase

1. Ir a https://supabase.com
2. Crear nuevo proyecto (gratuito)
3. Copiar URL y ANON_KEY

#### B. Ejecutar SQL en Supabase

En la consola SQL de Supabase, ejecutar:

```sql
-- Tabla de empresas
CREATE TABLE companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  cuit TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de registros financieros
CREATE TABLE financial_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  period TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(company_id, period)
);

-- Índices
CREATE INDEX idx_financial_records_company_id ON financial_records(company_id);
CREATE INDEX idx_financial_records_period ON financial_records(period);
```

### 4. Ejecutar Localmente

```bash
npm run dev
```

Abrir http://localhost:3000

## 📁 Estructura de Archivos CSV

Cada mes necesita estos 6 archivos en formato UTF-8:

### 1. **Ventas.csv**
```
Asiento,Fecha,Tipo,Nº,Cliente,Gravados,IVA,Total
11) - 29579,2026-01-02,F A,00003-00000498,GEA S.A.,1154266.37,242395.94,1396662.31
```

### 2. **Compras.csv**
```
Asiento,Fecha,Tipo,Nº,Proveedor,Gravados,IVA,Total
55) - 30517,2026-01-02,FC,6216,BANCO BBVA ARGENTINA,2000000,420000,2420000
```

### 3. **Pagos.csv**
```
Asiento,Fecha,Num,CUIT,Contraparte,Efectivo,Transferencia,Total
55) - 30517,2026-01-02,6216,30-50000319-3,BANCO BBVA ARGENTINA,0,2126600.30,2126600.30
```

### 4. **Cobranzas.csv**
```
Asiento,Fecha,Num,CUIT,Cliente,Efectivo,Transferencia,Total
75) - 29606,2026-01-07,2093,30-62425407-0,OS PRENSA ROSARIO,0,2021306.26,2021306.26
```

### 5. **Banco.csv**
```
Fecha,Concepto,Debe,Haber,Saldo
2026-01-01,Saldo Inicial,0,0,2222157.32
2026-01-02,Transferencia,0,30000,2192157.32
```

### 6. **Balance.csv**
```
Cuenta,Saldo Debe,Saldo Haber
01.01.01.02 - BANCO SANTANDER RIO,449135625.97,460124762.05
01.01.02.01 - DEUDORES POR SERVICIOS,730565287.92,575883398.63
```

## 🌐 Deploy en Vercel

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/epl-analytics.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Ir a https://vercel.com
2. Click "New Project"
3. Seleccionar repositorio GitHub
4. Agregar variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

La app estará disponible en: `https://epl-analytics.vercel.app`

## 📊 Cálculos de Márgenes

### Margen Bruto
```
(Ventas - Costo de Ventas) / Ventas × 100
Saludable: ≥40% | Atención: ≥30% | Crítico: <30%
```

### Margen Operativo
```
EBIT / Ventas × 100
Saludable: ≥20% | Atención: ≥10% | Crítico: <10%
```

### Margen EBITDA
```
EBITDA / Ventas × 100
Saludable: ≥25% | Atención: ≥15% | Crítico: <15%
```

### Margen Neto
```
Utilidad Neta / Ventas × 100
Saludable: ≥15% | Atención: ≥5% | Crítico: <5%
```

### Margen de Flujo
```
Flujo Operativo / Ventas × 100
Saludable: ≥20% | Atención: ≥10% | Crítico: <10%
```

## 🔄 Workflow Mensual

1. **Recolectar datos**: Exportar los 6 CSVs de contabilidad
2. **Cargar en app**: Ir a `/upload` e importar archivos
3. **Revisar dashboard**: Ver los 5 márgenes y semáforos
4. **Analizar tendencias**: Comparar con meses anteriores
5. **Tomar decisiones**: Basado en KPIs identificados

## 🔐 Seguridad

- Variables de entorno no se commitean
- Supabase controla acceso a datos
- Vercel usa HTTPS automáticamente
- Row Level Security disponible en Supabase

## 📞 Soporte

- Documentación: `/README.md`
- Issues: GitHub Issues
- Supabase Docs: https://supabase.com/docs

## 📄 Licencia

Privado - EPL Consultores 2026
