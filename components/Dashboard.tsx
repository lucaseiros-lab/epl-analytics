'use client'

import { calcularKPIs, totalVentas, datosPyL, margenNetoReal, clientesTop5, proveedoresCostos } from '@/lib/financialAnalysis'

export function Dashboard() {
  const kpis = calcularKPIs()

  const formatMoney = (n: number) => `$${(n / 1_000_000).toFixed(1)}M`
  const formatPercent = (n: number) => `${n.toFixed(1)}%`

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Dashboard</h1>
        <p className="text-slate-400 mt-2">Sunday, 7 June 2026</p>
      </div>

      {/* KPIs Grid - Estilo Study Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="card-stat-yellow">
          <p className="stat-label">Facturación 2026</p>
          <p className="stat-value text-yellow-400 mt-3">${(kpis.facturación / 1_000_000).toFixed(1)}M</p>
          <p className="text-xs text-slate-400 mt-2">Enero-Mayo</p>
        </div>

        <div className="card-stat-blue">
          <p className="stat-label">Margen Neto</p>
          <p className="stat-value text-blue-400 mt-3">${formatPercent(kpis.margenNeto)}</p>
          <p className="text-xs text-slate-400 mt-2">Rentabilidad</p>
        </div>

        <div className="card-stat-green">
          <p className="stat-label">Resultado Neto</p>
          <p className="stat-value text-green-400 mt-3">${(datosPyL.resultadoNeto / 1_000_000).toFixed(1)}M</p>
          <p className="text-xs text-slate-400 mt-2">Enero-Mayo</p>
        </div>

        <div className="card-stat-orange">
          <p className="stat-label">Caja Disponible</p>
          <p className="stat-value text-orange-400 mt-3">${(kpis.cajaDisponible / 1_000_000).toFixed(1)}M</p>
          <p className="text-xs text-slate-400 mt-2">Mayo 2026</p>
        </div>

        <div className="card-stat-red">
          <p className="stat-label">Riesgo OSPERYH</p>
          <p className="stat-value text-red-400 mt-3">${formatPercent(kpis.dependenciaCliente)}</p>
          <p className="text-xs text-slate-400 mt-2">Crítico</p>
        </div>
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-premium p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="stat-label">CUENTAS POR COBRAR</p>
              <p className="stat-value text-slate-50 mt-3">$190.8M</p>
            </div>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-xs text-slate-400">OSPERYH concentra 57.4%</p>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="stat-label">GASTOS ANUALES</p>
              <p className="stat-value text-slate-50 mt-3">$943.8M</p>
            </div>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-xs text-slate-400">Proyectado 2026</p>
        </div>

        <div className="card-premium p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="stat-label">AHORRO POTENCIAL</p>
              <p className="stat-value text-slate-50 mt-3">$47.6M</p>
            </div>
            <span className="text-2xl">💡</span>
          </div>
          <p className="text-xs text-slate-400">En costos comerciales</p>
        </div>
      </div>

      {/* Top Clientes */}
      <div className="card-premium p-8">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Top 5 Clientes por CxC</h2>
        <div className="space-y-3">
          {clientesTop5.map((cliente, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-slate-800/50 rounded">
              <div>
                <p className="font-semibold text-slate-200">{cliente.nombre}</p>
                <p className="text-xs text-slate-400">${(cliente.porcentaje).toFixed(1)}% del total</p>
              </div>
              <p className="font-bold text-green-400">${(cliente.cxc / 1_000_000).toFixed(1)}M</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
