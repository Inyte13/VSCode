import { DEFAULTS } from "../config.js"
import { createTrabajo, readTrabajo, readTrabajos } from "../models/trabajo.js"

export async function traerTrabajos (req, res) {
  const { text, title, level, technology, limit = DEFAULTS.LIMIT_PAGINATION, offset = DEFAULTS.LIMIT_OFFSET } = req.query
  const trabajosPaginados = await readTrabajos({ text, title, level, technology, limit, offset})
  const limitNumber = Number(limit)
  const offsetNumber = Number(offset)
  return res.json({ data: trabajosPaginados, total: trabajosPaginados.length, limit: limitNumber, offset: offsetNumber})
}

export async function traerTrabajo (req, res) {
  // Siempre son str
  const { id } = req.params
  const trabajo = readTrabajo(id)
  if (!trabajo) res.status(404).json({ error: 'Trabajo no encontrado' })
  return res.json(trabajo)
}

export async function crearTrabajo (req, res) {
  const { titulo, empresa, ubicacion, data } = req.body
  const trabajo = await createTrabajo({ titulo, empresa, ubicacion, data})
  return res.status(201).json(trabajo)
}