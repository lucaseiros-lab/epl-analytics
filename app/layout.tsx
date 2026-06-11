import type { Metadata } from 'next'
import './globals.css'
import UploadBadge from './components/UploadBadge'

export const metadata: Metadata = {
  title: 'EPL Analytics',
  description: 'Financial Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body>
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-amber-500 mb-1">EPL Analytics</h1>
            <p className="text-xs text-slate-400">Financial Dashboard</p>
          </div>

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
            <a href="/upload" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-slate-300 hover:text-slate-50 group relative">
              <span className="text-lg">📁</span>
              <span className="font-medium text-sm">Upload</span>
              <UploadBadge />
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

          <div className="absolute bottom-6 left-4 right-4 space-y-4 border-t border-slate-800 pt-4">
            <div className="text-xs text-slate-500 text-center">
              v1.0 • EPL Consultores
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
