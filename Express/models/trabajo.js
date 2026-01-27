// Se tiene que declarar el type: 'json' por seguridad
import trabajos from '../data/trabajos.json' with { type: 'json' }

export async function readTrabajos ({ text, title, level, technology, limit, offset }) {
  let trabajosFiltrados = trabajos

  if (text) {
    const search = text.toLowerCase()
    trabajosFiltrados = trabajosFiltrados.filter(trabajo =>
      trabajo.titulo.toLowerCase().includes(search) ||
      trabajo.descripcion.toLowerCase().includes(search)
    )
  }
  
  if (technology) {
    trabajosFiltrados = trabajosFiltrados.filter(trabajo =>
      trabajo.data.technology.includes(technology)
    )
  }

  const limitNumber = Number(limit)
  const offsetNumber = Number(offset)
  const trabajosPaginados = trabajosFiltrados.slice(offsetNumber, offsetNumber + limitNumber)
  return trabajosPaginados
}

export async function createTrabajo ({ titulo, empresa, ubicacion, data}) {
  const trabajo = {
    id: crypto.randomUUID(),
    titulo,
    empresa,
    ubicacion,
    data
  }
  trabajos.push(trabajo)
}

export async function readTrabajo ({ id }) {
  const trabajo = trabajos.find(trabajo => trabajo.id === id)
  return trabajo
}