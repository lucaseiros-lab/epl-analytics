'use client'

import { generarProyeccionAnual } from '@/lib/financialAnalysis'

export default function CashFlowPage() {
  const proyecciones = generarProyeccionAnual()

  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`
  const fmtPercent = (n: number): string => `${n.toFixed(1)}%`

  const totales = {
    facturacion: proyecciones.reduce((a, b) => a + b.facturacion, 0),
    retenciones: proyecciones.reduce((a, b) => a + b.retenciones, 0),
    impuestos: proyecciones.reduce((a, b) => a + b.impuestos, 0),
    gastos: proyecciones.reduce((a, b) => a + b.gastosBancarios, 0),
    ingresos: proyecciones.reduce((a, b) => a + b.ingresosNetos, 0),
    egresos: proyecciones.reduce((a, b) => a + b.egresos, 0),
    flujo: proyecciones.reduce((a, b) => a + b.flujoNeto, 0),
  }

  const ratioRetenciones = (totales.retenciones / totales.facturacion) * 100
  const ratioImpuestos = (totales.impuestos / totales.facturacion) * 100
  const ratioEgresos = (totales.egresos / totales.facturacion) * 100

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Flujo de Caja 2026</h1>
        <p className="text-slate-400 mt-2">Proyección Anual | Real (Ene-May) + Proyectado (Jun-Dic)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-stat-green">
          <p className="stat-label">FLUJO ANUAL NETO</p>
          <p className="stat-value text-green-400 mt-3">{fmt(totales.flujo)}</p>
          <p className="text-xs text-slate-400 mt-2">2026 Completo</p>
        </div>
        <div className="card-stat-blue">
          <p className="stat-label">SALDO FINAL PROYECTADO</p>
          <p className="stat-value text-blue-400 mt-3">{fmt(proyecciones[11].saldoAcumulado)}</p>
          <p className="text-xs text-slate-400 mt-2">31 Diciembre 2026</p>
        </div>
        <div className="card-stat-yellow">
          <p className="stat-label">FACTURACION ANUAL</p>
          <p className="stat-value text-yellow-400 mt-3">{fmt(totales.facturacion)}</p>
          <p className="text-xs text-slate-400 mt-2">Ingresos brutos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-premium p-4">
          <p className="stat-label">RETENCIONES</p>
          <p className="text-2xl font-bold text-red-400 mt-2">{fmt(totales.retenciones)}</p>
          <p className="text-xs text-slate-400 mt-1">{fmtPercent(ratioRetenciones)}%</p>
        </div>
        <div className="card-premium p-4">
          <p className="stat-label">IMPUESTOS</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">{fmt(totales.impuestos)}</p>
          <p className="text-xs text-slate-400 mt-1">{fmtPercent(ratioImpuestos)}%</p>
        </div>
        <div className="card-premium p-4">
          <p className="stat-label">GASTOS BANCARIOS</p>
          <p className="text-2xl font-bold text-purple-400 mt-2">{fmt(totales.gastos)}</p>
          <p className="text-xs text-slate-400 mt-1">Comisiones</p>
        </div>
        <div className="card-premium p-4">
          <p className="stat-label">COSTOS OPERATIVOS</p>
          <p className="text-2xl font-bold text-pink-400 mt-2">{fmt(totales.egresos)}</p>
          <p className="text-xs text-slate-400 mt-1">{fmtPercent(ratioEgresos)}%</p>
        </div>
      </div>

      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">FLUJO DE CAJA MENSUAL DETALLADO</h2>
          <p className="text-xs text-slate-400 mt-1">Desglose: Facturacion - Retenciones - Impuestos - Gastos - Egresos</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-800">
                <th className="px-2 py-2 text-left font-bold">Mes</th>
                <th className="px-2 py-2 text-right">Facturacion</th>
                <th className="px-2 py-2 text-right">Retenciones</th>
                <th className="px-2 py-2 text-right">Impuestos</th>
                <th className="px-2 py-2 text-right">Gastos Banc.</th>
                <th className="px-2 py-2 text-right text-green-400">Ingresos Netos</th>
                <th className="px-2 py-2 text-right">Costos</th>
                <th className="px-2 py-2 text-right text-blue-400">Flujo Neto</th>
                <th className="px-2 py-2 text-right text-yellow-400">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {proyecciones.map((p, i) => (
                <tr key={i} className={i < 5 ? 'border-b bg-slate-950/30' : 'border-b bg-slate-950/50'}>
                  <td className="px-2 py-2 font-semibold text-slate-200">{p.mes}</td>
                  <td className="px-2 py-2 text-right">{fmt(p.facturacion)}</td>
                  <td className="px-2 py-2 text-right text-red-400">({fmt(p.retenciones)})</td>
                  <td className="px-2 py-2 text-right text-orange-400">({fmt(p.impuestos)})</td>
                  <td className="px-2 py-2 text-right text-purple-400">({fmt(p.gastosBancarios)})</td>
                  <td className="px-2 py-2 text-right text-green-400 font-bold">{fmt(p.ingresosNetos)}</td>
                  <td className="px-2 py-2 text-right text-pink-400">({fmt(p.egresos)})</td>
                  <td className="px-2 py-2 text-right text-blue-400 font-bold">{fmt(p.flujoNeto)}</td>
                  <td className="px-2 py-2 text-right text-yellow-400 font-bold">{fmt(p.saldoAcumulado)}</td>
                </tr>
              ))}
              <tr className="bg-slate-800 font-bold">
                <td className="px-2 py-3">TOTAL 2026</td>
                <td className="px-2 py-3 text-right">{fmt(totales.facturacion)}</td>
                <td className="px-2 py-3 text-right text-red-400">({fmt(totales.retenciones)})</td>
                <td className="px-2 py-3 text-right text-orange-400">({fmt(totales.impuestos)})</td>
                <td className="px-2 py-3 text-right text-purple-400">({fmt(totales.gastos)})</td>
                <td className="px-2 py-3 text-right text-green-400">{fmt(totales.ingresos)}</td>
                <td className="px-2 py-3 text-right text-pink-400">({fmt(totales.egresos)})</td>
                <td className="px-2 py-3 text-right text-blue-400">{fmt(totales.flujo)}</td>
                <td className="px-2 py-3 text-right text-yellow-400">{fmt(proyecciones[11].saldoAcumulado)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-stat-yellow p-8">
          <p className="stat-label">SALDO INICIAL (31/05/2026)</p>
          <p className="text-5xl font-bold text-yellow-400 mt-4">$31.0M</p>
          <p className="text-sm text-slate-300 mt-4">Banco Francés - Efectivo disponible</p>
        </div>
        <div className="card-stat-green p-8">
          <p className="stat-label">SALDO PROYECTADO (31/12/2026)</p>
          <p className="text-5xl font-bold text-green-400 mt-4">{fmt(proyecciones[11].saldoAcumulado)}</p>
          <p className="text-sm text-slate-300 mt-4">Cierre de año - Flujos positivos</p>
        </div>
      </div>

      <div className="card-premium p-6 border-l-4 border-blue-500">
        <h3 className="text-sm font-bold text-blue-400 mb-3">NOTAS IMPORTANTES</h3>
        <ul className="text-xs text-slate-300 space-y-2">
          <li>* Datos REALES Enero-Mayo 2026</li>
          <li>* Retenciones: 8% sobre facturación</li>
          <li>* Impuestos: 2% sobre facturación</li>
          <li>* Gastos Bancarios: 487-500K mensuales</li>
          <li>* Junio-Diciembre: Proyecciones basadas en tendencia</li>
          <li>* Sensible a cambios en cobranzas y volatilidad</li>
        </ul>
      </div>
    </div>
  )
}
