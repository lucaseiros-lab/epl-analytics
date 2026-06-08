'use client'

import { useState } from 'react'
import { UploadForm } from '@/components/UploadForm'

export default function UploadPage() {
  const [companyName, setCompanyName] = useState('EPL Consultores')
  const [companyCuit, setCompanyCuit] = useState('30-71193999-3')
  const [step, setStep] = useState<'company' | 'upload'>('company')

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('upload')
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Cargar Información Financiera</h1>
        <p className="text-slate-600 mt-2">Actualiza tus datos mensuales para el análisis financiero</p>
      </div>

      {step === 'company' && (
        <form onSubmit={handleCompanySubmit} className="card-premium p-8 max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Datos de la Empresa</h2>

          <div className="space-y-5 mb-8">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                CUIT
              </label>
              <input
                type="text"
                value={companyCuit}
                onChange={(e) => setCompanyCuit(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Continuar →
          </button>
        </form>
      )}

      {step === 'upload' && (
        <div className="space-y-6">
          <div className="card-premium p-4 bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-l-slate-700">
            <p className="text-slate-900 font-semibold text-sm">
              📌 <strong>{companyName}</strong> • {companyCuit}
            </p>
            <button
              onClick={() => setStep('company')}
              className="text-slate-600 hover:text-slate-900 text-xs mt-2 font-medium underline"
            >
              Cambiar empresa
            </button>
          </div>
          <UploadForm onSuccess={() => {}} />
        </div>
      )}
    </div>
  )
}
