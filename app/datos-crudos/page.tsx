'use client'

import { useState } from 'react'
import { datosVentas, clientesTop5 } from '@/lib/financialAnalysis'

export default function DatosCrudosPage() {
  const [selectedTab, setSelectedTab] = useState<'ventas' | 'clientes'>('ventas')

  // Datos de ventas por mes para muestra
  const ventasMuestra = [
    { mes: 'Enero', monto: datosVentas.enero, registros: 28 },
    { mes: 'Febrero', monto: datosVentas.febrero, registros: 22 },
    { mes: 'Marzo', monto: datosVentas.marzo, registros: 18 },
    { mes: 'Abril', monto: datosVentas.abril, registros: 20 },
    { mes: 'Mayo', monto: datosVentas.mayo, registros: 28 },
  ]

  const formatMoney = (n: number) => `$${(n / 1_000_000).toFixed(1)}M`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-1">Datos Crudos</h1>
        <p className="text-slate-400">Información transaccional consolidada • Base: Enero-Mayo 2026</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-700">
        <button
          onClick={() => setSelectedTab('ventas')}
          className={`px-6 py-3 font-medium transition border-b-2 ${
            selectedTab === 'ventas'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
          }`}
        >
          💰 Ventas por Mes (137 registros)
        </button>
        <button
          onClick={() => setSelectedTab('clientes')}
          className={`px-6 py-3 font-medium transition border-b-2 ${
            selectedTab === 'clientes'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
          }`}
        >
          📊 Clientes Top 5 (CxC)
        </button>
      </div>

      {/* Contenido por Tab */}
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          {selectedTab === 'ventas' && (
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-300">Mes</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-emerald-400">Total Mensual</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-blue-400">Registros</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-slate-300">Promedio por Venta</th>
                </tr>
              </thead>
              <tbody>
                {ventasMuestra.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="px-6 py-4 text-sm text-slate-300">{row.mes}</td>
                    <td className="px-6 py-4 text-right text-sm text-emerald-400 font-semibold">{formatMoney(row.monto)}</td>
                    <td className="px-6 py-4 text-right text-sm text-blue-400">{row.registros}</td>
                    <td className="px-6 py-4 text-right text-sm text-slate-300">${(row.monto / row.registros / 1_000_000).toFixed(2)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {selectedTab === 'clientes' && (
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-300">Cliente</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-amber-400">Cuentas por Cobrar</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-red-400">% del Total CxC</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-slate-300">Riesgo</th>
                </tr>
              </thead>
              <tbody>
                {clientesTop5.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="px-6 py-4 text-sm text-slate-300">{row.nombre}</td>
                    <td className="px-6 py-4 text-right text-sm text-amber-400 font-semibold">{formatMoney(row.cxc)}</td>
                    <td className="px-6 py-4 text-right text-sm text-red-400">{row.porcentaje}%</td>
                    <td className="px-6 py-4 text-right text-sm">
                      {idx === 0 ? (
                        <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs font-semibold">CRÍTICO</span>
                      ) : (
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs font-semibold">Normal</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Nota sobre datos completos */}
      <div className="card-premium p-6 bg-slate-800/50">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📥</span>
          <div>
            <p className="font-semibold text-slate-50 mb-1">Datos Completos Disponibles</p>
            <p className="text-sm text-slate-400">
              Los datos crudos completos (137 registros de ventas, 81 de cobranzas, 282 de compras) están consolidados en el análisis.
              Para análisis granular o exportación, usar el módulo de Cargar Datos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
