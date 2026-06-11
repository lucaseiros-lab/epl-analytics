'use client'

import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'

const EXPECTED_FILES = [
  'Ventas 2026.xlsx',
  'Compras 2026.xlsx',
  'Cobros 2026.xlsx',
  'Pagos 2026.xlsx',
  'Diario.xlsx',
  'LibroMayor.xlsx',
  'Movimientos Banco Frances.xls'
]

interface FileStatus {
  name: string
  status: 'pending' | 'success' | 'error'
}

export default function UploadPage() {
  const [fileStatuses, setFileStatuses] = useState<FileStatus[]>([])
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    // Inicializar archivos como pendientes
    const currentMonth = new Date().toISOString().slice(0, 7) // "2026-06"
    const initial = EXPECTED_FILES.map(f => ({
      name: f.replace('.xlsx', '').replace('.xls', '').replace('.csv', '') + ` ${currentMonth}`,
      status: 'pending' as const
    }))
    setFileStatuses(initial)
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    let successCount = 0

    files.forEach(file => {
      const reader = new FileReader()

      reader.onload = (event) => {
        try {
          const data = event.target?.result
          XLSX.read(data, { type: 'binary' })

          // Marcar como exitoso
          setFileStatuses(prev => prev.map(f => {
            const baseName = f.name.split(' ')[0]
            const fileName = file.name.split('.')[0]
            if (baseName === fileName) {
              return { ...f, status: 'success' }
            }
            return f
          }))

          successCount++
          if (successCount === files.length) {
            setSuccessMessage(`✓ ${files.length} archivo(s) procesado(s) exitosamente`)
            setTimeout(() => setSuccessMessage(''), 3000)
          }

          console.log(`✓ Procesado: ${file.name}`)
        } catch (error) {
          console.error(`Error parsing ${file.name}:`, error)

          // Marcar como error
          setFileStatuses(prev => prev.map(f => {
            const baseName = f.name.split(' ')[0]
            const fileName = file.name.split('.')[0]
            if (baseName === fileName) {
              return { ...f, status: 'error' }
            }
            return f
          }))
        }
      }

      reader.readAsBinaryString(file)
    })
  }

  const allSuccessful = fileStatuses.every(f => f.status === 'success')
  const hasPending = fileStatuses.some(f => f.status === 'pending')

  // Guardar en localStorage
  if (typeof window !== 'undefined') {
    const currentMonth = new Date().toISOString().slice(0, 7)
    if (hasPending) {
      localStorage.setItem(`month-${currentMonth}-pending`, 'true')
    } else if (allSuccessful) {
      localStorage.removeItem(`month-${currentMonth}-pending`)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Upload de Datos Financieros</h1>
        <p className="text-slate-400 mt-2">Sube los archivos del mes actual para actualizar el dashboard</p>
      </div>

      {successMessage && (
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg text-green-300">
          {successMessage}
        </div>
      )}

      <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <label className="block cursor-pointer">
          <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-slate-400 transition">
            <input
              type="file"
              multiple
              accept=".xlsx,.xls,.csv"
              onChange={handleFileUpload}
              className="hidden"
            />
            <p className="text-slate-300 mb-2">📁 Arrastra archivos aquí o clickea</p>
            <p className="text-slate-500 text-sm">Soporta: Excel (.xlsx, .xls) y CSV</p>
          </div>
        </label>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <h2 className="text-xl font-bold text-slate-50 mb-4">📋 Archivos faltantes</h2>
        <div className="space-y-2">
          {fileStatuses.map((file, i) => (
            <div key={i} className="flex items-center gap-3">
              {file.status === 'success' && <span className="text-green-400 text-lg">✓</span>}
              {file.status === 'pending' && <span className="text-slate-500 text-lg">○</span>}
              {file.status === 'error' && <span className="text-red-400 text-lg">✗</span>}
              <span className={
                file.status === 'success' ? 'text-green-400' :
                file.status === 'error' ? 'text-red-400' :
                'text-slate-300'
              }>
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {allSuccessful && (
        <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg text-green-300">
          ✓ Todos los archivos del mes han sido procesados correctamente
        </div>
      )}
    </div>
  )
}
