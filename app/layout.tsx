import type { Metadata } from 'next'
import './globals.css'
import UploadBadge from './components/UploadBadge'
import NavMenu from './components/NavMenu'

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

          <NavMenu uploadBadge={<UploadBadge />} />

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
