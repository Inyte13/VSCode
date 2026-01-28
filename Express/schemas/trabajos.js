import * as z from 'zod'

const trabajoSchema = z.object({
  titulo: z
    .string({ error: 'El título es obligatorio' })
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(100, 'El título no puede exceder los 100 caracteres'),
  empresa: z.string(),
  ubicacion: z.string(),
  descripcion: z.string().optional(),
  data: z.object({
    technology: z.array(z.string()),
    modalidad: z.string(),
    nivel: z.string()
  })
})

export function validarTrabajo (trabajo) {
  return trabajoSchema.safeParse(trabajo)
}
// Para el patch
export function validarParcialTrabajo (trabajo) {
  return trabajoSchema.partial().safeParse(trabajo)
}