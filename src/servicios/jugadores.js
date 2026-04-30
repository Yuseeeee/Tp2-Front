import { supabase } from './supabase'

export async function getJugadores() {
  const { data, error } = await supabase
    .from('jugadores')
    .select('*')

  if (error) {
    console.error(error)
    return []
  }

  return data
}
export async function crearJugador(jugador) {
    const { data, error } = await supabase
      .from('jugadores')
      .insert([jugador])
  
    if (error) {
      console.error(error)
    }
  
    return data
  }