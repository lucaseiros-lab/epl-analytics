export interface FinancialData {
  ventas: number
  costoVentas: number
  gastosAdministracion: number
  gastosComercializacion: number
  gastosFinancieros: number
  ebitda: number
  ebit: number
  utilidadNeta: number
  flujoOperativo: number
  activosCorrientes: number
  pasivosCorrientes: number
  activos: number
  pasivos: number
  patrimonio: number
}

export interface FinancialMetrics {
  margenBruto: {
    valor: number
    status: 'success' | 'warning' | 'danger'
    description: string
  }
  margenOperativo: {
    valor: number
    status: 'success' | 'warning' | 'danger'
    description: string
  }
  margenEbitda: {
    valor: number
    status: 'success' | 'warning' | 'danger'
    description: string
  }
  margenNeto: {
    valor: number
    status: 'success' | 'warning' | 'danger'
    description: string
  }
  margenFlujo: {
    valor: number
    status: 'success' | 'warning' | 'danger'
    description: string
  }
  liquidezCorriente: number
  endeudamiento: number
  roi: number
}

export function calculateMetrics(data: FinancialData): FinancialMetrics {
  const margenBruto = data.ventas > 0 ? ((data.ventas - data.costoVentas) / data.ventas) * 100 : 0
  const margenOperativo = data.ventas > 0 ? (data.ebit / data.ventas) * 100 : 0
  const margenEbitda = data.ventas > 0 ? (data.ebitda / data.ventas) * 100 : 0
  const margenNeto = data.ventas > 0 ? (data.utilidadNeta / data.ventas) * 100 : 0
  const margenFlujo = data.ventas > 0 ? (data.flujoOperativo / data.ventas) * 100 : 0
  const liquidezCorriente = data.pasivosCorrientes > 0 ? data.activosCorrientes / data.pasivosCorrientes : 0
  const endeudamiento = data.activos > 0 ? (data.pasivos / data.activos) * 100 : 0
  const roi = data.patrimonio !== 0 ? (data.utilidadNeta / data.patrimonio) * 100 : 0

  return {
    margenBruto: {
      valor: margenBruto,
      status: margenBruto >= 40 ? 'success' : margenBruto >= 30 ? 'warning' : 'danger',
      description: `${margenBruto.toFixed(2)}% - Ganancia inicial por venta`
    },
    margenOperativo: {
      valor: margenOperativo,
      status: margenOperativo >= 20 ? 'success' : margenOperativo >= 10 ? 'warning' : 'danger',
      description: `${margenOperativo.toFixed(2)}% - Eficiencia operativa`
    },
    margenEbitda: {
      valor: margenEbitda,
      status: margenEbitda >= 25 ? 'success' : margenEbitda >= 15 ? 'warning' : 'danger',
      description: `${margenEbitda.toFixed(2)}% - Capacidad de caja operativa`
    },
    margenNeto: {
      valor: margenNeto,
      status: margenNeto >= 15 ? 'success' : margenNeto >= 5 ? 'warning' : 'danger',
      description: `${margenNeto.toFixed(2)}% - Rentabilidad final`
    },
    margenFlujo: {
      valor: margenFlujo,
      status: margenFlujo >= 20 ? 'success' : margenFlujo >= 10 ? 'warning' : 'danger',
      description: `${margenFlujo.toFixed(2)}% - Liquidez disponible`
    },
    liquidezCorriente,
    endeudamiento,
    roi
  }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'success':
      return '#10b981'
    case 'warning':
      return '#f59e0b'
    case 'danger':
      return '#ef4444'
    default:
      return '#6b7280'
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case 'success':
      return 'Saludable'
    case 'warning':
      return 'Atención'
    case 'danger':
      return 'Crítico'
    default:
      return 'Desconocido'
  }
}
