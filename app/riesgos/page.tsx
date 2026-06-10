'use client'

import { evaluarRiesgos, generarRecomendaciones } from '@/lib/financialAnalysis'

export default function RiesgosPage() {
  const riesgos = evaluarRiesgos()
  const recomendaciones = generarRecomendaciones()

  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`

  const nivelColor: Record<string, string> = {
    'CRÍTICO': 'bg-red-900/20 border-red-500 text-red-400',
    'ALTO': 'bg-orange-900/20 border-orange-500 text-orange-400',
    'MEDIO': 'bg-yellow-900/20 border-yellow-500 text-yellow-400',
    'BAJO': 'bg-green-900/20 border-green-500 text-green-400',
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Análisis de Riesgos</h1>
        <p className="text-slate-400 mt-2">Identificación y mitigación de factores críticos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-stat-red p-6">
          <p className="stat-label">Riesgos Críticos</p>
          <p className="stat-value text-red-400 mt-3">2</p>
          <p className="text-xs text-slate-400 mt-2">Concentración + Caja</p>
        </div>
        <div className="card-stat-orange p-6">
          <p className="stat-label">Riesgos Altos</p>
          <p className="stat-value text-orange-400 mt-3">1</p>
          <p className="text-xs text-slate-400 mt-2">Volatilidad ventas</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-50 mb-4">Riesgos Identificados</h2>
        {riesgos.map((riesgo, idx) => (
          <div key={idx} className={`card-premium border-l-4 p-6 ${nivelColor[riesgo.nivel]}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1">
                  {riesgo.nivel === 'CRÍTICO' && '🚨'}
                  {riesgo.nivel === 'ALTO' && '⚠️'}
                  {riesgo.nivel === 'MEDIO' && '⚡'}
                  {riesgo.nivel === 'BAJO' && '📋'}
                  {' '}{riesgo.nivel}
                </p>
                <h3 className="text-xl font-bold text-slate-50">{riesgo.factor}</h3>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-100">{riesgo.valor.toFixed(1)}%</p>
              </div>
            </div>

            <p className="text-slate-300 mb-3 text-sm leading-relaxed">{riesgo.recomendacion}</p>

            {riesgo.factor === 'Concentración de cliente' && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Plan de Mitigación:</p>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Contacto inmediato con OSPERYH</li>
                  <li>• Prospecting: 5 clientes nuevos</li>
                  <li>• Timeline: 90-120 días</li>
                  <li>• Target: Reducir dependencia a menos de 40%</li>
                </ul>
              </div>
            )}

            {riesgo.factor === 'Volatilidad de ventas' && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Plan de Mitigación:</p>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Contratos largo plazo</li>
                  <li>• Ingresos recurrentes</li>
                  <li>• Análisis de estacionalidad</li>
                  <li>• Target: Reducir volatilidad a 30%</li>
                </ul>
              </div>
            )}

            {riesgo.factor === 'Cobertura de caja' && (
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Plan de Mitigación (URGENTE):</p>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Concurso preventivo: INMEDIATAMENTE</li>
                  <li>• Cobro OSPERYH: 50M en 15 días</li>
                  <li>• Línea de crédito con bancos</li>
                  <li>• Timeline: Semana 1-3</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card-premium p-8">
        <h2 className="text-2xl font-bold text-slate-50 mb-6">Matriz Riesgo-Impacto</h2>

        <div className="relative" style={{ height: '400px' }}>
          <div className="absolute inset-0 border-2 border-slate-700 rounded">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 border-b border-slate-700"></div>
              <div className="flex-1 border-b border-slate-700"></div>
              <div className="flex-1"></div>
            </div>
            <div className="absolute inset-0 flex flex-row">
              <div className="flex-1 border-r border-slate-700"></div>
              <div className="flex-1 border-r border-slate-700"></div>
              <div className="flex-1"></div>
            </div>

            <div className="absolute -top-6 left-0 right-0 flex justify-around text-xs font-bold text-slate-400">
              <span>Bajo</span>
              <span>Medio</span>
              <span>Alto</span>
            </div>
            <div className="absolute top-0 -left-20 h-full flex flex-col justify-around text-xs font-bold text-slate-400">
              <span>Bajo</span>
              <span>Medio</span>
              <span>Alto</span>
            </div>

            <div className="absolute" style={{ left: '75%', top: '5%' }}>
              <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs text-center">Concentración</span>
              </div>
            </div>

            <div className="absolute" style={{ left: '65%', top: '25%' }}>
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs text-center">Volatilidad</span>
              </div>
            </div>

            <div className="absolute" style={{ left: '80%', top: '80%' }}>
              <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-2 border-red-400">
                <span className="text-white font-bold text-xs text-center">Caja</span>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-500/5"></div>
            <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-yellow-500/5"></div>
            <div className="absolute top-0 left-2/3 w-1/3 h-1/3 bg-orange-500/5"></div>

            <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-yellow-500/5"></div>
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-orange-500/5"></div>
            <div className="absolute top-1/3 left-2/3 w-1/3 h-1/3 bg-red-500/10"></div>

            <div className="absolute top-2/3 left-0 w-1/3 h-1/3 bg-orange-500/5"></div>
            <div className="absolute top-2/3 left-1/3 w-1/3 h-1/3 bg-red-500/10"></div>
            <div className="absolute top-2/3 left-2/3 w-1/3 h-1/3 bg-red-500/20 border-2 border-red-500/30"></div>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-6 text-center">
          Matriz de Riesgos: Eje X = Probabilidad | Eje Y = Impacto
        </p>
      </div>

      <div className="card-premium p-8 border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-slate-50 mb-6">Recomendaciones Estratégicas</h2>

        <div className="bg-slate-900/50 p-4 rounded mb-6 border-l-2 border-blue-400">
          <p className="text-sm text-blue-300 font-bold mb-2">DIAGNÓSTICO:</p>
          <p className="text-sm text-slate-300">
            Empresa viable operativamente pero con insolvencia técnica. Viabilidad depende de: Concurso preventivo, Cobro OSPERYH, Diversificación de clientes.
          </p>
        </div>

        <div className="space-y-4">
          {recomendaciones.estrategias.map((est, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-slate-800/30 rounded">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600/30 border border-blue-500">
                  <span className="text-blue-400 font-bold">{est.prioridad}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-50 mb-1">{est.titulo}</h3>
                <p className="text-sm text-slate-400 mb-2">
                  Impacto: <span className="font-bold text-green-400">{fmt(est.impacto)}</span>
                  {' '} | Plazo: <span className="font-bold text-yellow-400">{est.plazo}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-stat-green p-6">
          <p className="stat-label">Viabilidad General</p>
          <p className="stat-value text-green-400 mt-3">CON RIESGOS</p>
          <p className="text-xs text-slate-400 mt-2">Saldo: {fmt(recomendaciones.saldoProyectado)}</p>
        </div>
        <div className="card-stat-blue p-6">
          <p className="stat-label">Probabilidad Éxito</p>
          <p className="stat-value text-blue-400 mt-3">70-75%</p>
          <p className="text-xs text-slate-400 mt-2">24 meses post</p>
        </div>
        <div className="card-stat-yellow p-6">
          <p className="stat-label">Acción Urgente</p>
          <p className="stat-value text-yellow-400 mt-3">CONCURSO</p>
          <p className="text-xs text-slate-400 mt-2">Semana 1</p>
        </div>
      </div>
    </div>
  )
}
