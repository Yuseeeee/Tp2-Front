import { supabase } from './supabase'

export async function getJugadores() {
  console.log("intentando conectar...")

  const { data, error } = await supabase
    .from('jugadores')
    .select('*')

  console.log("DATA:", data)
  console.log("ERROR:", error)

  if (error) {
    return []
  }

  return data
}