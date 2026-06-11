'use client'

import { useState, ReactNode } from 'react'

interface NavMenuProps {
  uploadBadge: ReactNode
}

export default function NavMenu({ uploadBadge }: NavMenuProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const toggleMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName)
  }

  return (
    <nav className="space-y-1 mb-8">
      <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">📊</span>
        <span className="font-medium text-sm">Dashboard</span>
      </a>

      <a href="/cashflow" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">💰</span>
        <span className="font-medium text-sm">CashFlow</span>
      </a>

      <a href="/estrategias" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">💡</span>
        <span className="font-medium text-sm">Estrategias</span>
      </a>

      <a href="/analisis" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">🔍</span>
        <span className="font-medium text-sm">Análisis</span>
      </a>

      {/* Presupuestos con submenu */}
      <div>
        <button
          onClick={() => toggleMenu('presupuestos')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group"
        >
          <span className="text-lg">📈</span>
          <span className="font-medium text-sm">Presupuestos</span>
          <span className={`ml-auto text-xs transition-transform ${expandedMenu === 'presupuestos' ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {expandedMenu === 'presupuestos' && (
          <div className="ml-4 mt-1 space-y-1 border-l border-slate-700">
            <a href="/presupuesto" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-slate-50 text-sm">
              💼 Financiero
            </a>
            <a href="/presupuesto-economico" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition text-slate-400 hover:text-slate-50 text-sm">
              💵 Económico
            </a>
          </div>
        )}
      </div>

      <a href="/upload" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group relative">
        <span className="text-lg">📁</span>
        <span className="font-medium text-sm">Upload</span>
        {uploadBadge}
      </a>

      <a href="/nomina" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">👥</span>
        <span className="font-medium text-sm">Nómina</span>
      </a>

      <a href="/valuacion" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group">
        <span className="text-lg">💎</span>
        <span className="font-medium text-sm">Valuación</span>
      </a>
    </nav>
  )
}
