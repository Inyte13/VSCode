import { Router } from "express";
import { crearTrabajo, traerTrabajo, traerTrabajos } from "../controllers/trabajos.js";
import { validarTrabajo } from "../schemas/trabajos.js";

export const trabajosRouter = Router()

function validarCrear (req, res, next) {
  const result = validarTrabajo(req.body)
  if (result.success) {
    req.body = result.data
    return next()
  }
  return res.status(400).json({ error: 'Request inválida', details: result.error.errors })
}

trabajosRouter.get('/', traerTrabajos)

trabajosRouter.get('/:id', traerTrabajo)

trabajosRouter.post('/', validarCrear, crearTrabajo)
