import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types para o banco de dados
export type Patient = {
  id: string
  name: string
  age: number
  email?: string
  phone?: string
  created_at: string
  updated_at: string
  user_id: string
}

export type Assessment = {
  id: string
  patient_id: string
  title: string
  type: string
  status: 'pending' | 'in_progress' | 'completed'
  progress: number
  results?: any
  created_at: string
  updated_at: string
  user_id: string
}

export type Report = {
  id: string
  patient_id: string
  assessment_id?: string
  title: string
  content: string
  type: string
  status: 'draft' | 'in_review' | 'finalized'
  created_at: string
  updated_at: string
  user_id: string
}

export type Material = {
  id: string
  title: string
  category: string
  description?: string
  file_url?: string
  items_count: number
  created_at: string
  user_id: string
}
