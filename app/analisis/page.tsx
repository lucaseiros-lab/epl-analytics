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
