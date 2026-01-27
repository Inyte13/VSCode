import { Router } from "express";
import { crearTrabajo, traerTrabajo, traerTrabajos } from "../controllers/trabajosController.js";

export const trabajosRouter = Router()

trabajosRouter.get('/', traerTrabajos)

trabajosRouter.get('/:id', traerTrabajo)

trabajosRouter.post('/', crearTrabajo)
