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

      <div className="space-y-4">
        {[
          {
            icon: '💼',
            categoria: 'Ingresos por Servicios',
            total: 459_074_143,
            porcentaje: 89.9,
            trend: '+18.5%',
            analisis: 'Crecimiento sostenido en servicios principales. Cliente OSPERYH representa 35% del total. Volatilidad mes a mes: -32% a +16%.'
          },
          {
            icon: '🏢',
            categoria: 'Gastos de Administración',
            total: 135_158_962,
            porcentaje: 26.4,
            trend: '+3%',
            analisis: 'Sueldos son el 72% de este rubro ($96.9M/mes). Oportunidad: optimizar servicios digitales y beneficios (costo $11.2M/mes).'
          },
          {
            icon: '📢',
            categoria: 'Gastos de Comercialización',
            total: 233_169_958,
            porcentaje: 45.6,
            trend: '+5%',
            analisis: 'Servicios tercerizados y honorarios representan 81% del gasto. AHORRO POTENCIAL: $47.6M/año (20% reducción).'
          },
          {
            icon: '💳',
            categoria: 'Gastos Financieros',
            total: 24_182_250,
            porcentaje: 4.7,
            trend: '-8%',
            analisis: 'Intereses totales $24.2M/año. Dependencia de carga deuda. Oportunidad: refinanciamiento en concurso preventivo.'
          },
          {
            icon: '📊',
            categoria: 'Cuentas por Cobrar',
            total: 190_755_310,
            porcentaje: 100,
            trend: '🚨 CRÍTICO',
            analisis: 'Saldo pendiente: $190.8M. OSPERYH concentra 57.4% ($109.5M). Riesgo: si no cobra OSPERYH, caída del 13.7% en ingresos mensuales.'
          },
          {
            icon: '📦',
            categoria: 'Capacidad de Pago',
            total: 222_500_000,
            porcentaje: 37.4,
            trend: '✓ POSITIVO',
            analisis: 'Flujo neto anual $222.5M. Permite: (1) pagar deudas inmediatas ($31M), (2) servir deuda residual 36+ meses, (3) crecer operación.'
          },
        ].map((item, idx) => (
          <div key={idx} className="card-premium p-6 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-50">{item.categoria}</h3>
                    <p className="text-sm text-slate-400">${item.total.toLocaleString('es-AR', {maximumFractionDigits: 0})}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  item.trend.includes('✓') ? 'text-green-400' :
                  item.trend.includes('🚨') ? 'text-red-400' :
                  'text-amber-400'
                }`}>{item.porcentaje}%</div>
                <div className={`text-xs font-semibold ${
                  item.trend.includes('✓') ? 'text-green-400' :
                  item.trend.includes('🚨') ? 'text-red-400' :
                  item.trend.includes('-') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.trend}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-300">📌 {item.analisis}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desglose de Gastos por Tipo */}
      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">RANKING DE GASTOS</h2>
          <p className="text-xs text-slate-400 mt-1">Desglose detallado de mayores gastos (Mayor a Menor)</p>
        </div>

        <div className="p-6 space-y-6">
          {[
            { nombre: 'Servicios Tercerizados', monto: 188_847_594, porcentaje: 36.8, color: 'from-red-600 to-red-500' },
            { nombre: 'Sueldos y Beneficios', monto: 96_895_321, porcentaje: 18.9, color: 'from-orange-600 to-orange-500' },
            { nombre: 'Honorarios Profesionales', monto: 72_300_000, porcentaje: 14.1, color: 'from-amber-600 to-amber-500' },
            { nombre: 'Alquileres y Servicios Básicos', monto: 48_562_147, porcentaje: 9.5, color: 'from-yellow-600 to-yellow-500' },
            { nombre: 'Intereses y Financieros', monto: 24_182_250, porcentaje: 4.7, color: 'from-pink-600 to-pink-500' },
            { nombre: 'Marketing y Publicidad', monto: 18_750_000, porcentaje: 3.7, color: 'from-purple-600 to-purple-500' },
            { nombre: 'Otros Gastos Operativos', monto: 13_250_000, porcentaje: 2.6, color: 'from-slate-600 to-slate-500' },
          ].map((gasto, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-200">{gasto.nombre}</span>
                <span className="text-sm font-bold text-slate-300">${(gasto.monto / 1_000_000).toFixed(1)}M ({gasto.porcentaje}%)</span>
              </div>
              <div className="h-8 bg-slate-800 rounded-lg overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${gasto.color} flex items-center justify-end pr-2 transition-all`}
                  style={{ width: `${gasto.porcentaje * 2.5}%` }}
                >
                  {gasto.porcentaje > 5 && <span className="text-xs font-bold text-white">{gasto.porcentaje}%</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            💡 <strong>Oportunidad de ahorro:</strong> Los servicios tercerizados ($188.8M) representan el gasto mayor. Reducción del 20% generaría $37.8M en ahorro anual.
          </p>
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
