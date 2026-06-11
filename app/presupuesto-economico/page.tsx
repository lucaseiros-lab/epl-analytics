'use client'

import { useState } from 'react'

export default function PresupuestoEconomicoPage() {
  const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`

  const gastosActuales = [
    { categoria: 'Sueldos y Beneficios', monto: 96_895_321, porcentaje: 18.9, periodo: 'Mayo 2026' },
    { categoria: 'Servicios Tercerizados', monto: 72_300_000, porcentaje: 14.1, periodo: 'Mayo 2026' },
    { categoria: 'Honorarios Profesionales', monto: 65_400_000, porcentaje: 12.8, periodo: 'Mayo 2026' },
    { categoria: 'Alquileres y Servicios Básicos', monto: 48_562_147, porcentaje: 9.5, periodo: 'Mayo 2026' },
    { categoria: 'Gastos Bancarios', monto: 24_182_250, porcentaje: 4.7, periodo: 'Mayo 2026' },
    { categoria: 'Marketing y Publicidad', monto: 18_750_000, porcentaje: 3.7, periodo: 'Mayo 2026' },
  ]

  const proyeccionesAño = [
    {
      mes: 'Enero',
      sueldos: 96.9,
      servicios: 72.3,
      honorarios: 65.4,
      alquileres: 48.6,
      otros: 46.8,
      total: 330.0
    },
    {
      mes: 'Febrero',
      sueldos: 96.9,
      servicios: 72.3,
      honorarios: 65.4,
      alquileres: 48.6,
      otros: 46.8,
      total: 330.0
    },
    {
      mes: 'Marzo',
      sueldos: 96.9,
      servicios: 72.3,
      honorarios: 65.4,
      alquileres: 48.6,
      otros: 46.8,
      total: 330.0
    },
    {
      mes: 'Abril',
      sueldos: 96.9,
      servicios: 72.3,
      honorarios: 65.4,
      alquileres: 48.6,
      otros: 46.8,
      total: 330.0
    },
    {
      mes: 'Mayo',
      sueldos: 96.9,
      servicios: 72.3,
      honorarios: 65.4,
      alquileres: 48.6,
      otros: 46.8,
      total: 330.0
    },
    {
      mes: 'Junio',
      sueldos: 93.0,
      servicios: 68.5,
      honorarios: 62.0,
      alquileres: 46.2,
      otros: 44.5,
      total: 314.2
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Presupuesto Económico 2026</h1>
        <p className="text-slate-400 mt-2">Proyección de gastos operacionales por categoría</p>
      </div>

      {/* Gastos Actuales */}
      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">GASTOS ACTUALES POR CATEGORÍA</h2>
          <p className="text-xs text-slate-400 mt-1">Desglose de gastos principales (Mayo 2026)</p>
        </div>

        <div className="p-6 space-y-4">
          {gastosActuales.map((gasto, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-200">{gasto.categoria}</span>
                <span className="text-sm font-bold text-slate-300">{fmt(gasto.monto)} ({gasto.porcentaje.toFixed(1)}%)</span>
              </div>
              <div className="h-6 bg-slate-800 rounded-lg overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-end pr-2"
                  style={{ width: `${gasto.porcentaje * 2}%` }}
                >
                  {gasto.porcentaje > 3 && <span className="text-xs font-bold text-white">{gasto.porcentaje.toFixed(0)}%</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-900/50 border-t border-slate-800">
          <p className="text-sm font-bold text-slate-50">
            Total gastos estimados: $512.1M anuales ($42.7M/mes promedio)
          </p>
        </div>
      </div>

      {/* Proyección Anual */}
      <div className="card-premium overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-50">PROYECCIÓN ANUAL POR MES</h2>
          <p className="text-xs text-slate-400 mt-1">Gastos operacionales estimados ENE-JUN 2026 (M)</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-800">
                <th className="px-4 py-2 text-left font-bold">Mes</th>
                <th className="px-4 py-2 text-right">Sueldos</th>
                <th className="px-4 py-2 text-right">Servicios</th>
                <th className="px-4 py-2 text-right">Honorarios</th>
                <th className="px-4 py-2 text-right">Alquileres</th>
                <th className="px-4 py-2 text-right">Otros</th>
                <th className="px-4 py-2 text-right font-bold">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {proyeccionesAño.map((row, idx) => (
                <tr key={idx} className={idx < 5 ? 'bg-slate-950/30 border-b' : 'bg-slate-950/50 border-b border-t-2 border-slate-700'}>
                  <td className="px-4 py-2 font-semibold text-slate-200">{row.mes}</td>
                  <td className="px-4 py-2 text-right text-slate-300">${row.sueldos.toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right text-slate-300">${row.servicios.toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right text-slate-300">${row.honorarios.toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right text-slate-300">${row.alquileres.toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right text-slate-300">${row.otros.toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right text-blue-400 font-bold">${row.total.toFixed(1)}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Análisis y Recomendaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-slate-50 mb-4">🎯 Oportunidades de Ahorro</h3>
          <ul className="text-sm text-slate-300 space-y-3">
            <li><strong className="text-yellow-400">Servicios Tercerizados:</strong> Reducción 20% = $14.5M/año</li>
            <li><strong className="text-yellow-400">Honorarios Profesionales:</strong> Renegociar = $13.1M/año</li>
            <li><strong className="text-yellow-400">Sueldos y Beneficios:</strong> Optimizar = $9.7M/año</li>
            <li><strong className="text-green-400">TOTAL POTENCIAL:</strong> $37.3M/año (7.3%)</li>
          </ul>
        </div>

        <div className="card-premium p-6">
          <h3 className="text-lg font-bold text-slate-50 mb-4">📊 Indicadores Clave</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-400">Gastos como % de Ingresos</p>
              <p className="text-2xl font-bold text-slate-50">~85%</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Margen Operacional</p>
              <p className="text-2xl font-bold text-green-400">~15%</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Tendencia (Ene-Jun)</p>
              <p className="text-2xl font-bold text-amber-400">-4.8% ↓</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plan de Acción */}
      <div className="card-premium p-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Plan de Acción para Optimización de Gastos</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold text-red-400 mb-1">🔴 INMEDIATO (30 días)</p>
            <p className="text-sm text-slate-300">Auditoría de servicios tercerizados. Identificar servicios duplicados o innecesarios.</p>
          </div>

          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <p className="font-semibold text-amber-400 mb-1">🟡 CORTO PLAZO (90 días)</p>
            <p className="text-sm text-slate-300">Renegociar contratos de honorarios profesionales. Buscar alternativas de proveedores.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold text-blue-400 mb-1">🔵 MEDIANO PLAZO (6 meses)</p>
            <p className="text-sm text-slate-300">Automatizar procesos clave. Traer internamente funciones de alto costo. Evaluar capacidad ociosa.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-semibold text-green-400 mb-1">✓ OBJETIVO 2026</p>
            <p className="text-sm text-slate-300">Reducir gastos a 77% de ingresos (de 85%). Target ahorro: $37.3M = Margen 23%.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
