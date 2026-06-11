'use client'

import { useState, useEffect } from 'react'

interface ProveedorData {
  nombre: string
  monto: number
}

interface ComprasData {
  [mes: string]: {
    ranking: ProveedorData[]
    total: number
  }
}

export default function AnalisisPage() {
  const [selectedMonth, setSelectedMonth] = useState('2026-06')
  const [comprasData, setComprasData] = useState<ComprasData | null>(null)
  const [meses, setMeses] = useState<string[]>([])

  useEffect(() => {
    // Cargar datos de compras
    fetch('/compras-por-mes.json')
      .then(res => res.json())
      .then((data: ComprasData) => {
        setComprasData(data)
        const mesesDisponibles = Object.keys(data).sort().reverse()
        setMeses(mesesDisponibles)
        // Seleccionar el mes más reciente
        if (mesesDisponibles.length > 0) {
          setSelectedMonth(mesesDisponibles[0])
        }
      })
  }, [])

  const currentData = comprasData?.[selectedMonth]
  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`
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
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-50 mb-1">Análisis Detallado</h1>
          <p className="text-slate-400">Desglose de gastos por proveedor</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-400">Período:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 cursor-pointer hover:border-slate-600"
          >
            {meses.map(mes => (
              <option key={mes} value={mes}>{mes}</option>
            ))}
          </select>
        </div>
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

      {/* RANKING DE PROVEEDORES DINÁMICO */}
      {currentData ? (
        <div className="card-premium overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-50">RANKING DE PROVEEDORES - {selectedMonth}</h2>
                <p className="text-xs text-slate-400 mt-1">Total gasto del período: {fmt(currentData.total)}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {currentData.ranking.slice(0, 15).map((proveedor, idx) => {
              const porcentaje = (proveedor.monto / currentData.total) * 100
              const colors = [
                'from-red-600 to-red-500',
                'from-orange-600 to-orange-500',
                'from-amber-600 to-amber-500',
                'from-yellow-600 to-yellow-500',
                'from-pink-600 to-pink-500',
                'from-purple-600 to-purple-500',
                'from-indigo-600 to-indigo-500',
                'from-cyan-600 to-cyan-500',
                'from-sky-600 to-sky-500',
                'from-blue-600 to-blue-500',
                'from-violet-600 to-violet-500',
                'from-fuchsia-600 to-fuchsia-500',
                'from-rose-600 to-rose-500',
                'from-slate-600 to-slate-500',
                'from-gray-600 to-gray-500',
              ]

              return (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-200 flex-1">{proveedor.nombre}</span>
                    <span className="text-sm font-bold text-slate-300 ml-2">{fmt(proveedor.monto)} ({porcentaje.toFixed(1)}%)</span>
                  </div>
                  <div className="h-6 bg-slate-800 rounded-lg overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${colors[idx % colors.length]} flex items-center justify-end pr-2 transition-all`}
                      style={{ width: `${(proveedor.monto / currentData.total) * 100}%` }}
                    >
                      {porcentaje > 5 && <span className="text-xs font-bold text-white">{porcentaje.toFixed(0)}%</span>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6 bg-slate-900/50 border-t border-slate-800">
            <p className="text-xs text-slate-400">
              💡 <strong>Top 3 proveedores:</strong> {currentData.ranking[0]?.nombre} ({fmt(currentData.ranking[0]?.monto)})
              {currentData.ranking.length > 1 && `, ${currentData.ranking[1]?.nombre} (${fmt(currentData.ranking[1]?.monto)})`}
              {currentData.ranking.length > 2 && `, ${currentData.ranking[2]?.nombre} (${fmt(currentData.ranking[2]?.monto)})`}
            </p>
          </div>
        </div>
      ) : (
        <div className="card-premium p-6 text-center text-slate-400">
          Cargando datos...
        </div>
      )}

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
