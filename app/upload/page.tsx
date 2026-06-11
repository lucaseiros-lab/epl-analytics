'use client'

import { useState } from 'react'
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

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [successMessage, setSuccessMessage] = useState('')

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

          // Si no hay error, fue exitoso
          setUploadedFiles(prev => [...prev, file.name])
          successCount++

          if (successCount === files.length) {
            setSuccessMessage(`✓ ${files.length} archivo(s) procesado(s) exitosamente`)
            setTimeout(() => setSuccessMessage(''), 3000)
          }

          console.log(`✓ Procesado: ${file.name}`)
        } catch (error) {
          console.error(`Error parsing ${file.name}:`, error)
          alert(`Error al procesar ${file.name}`)
        }
      }

      reader.readAsBinaryString(file)
    })
  }

  const missingFiles = EXPECTED_FILES.filter(f => !uploadedFiles.some(u => u.includes(f.split('.')[0])))
  const hasMissingFiles = missingFiles.length > 0

  // Guardar en localStorage cuando se complete
  if (typeof window !== 'undefined') {
    const currentMonth = new Date().toISOString().slice(0, 7) // "2026-06"
    if (hasMissingFiles) {
      localStorage.setItem(`month-${currentMonth}-pending`, 'true')
    } else if (uploadedFiles.length > 0) {
      localStorage.removeItem(`month-${currentMonth}-pending`)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Upload de Datos Financieros</h1>
        <p className="text-slate-400 mt-2">Sube los archivos del mes para actualizar el dashboard</p>
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

      {uploadedFiles.length > 0 && (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold text-slate-50 mb-4">✓ Archivos procesados ({uploadedFiles.length})</h2>
          <div className="space-y-2">
            {uploadedFiles.map((file, i) => (
              <div key={i} className="text-green-400">
                ✓ {file}
              </div>
            ))}
          </div>
        </div>
      )}

      {hasMissingFiles && (
        <div className="bg-red-900/20 p-6 rounded-lg border border-red-700">
          <h2 className="text-xl font-bold text-red-300 mb-4">🔴 Archivos faltantes ({missingFiles.length})</h2>
          <ul className="text-red-300 space-y-2 text-sm">
            {missingFiles.map((file, i) => (
              <li key={i}>⚠ {file}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
