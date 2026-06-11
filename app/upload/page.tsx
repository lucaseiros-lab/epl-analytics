'use client'

import { useState } from 'react'
import * as XLSX from 'xlsx'

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [parsedData, setParsedData] = useState<any>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    files.forEach(file => {
      const reader = new FileReader()

      reader.onload = (event) => {
        try {
          const data = event.target?.result
          const workbook = XLSX.read(data, { type: 'binary' })

          // Parse each sheet
          const sheetData: any = {}
          workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName]
            sheetData[sheetName] = XLSX.utils.sheet_to_json(worksheet)
          })

          setUploadedFiles(prev => [...prev, file.name])
          setParsedData(prev => ({
            ...prev,
            [file.name]: sheetData
          }))

          // Log para verificar
          console.log(`Parseado: ${file.name}`, sheetData)
        } catch (error) {
          console.error(`Error parsing ${file.name}:`, error)
          alert(`Error al procesar ${file.name}`)
        }
      }

      reader.readAsBinaryString(file)
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-50">Upload de Datos Financieros</h1>
        <p className="text-slate-400 mt-2">Sube tus archivos Excel/CSV para actualizar el dashboard</p>
      </div>

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
          <h2 className="text-xl font-bold text-slate-50 mb-4">Archivos procesados ({uploadedFiles.length})</h2>
          <div className="space-y-2">
            {uploadedFiles.map((file, i) => (
              <div key={i} className="text-slate-300">
                ✓ {file}
              </div>
            ))}
          </div>
        </div>
      )}

      {parsedData && (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold text-slate-50 mb-4">Vista previa de datos</h2>
          <div className="text-slate-300 text-sm overflow-auto max-h-96">
            <pre>{JSON.stringify(parsedData, null, 2).substring(0, 1000)}...</pre>
          </div>
          <p className="text-slate-500 text-xs mt-4">Ver consola del navegador para datos completos</p>
        </div>
      )}

      <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
        <h3 className="text-lg font-bold text-slate-50 mb-4">📋 Archivos esperados:</h3>
        <ul className="text-slate-300 space-y-2 text-sm">
          <li>✓ Ventas 2026.xlsx</li>
          <li>✓ Compras 2026.xlsx</li>
          <li>✓ Cobros (años)</li>
          <li>✓ Pagos 2026.xlsx</li>
          <li>✓ Diario.xlsx / LibroMayor.xlsx</li>
          <li>✓ Movimientos Banco Frances.xls</li>
          <li>✓ Balance Patrimonial / Resultados</li>
        </ul>
      </div>
    </div>
  )
}
