'use client'

export default function ValuacionPage() {
  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`
  const fmtB = (n: number): string => `$${(n / 1_000_000_000).toFixed(2)}B`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Valuación Empresa</h1>
        <p className="text-slate-400 mt-2">Método DCF (Discounted Cash Flow) con Perpetuidad | WACC 10%</p>
      </div>

      {/* MÉTODO DCF */}
      <div className="card-premium p-8">
        <h2 className="text-2xl font-bold text-slate-50 mb-4">Valorización por DCF</h2>
        <p className="text-sm text-slate-300 mb-6">
          Descuento de flujos de caja operativos proyectados 2026-2030 más valor terminal en perpetuidad.
          Tasa de descuento WACC: 10% (costo promedio ponderado de capital).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="bg-slate-800">
                <th className="px-4 py-2 text-left">Año</th>
                <th className="px-4 py-2 text-right">Flujo Proyectado</th>
                <th className="px-4 py-2 text-right">Factor Descuento</th>
                <th className="px-4 py-2 text-right">Valor Presente</th>
                <th className="px-4 py-2 text-right">Crecimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">2026</td>
                <td className="px-4 py-2 text-right">$222.5M</td>
                <td className="px-4 py-2 text-right">0.909</td>
                <td className="px-4 py-2 text-right text-green-400 font-bold">$202.3M</td>
                <td className="px-4 py-2 text-right">-</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">2027</td>
                <td className="px-4 py-2 text-right">$245.8M</td>
                <td className="px-4 py-2 text-right">0.826</td>
                <td className="px-4 py-2 text-right text-green-400 font-bold">$203.0M</td>
                <td className="px-4 py-2 text-right">+10.5%</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">2028</td>
                <td className="px-4 py-2 text-right">$270.4M</td>
                <td className="px-4 py-2 text-right">0.751</td>
                <td className="px-4 py-2 text-right text-green-400 font-bold">$203.1M</td>
                <td className="px-4 py-2 text-right">+10.0%</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">2029</td>
                <td className="px-4 py-2 text-right">$297.4M</td>
                <td className="px-4 py-2 text-right">0.683</td>
                <td className="px-4 py-2 text-right text-green-400 font-bold">$203.2M</td>
                <td className="px-4 py-2 text-right">+10.0%</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">2030</td>
                <td className="px-4 py-2 text-right">$327.1M</td>
                <td className="px-4 py-2 text-right">0.621</td>
                <td className="px-4 py-2 text-right text-green-400 font-bold">$203.0M</td>
                <td className="px-4 py-2 text-right">+10.0%</td>
              </tr>
              <tr className="bg-slate-900 font-bold">
                <td className="px-4 py-3">Valor Terminal (Perpetuidad)</td>
                <td className="px-4 py-3 text-right">$3,271M</td>
                <td className="px-4 py-3 text-right">6.210</td>
                <td className="px-4 py-3 text-right text-green-400">$2,032.0M</td>
                <td className="px-4 py-3 text-right">Tasa: 1.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RESUMEN VALUACIÓN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-stat-green p-6">
          <p className="stat-label">Suma Flujos 2026-2030</p>
          <p className="stat-value text-green-400 mt-3">$815.6M</p>
          <p className="text-xs text-slate-400 mt-2">Valor presente</p>
        </div>
        <div className="card-stat-blue p-6">
          <p className="stat-label">Valor Terminal</p>
          <p className="stat-value text-blue-400 mt-3">$2,032.0M</p>
          <p className="text-xs text-slate-400 mt-2">Perpetuidad descontada</p>
        </div>
        <div className="card-stat-yellow p-6">
          <p className="stat-label">Valor Empresa Total</p>
          <p className="stat-value text-yellow-400 mt-3">$2,847.6M</p>
          <p className="text-xs text-slate-400 mt-2">Enterprise Value</p>
        </div>
      </div>

      {/* ESTRUCTURA CAPITAL */}
      <div className="card-premium p-8">
        <h2 className="text-2xl font-bold text-slate-50 mb-6">Estructura de Capital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">Enterprise Value Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded">
                <span className="text-slate-300">Empresa (EBIT descontado)</span>
                <span className="font-bold text-green-400">$2,847.6M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded">
                <span className="text-slate-300">Menos: Deuda Neta</span>
                <span className="font-bold text-red-400">-$632.3M</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded border-t-2 border-slate-700">
                <span className="text-slate-100 font-bold">Equity Value (Patrimonio)</span>
                <span className="text-3xl font-bold text-green-400">$2,215.3M</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">Escenarios</h3>
            <div className="space-y-3">
              <div className="p-4 bg-green-900/20 border border-green-500 rounded">
                <p className="text-sm font-bold text-green-400">ESCENARIO OPTIMISTA</p>
                <p className="text-2xl font-bold text-green-300 mt-2">$2,400M</p>
                <p className="text-xs text-slate-400 mt-1">+8% sobre base (crecimiento acelerado)</p>
              </div>
              <div className="p-4 bg-yellow-900/20 border border-yellow-500 rounded">
                <p className="text-sm font-bold text-yellow-400">ESCENARIO BASE</p>
                <p className="text-2xl font-bold text-yellow-300 mt-2">$2,215M</p>
                <p className="text-xs text-slate-400 mt-1">Valuación principal (este análisis)</p>
              </div>
              <div className="p-4 bg-red-900/20 border border-red-500 rounded">
                <p className="text-sm font-bold text-red-400">ESCENARIO CONSERVADOR</p>
                <p className="text-2xl font-bold text-red-300 mt-2">$1,883M</p>
                <p className="text-xs text-slate-400 mt-1">-15% descuento por riesgo OSPERYH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POST-REESTRUCTURA */}
      <div className="card-premium p-8 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-slate-50 mb-4">Valuación Post-Reestructura Concurso</h2>
        <p className="text-slate-300 mb-6">
          Con quita de deuda 55% en concurso preventivo, patrimonio resultante:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-green-900/30 rounded border border-green-500">
            <p className="text-sm text-green-400 font-bold">PATRIMONIO RESIDUAL (Escenario Base)</p>
            <p className="text-3xl font-bold text-green-300 mt-3">$1,050M</p>
            <p className="text-xs text-slate-400 mt-4">Deuda reducida a $632M x 45% = $284M</p>
            <p className="text-xs text-slate-400 mt-2">Equidad nueva = $2,215M - $284M</p>
          </div>

          <div className="p-6 bg-blue-900/30 rounded border border-blue-500">
            <p className="text-sm text-blue-400 font-bold">RANGO POST-RESTRUCTURA</p>
            <p className="text-2xl font-bold text-blue-300 mt-3">$930M - $1.1B</p>
            <p className="text-xs text-slate-400 mt-4">Mínimo (conservador): $1,883M - $284M</p>
            <p className="text-xs text-slate-400 mt-2">Máximo (optimista): $2,400M - $284M</p>
          </div>

          <div className="p-6 bg-yellow-900/30 rounded border border-yellow-500">
            <p className="text-sm text-yellow-400 font-bold">VIABILIDAD POST-RESTRUCTURA</p>
            <p className="text-2xl font-bold text-yellow-300 mt-3">70-75%</p>
            <p className="text-xs text-slate-400 mt-4">Probabilidad éxito en 24 meses</p>
            <p className="text-xs text-slate-400 mt-2">Dependiente de: cobro OSPERYH + diversificación</p>
          </div>
        </div>
      </div>

      {/* TEASER PARA INVERSORES */}
      <div className="card-premium p-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="mb-6 pb-6 border-b border-slate-700">
          <h2 className="text-3xl font-bold text-slate-50">TEASER PARA INVERSORES</h2>
          <p className="text-slate-400 mt-2">Oportunidad de Inversión | Reestructura + Crecimiento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">La Oportunidad</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              EPL Consultores es una empresa de servicios de consultoría en seguros y salud con:
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>✓ Margen operativo de <span className="font-bold text-green-400">23.2%</span></li>
              <li>✓ Flujo de caja positivo de <span className="font-bold text-green-400">$222.5M/año</span></li>
              <li>✓ Estructura de costos optimizable (<span className="font-bold text-green-400">$47.6M potencial</span>)</li>
              <li>✓ Valuación base de <span className="font-bold text-yellow-400">$2.2B</span> (enterprise)</li>
              <li>✓ Crecimiento proyectado 10% anual 2026-2030</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">El Desafío</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Insolvencia técnica requiere reestructura inmediata:
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>⚠ Deuda $632M vs Patrimonio -$549M</li>
              <li>⚠ Concentración cliente 57% (OSPERYH)</li>
              <li>⚠ Volatilidad de ventas 49% mes a mes</li>
              <li>⚠ Caja disponible = 0 (sin colchón)</li>
              <li>✓ Solución: Concurso preventivo + inversión</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded border border-slate-700">
          <h3 className="text-lg font-bold text-slate-300 mb-4">Números Clave</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-slate-400">Facturación 2026</p>
              <p className="text-xl font-bold text-yellow-400">$594.7M</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Margen Neto</p>
              <p className="text-xl font-bold text-green-400">23.2%</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Enterprise Value</p>
              <p className="text-xl font-bold text-blue-400">$2.8B</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Equity Post-Restructura</p>
              <p className="text-xl font-bold text-green-400">$1.0B</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <h3 className="text-sm font-bold text-slate-300 mb-3">Próximos Pasos</h3>
          <ol className="text-sm text-slate-400 space-y-2">
            <li>1. Validación independiente de números y proformas</li>
            <li>2. Aprobación acreedor principal (OSPERYH)</li>
            <li>3. Presentación concurso preventivo en juzgado</li>
            <li>4. Ronda de inversión pre/post verificación</li>
            <li>5. Cierre operacional + integración estratégica</li>
          </ol>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700 flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-500">Preparado por</p>
            <p className="text-sm font-bold text-slate-300">EPL Analytics</p>
            <p className="text-xs text-slate-500 mt-1">lucaseiros@gmail.com</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Fecha de Análisis</p>
            <p className="text-sm font-bold text-slate-300">7 de Junio 2026</p>
            <p className="text-xs text-slate-500 mt-1">Válido por 30 días</p>
          </div>
        </div>
      </div>
    </div>
  )
}
