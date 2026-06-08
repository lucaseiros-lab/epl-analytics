import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Company {
  id: string
  name: string
  cuit: string
  created_at: string
}

export interface FinancialRecord {
  id: string
  company_id: string
  period: string
  data: {
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
  created_at: string
}

export async function getCompanies(): Promise<Company[]> {
  const { data, error } = await supabase.from('companies').select('*')
  if (error) throw error
  return data || []
}

export async function createCompany(name: string, cuit: string): Promise<Company> {
  const { data, error } = await supabase
    .from('companies')
    .insert([{ name, cuit }])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function getFinancialRecords(companyId: string): Promise<FinancialRecord[]> {
  const { data, error } = await supabase
    .from('financial_records')
    .select('*')
    .eq('company_id', companyId)
    .order('period', { ascending: false })
  if (error) throw error
  return data || []
}

export async function saveFinancialRecord(
  companyId: string,
  period: string,
  data: any
): Promise<FinancialRecord> {
  const { data: record, error } = await supabase
    .from('financial_records')
    .insert([{ company_id: companyId, period, data }])
    .select()
    .single()
  if (error) throw error
  return record
}
