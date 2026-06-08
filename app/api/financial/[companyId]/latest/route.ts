import { NextRequest, NextResponse } from 'next/server'

const mockData: { [key: string]: any } = {
  'epl-001': {
    id: 'fin-001',
    period: '2026-05',
    data: {
      ventas: 510909074,
      costoVentas: 51909074,
      gastosAdministracion: 135158962,
      gastosComercializacion: 233169958,
      gastosFinancieros: 24182250,
      ebitda: 142748862,
      ebit: 118565612,
      utilidadNeta: 118397903,
      flujoOperativo: 102589274,
      activosCorrientes: 210642964,
      pasivosCorrientes: 632332496,
      activos: 438092837,
      pasivos: 987589148,
      patrimonio: -549496311
    }
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { companyId: string } }
) {
  try {
    const companyId = params.companyId
    const data = mockData[companyId]

    if (!data) {
      return NextResponse.json(
        { error: 'Empresa no encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error obteniendo datos' },
      { status: 500 }
    )
  }
}
