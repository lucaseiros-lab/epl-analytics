import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'papaparse'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const result = {
      ventas: null as any,
      compras: null as any,
      pagos: null as any,
      cobranzas: null as any,
      banco: null as any,
      balance: null as any,
    }

    for (const [key, file] of formData.entries()) {
      if (file instanceof File) {
        const text = await file.text()
        const parsed = parse(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
        })
        result[key as keyof typeof result] = parsed.data
      }
    }

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Archivos cargados exitosamente'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error procesando archivos' },
      { status: 400 }
    )
  }
}
