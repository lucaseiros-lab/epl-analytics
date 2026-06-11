'use client'

import { getStatusColor, getStatusLabel } from '../lib/analysis'

interface TrafficLightProps {
  status: 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export function TrafficLight({ status, size = 'md' }: TrafficLightProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const color = getStatusColor(status)
  const label = getStatusLabel(status)

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full`}
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  )
}
