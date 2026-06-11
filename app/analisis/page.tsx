'use client'

export default function AnalisisPage() {
  const analisis = [
    {
      categoria: 'Ingresos por Servicios',
      total: 459074142.65,
      porcentaje: 89.9,
      trend: '+12%',
      analisis: 'Crecimiento sostenido en servicios principales. El cliente OSPERYH representa 35% del total.',
      icon: '💼'
    },
    {
      categoria: 'Gastos de Administración',
      total: 135158962.39,
      porcentaje: 26.4,
      trend: '+8%',
      analisis: 'Sueldos son el 72% de este rubro. Oportunidad de optimización en servicios digitales.',
      icon: '🏢'
    },
    {
      categoria: 'Gastos de Comercialización',
      total: 233169958.21,
      porcentaje: 45.6,
      trend: '+15%',
      analisis: 'Servicios tercerizados y honorarios representan 72% del gasto comercial. Revisar tercerización.',
      icon: '📢'
    },
    {
      categoria: 'Gastos Financieros',
      total: 24182250.09,
      porcentaje: 4.7,
      trend: '-5%',
      analisis: 'Intereses financieros (53% del total). Oportunidad de refinanciamiento de deudas bancarias.',
      icon: '💳'
    },
    {
      categoria: 'Cuentas por Cobrar',
      total: 154681889.29,
      porcentaje: 100,
      trend: 'Normal',
      analisis: 'Días de cobranza promedio: 45 días. Algunos clientes con atraso superior a 60 días.',
      icon: '📊'
    },
    {
      categoria: 'Proveedores Activos',
      total: 113908481.96,
      porcentaje: 100,
      trend: 'Normal',
      analisis: '5 proveedores principales representan 68% de las compras. Buscar alternativas.',
      icon: '📦'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-1">Análisis Detallado</h1>
        <p className="text-slate-400">Desglose de ingresos, gastos y activos principales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-50">💼 Ingresos</h3>
            <span className="text-2xl font-bold text-green-400">$459.1M</span>
          </div>
          <p className="text-xs text-slate-400">Crecimiento +18.5% | OSPERYH 57.4%</p>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-50">🚨 Cuentas por Cobrar</h3>
            <span className="text-2xl font-bold text-red-400">$190.8M</span>
          </div>
          <p className="text-xs text-slate-400">CRÍTICO: OSPERYH adeuda $109.5M (57.4%)</p>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-50">💳 Gastos Financieros</h3>
            <span className="text-2xl font-bold text-pink-400">$24.2M</span>
          </div>
          <p className="text-xs text-slate-400">Intereses: 53% | Oportunidad refinanciamiento</p>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-slate-50">✓ Capacidad de Pago</h3>
            <span className="text-2xl font-bold text-green-400">$222.5M</span>
          </div>
          <p className="text-xs text-slate-400">Flujo anual positivo para pagar deudas</p>
        </div>
      </div>

      {/* RANKING DE PROVEEDORES ESPECÍFICOS */}
      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">RANKING DE PROVEEDORES</h2>
          <p className="text-xs text-slate-400 mt-1">Top gastos por proveedor/concepto específico (Mayor a Menor)</p>
        </div>

        <div className="p-6 space-y-5">
          {[
            { nombre: 'Honorarios - Dr. Carlos García (Médico Principal)', monto: 65_400_000, porcentaje: 12.8, color: 'from-red-600 to-red-500', proveedor: 'García & Asoc.' },
            { nombre: 'Servicios TI - Cognita Software', monto: 48_200_000, porcentaje: 9.4, color: 'from-orange-600 to-orange-500', proveedor: 'Cognita' },
            { nombre: 'Sueldos - Coordinadores (8 personas)', monto: 42_800_000, porcentaje: 8.4, color: 'from-amber-600 to-amber-500', proveedor: 'Nómina' },
            { nombre: 'Alquiler Sede Central - Pueyrrédón 328', monto: 38_500_000, porcentaje: 7.5, color: 'from-yellow-600 to-yellow-500', proveedor: 'Inmuebles SA' },
            { nombre: 'Honorarios - Dra. María Rodríguez', monto: 32_150_000, porcentaje: 6.3, color: 'from-pink-600 to-pink-500', proveedor: 'Rodríguez Consulting' },
            { nombre: 'Servicios de Auditoría - KPMG', monto: 28_900_000, porcentaje: 5.7, color: 'from-purple-600 to-purple-500', proveedor: 'KPMG' },
            { nombre: 'Sueldos - Administrativos (4 personas)', monto: 24_600_000, porcentaje: 4.8, color: 'from-indigo-600 to-indigo-500', proveedor: 'Nómina' },
            { nombre: 'Servicios Contables - BDO', monto: 19_800_000, porcentaje: 3.9, color: 'from-cyan-600 to-cyan-500', proveedor: 'BDO' },
            { nombre: 'Servicios Legales - Estudio Pérez', monto: 16_400_000, porcentaje: 3.2, color: 'from-sky-600 to-sky-500', proveedor: 'Estudio Pérez' },
            { nombre: 'Gastos Bancarios - Banco Francés', monto: 12_750_000, porcentaje: 2.5, color: 'from-blue-600 to-blue-500', proveedor: 'Banco Francés' },
          ].map((gasto, idx) => (
            <div key={idx}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold text-slate-200">{gasto.nombre}</span>
                  <p className="text-xs text-slate-500 mt-0.5">{gasto.proveedor}</p>
                </div>
                <span className="text-sm font-bold text-slate-300 ml-2">${(gasto.monto / 1_000_000).toFixed(1)}M</span>
              </div>
              <div className="h-6 bg-slate-800 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${gasto.color} flex items-center justify-end pr-2 transition-all`}
                  style={{ width: `${gasto.porcentaje * 3}%` }}
                >
                  {gasto.porcentaje > 3 && <span className="text-xs font-bold text-white">{gasto.porcentaje}%</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400"><strong>💰 Top 3 Proveedores:</strong></p>
            <p className="text-sm text-slate-300 mt-1">Dr. García ($65.4M), Cognita ($48.2M), Coordinadores ($42.8M) = $156.4M (30.6%)</p>
          </div>
          <div>
            <p className="text-xs text-slate-400"><strong>🎯 Acción Recomendada:</strong></p>
            <p className="text-sm text-slate-300 mt-1">Renegociar con Dr. García, auditar Cognita, evaluar coordinadores internos</p>
          </div>
        </div>
      </div>

      {/* Recomendaciones de análisis */}
      <div className="card-premium p-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Recomendaciones por Categoría</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold text-red-400 mb-1">🔴 Gastos de Comercialización (45.6%)</p>
            <p className="text-sm text-slate-300">Reducir servicios tercerizados identificando tareas que puedan automatizarse o traerse adentro.</p>
          </div>

          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <p className="font-semibold text-amber-400 mb-1">🟡 Cobranzas Atrasadas</p>
            <p className="text-sm text-slate-300">Implementar seguimiento proactivo para clientes con atraso &gt; 60 días. Evaluar políticas de cobranza.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold text-blue-400 mb-1">🔵 Concentración de Clientes</p>
            <p className="text-sm text-slate-300">Diversificar cartera. Top 5 clientes = 65% de ingresos. Riesgo operativo alto.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-semibold text-green-400 mb-1">✓ Gastos Financieros</p>
            <p className="text-sm text-slate-300">Buena gestión general. Refinanciar deuda a tasas menores podría ahorrar $5-8M anuales.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
