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
            { nombre: 'DAURAT MERCEDES MARIA', monto: 30_000_000, porcentaje: 25.1, color: 'from-red-600 to-red-500' },
            { nombre: 'CESAR AUGUSTO ARCARO MALITO', monto: 25_597_981, porcentaje: 21.5, color: 'from-orange-600 to-orange-500' },
            { nombre: 'SANDJIAN & ASOCIADOS', monto: 16_620_000, porcentaje: 13.9, color: 'from-amber-600 to-amber-500' },
            { nombre: 'BANCO BBVA ARGENTINA', monto: 13_517_044, porcentaje: 11.3, color: 'from-yellow-600 to-yellow-500' },
            { nombre: 'WNS & ASOCIADOS S.R.L.', monto: 9_543_100, porcentaje: 8.0, color: 'from-pink-600 to-pink-500' },
            { nombre: 'BANCO SANTANDER RIO SA', monto: 8_249_332, porcentaje: 6.9, color: 'from-purple-600 to-purple-500' },
            { nombre: 'BANCO DE LA CIUDAD DE BUENOS AIRES', monto: 4_114_597, porcentaje: 3.4, color: 'from-indigo-600 to-indigo-500' },
            { nombre: 'SACCOL EMILIANO', monto: 3_518_325, porcentaje: 2.9, color: 'from-cyan-600 to-cyan-500' },
            { nombre: 'GOLAWARE S.R.L.', monto: 3_045_000, porcentaje: 2.5, color: 'from-sky-600 to-sky-500' },
            { nombre: 'FABIOLA LANDIN', monto: 2_400_000, porcentaje: 2.0, color: 'from-blue-600 to-blue-500' },
            { nombre: 'ARQUETIPONET S.R.L.', monto: 1_625_676, porcentaje: 1.4, color: 'from-violet-600 to-violet-500' },
            { nombre: 'FUNDACION CONSENSO', monto: 1_286_525, porcentaje: 1.1, color: 'from-fuchsia-600 to-fuchsia-500' },
            { nombre: 'TELEFONICA MOVILES ARGENT', monto: 705_926, porcentaje: 0.6, color: 'from-rose-600 to-rose-500' },
            { nombre: 'SANTA FE COMERCIAL SOCIEDAD DE RESPONSAB', monto: 466_724, porcentaje: 0.4, color: 'from-slate-600 to-slate-500' },
            { nombre: 'MINDER S A', monto: 292_004, porcentaje: 0.2, color: 'from-gray-600 to-gray-500' },
          ].map((gasto, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-200">{gasto.nombre}</span>
                <span className="text-sm font-bold text-slate-300">${(gasto.monto / 1_000_000).toFixed(1)}M ({gasto.porcentaje.toFixed(1)}%)</span>
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
            <p className="text-sm text-slate-300 mt-1">Daurat ($30.0M), Arcaro ($25.6M), Sandjian ($16.6M) = $72.2M (60.5%)</p>
          </div>
          <div>
            <p className="text-xs text-slate-400"><strong>🎯 Acción Recomendada:</strong></p>
            <p className="text-sm text-slate-300 mt-1">Renegociar términos con Daurat y Arcaro. Revisar cuentas bancarias BBVA y Santander</p>
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
