'use client'

import { TrafficLight } from './TrafficLight'

interface KPICardProps {
  title: string
  value: number
  unit: string
  status: 'success' | 'warning' | 'danger'
  description: string
  icon: string
}

export function KPICard({
  title,
  value,
  unit,
  status,
  description,
  icon
}: KPICardProps) {
  const statusStyles = {
    success: 'from-emerald-500/10 to-emerald-500/5 border-emerald-200',
    warning: 'from-amber-500/10 to-amber-500/5 border-amber-200',
    danger: 'from-red-500/10 to-red-500/5 border-red-200'
  }

  return (
    <div className={`relative card-premium p-6 bg-gradient-to-br ${statusStyles[status]} group hover:shadow-lg transition-all`}>
      <div className="absolute top-4 right-4 text-3xl opacity-40 group-hover:opacity-60 transition">{icon}</div>

      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">{title}</p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-slate-900">
              {value.toFixed(1)}
            </span>
            <span className="text-sm font-medium text-slate-500">{unit}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>

        <div className="pt-2">
          <TrafficLight status={status} size="sm" />
        </div>
      </div>
    </div>
  )
}
