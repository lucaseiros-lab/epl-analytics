'use client'

export default function EstrategiasPage() {
  const estrategias = [
    {
      titulo: 'Cobro OSPERYH - $50M inmediatos',
      descripcion: 'Contacto directo con OSPERYH para acelerar cobranza de los $109.5M pendientes. Prioridad máxima: representa 57.4% de CxC.',
      impacto: 'CRÍTICO',
      plazo: '7 días',
      icon: '🚨',
      meta: '+$50M caja'
    },
    {
      titulo: 'Reducir gastos comerciales en 20%',
      descripcion: 'Traer adentro funciones tercerizadas ($71.7M/año). Automatizar procesos. Ahorro potencial: $47.6M/año.',
      impacto: 'Alto',
      plazo: '30-90 días',
      icon: '📉',
      meta: '+$47.6M margen'
    },
    {
      titulo: 'Diversificar cartera de clientes',
      descripcion: 'Reducir dependencia OSPERYH de 57% a 25%. Objetivo: 5 nuevos clientes $10M+ cada uno en segmentos salud/seguros.',
      impacto: 'Alto',
      plazo: '90-180 días',
      icon: '🎯',
      meta: 'Estabilidad ingresos'
    },
    {
      titulo: 'Estrategia concurso preventivo',
      descripcion: 'Propuesta a acreedores: pago 40-50% de deuda en 36 meses. Base: flujo positivo $222.5M/año.',
      impacto: 'CRÍTICO',
      plazo: '30 días',
      icon: '⚖️',
      meta: 'Quita 55-60%'
    },
    {
      titulo: 'Lock-in OSPERYH 3+ años',
      descripcion: 'Contrato de largo plazo con OSPERYH para garantizar continuidad de ingresos. Vincular servicios complementarios.',
      impacto: 'Alto',
      plazo: '60 días',
      icon: '📋',
      meta: 'Ingresos garantizados'
    },
    {
      titulo: 'Crecimiento orgánico 15-20%',
      descripcion: 'Servicios complementarios a clientes actuales. Nuevas líneas de servicio high-margin. Meta: $750M ingresos (vs $594.7M actual).',
      impacto: 'Medio',
      plazo: '180+ días',
      icon: '📈',
      meta: 'Ingresos +$155M'
    },
  ]

  const impactoColor = {
    'Alto': 'bg-red-900/20 text-red-400 border-red-500',
    'Medio': 'bg-amber-900/20 text-amber-400 border-amber-500',
    'Bajo': 'bg-blue-900/20 text-blue-400 border-blue-500'
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-1">Estrategias Recomendadas</h1>
        <p className="text-slate-400">Acciones prioritarias según el análisis financiero actual</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {estrategias.map((est, idx) => (
          <div key={idx} className={`card-premium p-6 hover:shadow-lg transition border-l-4 ${
            est.impacto === 'CRÍTICO' ? 'border-l-red-500 bg-red-900/10' :
            est.impacto === 'Alto' ? 'border-l-amber-500 bg-amber-900/10' :
            'border-l-blue-500 bg-blue-900/10'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{est.icon}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border border-l-4 ${impactoColor[est.impacto as keyof typeof impactoColor]}`}>
                {est.impacto}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-50 mb-2">{est.titulo}</h3>
            <p className="text-slate-400 text-sm mb-4">{est.descripcion}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>⏱️ {est.plazo}</span>
              </div>
              <div className="text-xs font-semibold text-green-400">✓ {(est as any).meta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Matriz de prioridad */}
      <div className="card-premium p-8">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Matriz de Prioridad (Impacto vs Plazo)</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-2">🔴 Crítico (0-30 días)</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>✓ Mejorar cobranzas</li>
              <li>✓ Reducir costos</li>
            </ul>
          </div>

          <div className="bg-amber-900/30 border border-amber-500/50 rounded-lg p-4">
            <h4 className="font-semibold text-amber-400 mb-2">🟡 Importante (30-90 días)</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>✓ Renegociar deuda</li>
              <li>✓ Optimizar nómina</li>
            </ul>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">🔵 Mediano plazo (90+ días)</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>✓ Diversificar clientes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
