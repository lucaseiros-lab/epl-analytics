import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const companies = [
      {
        id: 'epl-001',
        name: 'EPL Consultores',
        cuit: '30-71193999-3',
      }
    ]

    return NextResponse.json(companies)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error obteniendo empresas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const company = {
      id: `company-${Date.now()}`,
      name: body.name,
      cuit: body.cuit,
    }

    return NextResponse.json(company, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creando empresa' },
      { status: 400 }
    )
  }
}
