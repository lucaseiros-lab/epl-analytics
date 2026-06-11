'use client'

export default function PresupuestoPage() {
  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`

  const escenarios = [
    {
      nombre: 'Escenario Base',
      descripcion: 'Crecimiento 5% mensual + 10% reducción costos',
      probabilidad: 60,
      ventas: 875_400_000,
      costos: 425_600_000,
      flujoAnual: 449_800_000,
      saldoFinal: 449_800_000,
      color: 'from-blue-600 to-blue-500'
    },
    {
      nombre: 'Escenario Optimista',
      descripcion: 'Crecimiento 12% mensual + 20% reducción costos',
      probabilidad: 25,
      ventas: 1_125_300_000,
      costos: 340_900_000,
      flujoAnual: 784_400_000,
      saldoFinal: 784_400_000,
      color: 'from-green-600 to-green-500'
    },
    {
      nombre: 'Escenario Conservador',
      descripcion: 'Crecimiento 2% mensual + 5% reducción costos',
      probabilidad: 15,
      ventas: 621_200_000,
      costos: 493_100_000,
      flujoAnual: 128_100_000,
      saldoFinal: 128_100_000,
      color: 'from-amber-600 to-amber-500'
    }
  ]

  const asuncionesBase = [
    { concepto: 'Crecimiento de Ventas', valor: '5% - 12% mensual', rango: 'Según escenario' },
    { concepto: 'Retenciones', valor: '8%', rango: 'Sobre facturación' },
    { concepto: 'Impuestos', valor: '2%', rango: 'Sobre facturación' },
    { concepto: 'Reducción de Costos', valor: '5% - 20%', rango: 'Según escenario' },
    { concepto: 'Gastos Bancarios', valor: '$500-600K', rango: 'Mensual' },
    { concepto: 'Período de Proyección', valor: 'Jul-Dic 2026', rango: '6 meses' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Presupuestos Financieros 2026</h1>
        <p className="text-slate-400 mt-2">Proyecciones Jul-Dic 2026 | Basados en escenarios de crecimiento</p>
      </div>

      {/* Escenarios */}
      <div className="space-y-4">
        {escenarios.map((esc, idx) => (
          <div key={idx} className="card-premium overflow-hidden">
            <div className={`bg-gradient-to-r ${esc.color} p-6`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{esc.nombre}</h3>
                  <p className="text-sm text-white/80 mt-1">{esc.descripcion}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{esc.probabilidad}%</div>
                  <div className="text-xs text-white/80">Probabilidad</div>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-400 uppercase">Ventas Proyectadas</p>
                <p className="text-2xl font-bold text-slate-50 mt-2">{fmt(esc.ventas)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">Costos Operativos</p>
                <p className="text-2xl font-bold text-red-400 mt-2">({fmt(esc.costos)})</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">Flujo Neto Anual</p>
                <p className="text-2xl font-bold text-green-400 mt-2">{fmt(esc.flujoAnual)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">Saldo Final 31-Dic</p>
                <p className="text-2xl font-bold text-blue-400 mt-2">{fmt(esc.saldoFinal)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Asunciones Base */}
      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">Asunciones de Proyección</h2>
          <p className="text-xs text-slate-400 mt-1">Parámetros utilizados en los escenarios</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <tbody>
              {asuncionesBase.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-950/30 border-b' : 'border-b bg-slate-950/50'}>
                  <td className="px-6 py-4 font-semibold text-slate-200">{item.concepto}</td>
                  <td className="px-6 py-4 text-slate-400">{item.valor}</td>
                  <td className="px-6 py-4 text-slate-500 text-right">{item.rango}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="card-premium p-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Plan de Acción por Escenario</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold text-blue-400 mb-2">📊 Escenario Base (60% probabilidad)</p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>✓ Mantener operación actual con optimizaciones menores</li>
              <li>✓ Generar flujo de $449.8M para pago de deuda</li>
              <li>✓ Proyección realista: requiere disciplina operativa</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-green-400 mb-2">🚀 Escenario Optimista (25% probabilidad)</p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>✓ Diversificación de clientes + 3-5 nuevas cuentas grandes</li>
              <li>✓ Automatización de procesos clave (ahorro 20% costos)</li>
              <li>✓ Flujo anual de $784.4M: viabilidad con crecimiento</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 pl-4">
            <p className="font-semibold text-amber-400 mb-2">⚠️ Escenario Conservador (15% probabilidad)</p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>✓ Riesgo si cobros OSPERYH se atrasan &gt; 30 días</li>
              <li>✓ Requiere acciones inmediatas: línea de crédito, refinanciamiento</li>
              <li>✓ Flujo mínimo de $128.1M: justo para serviciar deuda</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Notas */}
      <div className="card-premium p-6 border-l-4 border-slate-500">
        <h3 className="text-sm font-bold text-slate-400 mb-3">📝 NOTAS IMPORTANTES</h3>
        <ul className="text-xs text-slate-400 space-y-2">
          <li>* Proyecciones basadas en datos reales Enero-Junio 2026</li>
          <li>* Escenarios incluyen impacto de plan de acción (cobro OSPERYH, reducción costos)</li>
          <li>* Flujos proyectados incluyen retenciones e impuestos</li>
          <li>* Para cambios en supuestos, contactar área de Finanzas</li>
          <li>* Este presupuesto se actualizará mensualmente con datos reales</li>
        </ul>
      </div>
    </div>
  )
}
