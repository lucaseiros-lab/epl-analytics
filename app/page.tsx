import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate-50">
          EPL Analytics
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Sistema profesional de análisis financiero. Monitorea los 5 márgenes clave con semáforos automáticos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link href="/dashboard" className="card-premium p-8 group hover:shadow-lg transition hover:-translate-y-1 hover:border-amber-500/50">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-amber-400 transition">
            Dashboard
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Visualiza los 5 márgenes financieros clave con semáforos en tiempo real
          </p>
        </Link>

        <Link href="/upload" className="card-premium p-8 group hover:shadow-lg transition hover:-translate-y-1 hover:border-amber-500/50">
          <div className="text-4xl mb-4">📁</div>
          <h2 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-amber-400 transition">
            Cargar Datos
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Importa tus archivos mensuales (CSV, XLS, PDF) para análisis automático
          </p>
        </Link>
      </div>

      <div className="card-premium p-8 border-l-4 border-l-amber-500 max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-slate-50 mb-4">📋 Archivos Requeridos (Mensual)</h3>
        <div className="grid grid-cols-2 gap-3 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Ventas.csv
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Compras.csv
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Pagos.csv
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Cobranzas.csv
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Banco (múltiples)
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Balance.csv
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          💡 Los archivos pueden estar en CSV, XLS, XLSX o PDF
        </p>
      </div>
    </div>
  )
}
