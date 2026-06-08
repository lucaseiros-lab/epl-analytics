'use client'

export default function NominaPage() {
  const empleados = [
    { id: 1, nombre: 'Juan Pérez', cargo: 'Gerente', sueldo: 350000, cargas: 85000, total: 435000, antiguedad: '5 años' },
    { id: 2, nombre: 'María García', cargo: 'Analista', sueldo: 280000, cargas: 68000, total: 348000, antiguedad: '3 años' },
    { id: 3, nombre: 'Carlos López', cargo: 'Supervisor', sueldo: 240000, cargas: 58000, total: 298000, antiguedad: '4 años' },
    { id: 4, nombre: 'Ana Martínez', cargo: 'Especialista', sueldo: 220000, cargas: 53000, total: 273000, antiguedad: '2 años' },
    { id: 5, nombre: 'Roberto Silva', cargo: 'Técnico', sueldo: 180000, cargas: 43000, total: 223000, antiguedad: '1 año' },
    { id: 6, nombre: 'Patricia Ruiz', cargo: 'Asistente', sueldo: 150000, cargas: 36000, total: 186000, antiguedad: '1 año' },
  ]

  const totalSueldos = empleados.reduce((sum, e) => sum + e.sueldo, 0)
  const totalCargas = empleados.reduce((sum, e) => sum + e.cargas, 0)
  const totalNomina = totalSueldos + totalCargas
  const porcentajeCargas = ((totalCargas / totalSueldos) * 100).toFixed(1)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50 mb-1">Gestión de Nómina</h1>
        <p className="text-slate-400">Análisis de sueldos y cargas sociales por empleado</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-premium p-6 bg-blue-900/20 border-l-4 border-blue-500">
          <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Total Nómina</p>
          <p className="text-2xl font-bold text-slate-50 mt-2">${totalNomina.toLocaleString()}</p>
        </div>
        <div className="card-premium p-6 bg-emerald-900/20 border-l-4 border-emerald-500">
          <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Sueldos Brutos</p>
          <p className="text-2xl font-bold text-slate-50 mt-2">${totalSueldos.toLocaleString()}</p>
        </div>
        <div className="card-premium p-6 bg-amber-900/20 border-l-4 border-amber-500">
          <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Cargas Sociales</p>
          <p className="text-2xl font-bold text-slate-50 mt-2">${totalCargas.toLocaleString()}</p>
        </div>
        <div className="card-premium p-6 bg-purple-900/20 border-l-4 border-purple-500">
          <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold">% Cargas</p>
          <p className="text-2xl font-bold text-slate-50 mt-2">{porcentajeCargas}%</p>
        </div>
      </div>

      {/* Tabla de empleados */}
      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800 border-b border-slate-700">
                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-300">Empleado</th>
                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-300">Cargo</th>
                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-300">Antigüedad</th>
                <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-emerald-400">Sueldo</th>
                <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-amber-400">Cargas</th>
                <th className="px-6 py-4 text-right text-xs uppercase tracking-wider font-semibold text-blue-400">Total</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((emp) => (
                <tr key={emp.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition">
                  <td className="px-6 py-4 font-medium text-slate-100">{emp.nombre}</td>
                  <td className="px-6 py-4 text-slate-400">{emp.cargo}</td>
                  <td className="px-6 py-4 text-slate-400">{emp.antiguedad}</td>
                  <td className="px-6 py-4 text-right text-emerald-400">${emp.sueldo.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-amber-400">${emp.cargas.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right font-semibold text-blue-400">${emp.total.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-slate-800 font-bold text-slate-50 border-t-2 border-slate-600">
                <td colSpan={3} className="px-6 py-4">TOTAL</td>
                <td className="px-6 py-4 text-right text-emerald-400">${totalSueldos.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-amber-400">${totalCargas.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-blue-400">${totalNomina.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Análisis */}
      <div className="card-premium p-8">
        <h2 className="text-xl font-bold text-slate-50 mb-6">Análisis de Nómina</h2>

        <div className="space-y-4 text-slate-300 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-lg">📊</span>
            <div>
              <p className="font-semibold text-slate-50">Costo unitario promedio</p>
              <p>${(totalNomina / empleados.length).toLocaleString()} por empleado/mes</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-lg">💰</span>
            <div>
              <p className="font-semibold text-slate-50">Impacto en ingresos</p>
              <p>La nómina representa 18.7% de ingresos por servicios</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-lg">📈</span>
            <div>
              <p className="font-semibold text-slate-50">Recomendación</p>
              <p>Revisar productividad por empleado. Posibilidad de ajustes en estructura salarial según rentabilidad individual.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-lg">⚖️</span>
            <div>
              <p className="font-semibold text-slate-50">Cargas sociales</p>
              <p>Al {porcentajeCargas}% del sueldo bruto. Revisar si hay oportunidad de optimización tributaria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
