'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UploadFormProps {
  onSuccess?: () => void
}

const fileConfig = [
  { key: 'ventas', label: '📊 Ventas.csv', icon: '💰', accept: '.csv' },
  { key: 'compras', label: '📦 Compras.csv', icon: '🛒', accept: '.csv' },
  { key: 'pagos', label: '💳 Pagos.csv', icon: '💸', accept: '.csv' },
  { key: 'cobranzas', label: '📈 Cobranzas.csv', icon: '✅', accept: '.csv' },
  { key: 'banco', label: '🏦 Banco (múltiples)', icon: '🏛️', accept: '.csv,.xlsx,.xls,.pdf' },
  { key: 'balance', label: '📋 Balance.csv', icon: '📑', accept: '.csv' },
]

export function UploadForm({ onSuccess }: UploadFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [files, setFiles] = useState<{ [key: string]: File[] }>({
    ventas: [],
    compras: [],
    pagos: [],
    cobranzas: [],
    banco: [],
    balance: [],
  })

  const handleFileChange = (fileType: string, newFiles: FileList | null) => {
    if (newFiles) {
      setFiles(prev => ({ ...prev, [fileType]: Array.from(newFiles) }))
    }
    setError(null)
    setSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      Object.entries(files).forEach(([key, fileList]) => {
        fileList.forEach((file, idx) => {
          formData.append(`${key}${idx}`, file)
        })
      })

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Error al cargar archivos')

      setSuccess(true)
      setFiles({
        ventas: [],
        compras: [],
        pagos: [],
        cobranzas: [],
        banco: [],
        balance: [],
      })
      onSuccess?.()
      // Redirigir al dashboard después de 1.5 segundos
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-premium p-8 max-w-3xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Cargar Datos Mensuales</h2>
      <p className="text-slate-600 text-sm mb-8">Sube los archivos financieros para actualizar el análisis</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {fileConfig.map(({ key, label, accept }) => (
          <div key={key} className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              {label}
            </label>
            <input
              type="file"
              multiple={key === 'banco'}
              accept={accept}
              onChange={(e) => handleFileChange(key, e.target.files)}
              className="block w-full text-xs text-slate-600 cursor-pointer
                file:mr-3 file:py-2 file:px-3
                file:rounded-md file:border-0
                file:text-xs file:font-medium
                file:bg-slate-700 file:text-white
                hover:file:bg-slate-800 file:cursor-pointer
                file:transition-colors"
            />
            {files[key as keyof typeof files]?.length > 0 && (
              <div className="mt-2 space-y-1">
                {files[key as keyof typeof files].map((f, i) => (
                  <p key={i} className="text-xs text-green-700 font-medium">✓ {f.name}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-6 rounded">
          <p className="text-red-300 text-sm font-medium">⚠️ {error}</p>
        </div>
      )}

      {success && (
        <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-4 mb-6 rounded">
          <p className="text-emerald-300 text-sm font-medium">✓ Datos cargados exitosamente • Redirigiendo al dashboard...</p>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || Object.values(files).every(f => f.length === 0)}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex-1"
        >
          {loading ? '⏳ Procesando...' : '📤 Cargar Datos'}
        </button>
      </div>

      <p className="text-xs text-slate-500 mt-4">
        💡 Para Banco puedes subir múltiples archivos (CSV, XLS, XLSX, PDF)
      </p>
    </form>
  )
}
