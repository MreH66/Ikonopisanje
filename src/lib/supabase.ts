import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for a gallery icon row
export type Icon = {
  id: number
  title: string
  description: string | null
  size: string | null
  image_url: string
  sort_order: number | null
}
