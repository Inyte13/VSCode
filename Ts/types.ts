export type UsuarioCreate = {
  readonly nombre: string,
  readonly edad: number,
  email?: string,
  cargo: 'admin' | 'user'
}
type UsuarioId = {
  readonly id: string | number
}

type Usuario = UsuarioCreate & UsuarioId

// Unit types
type Verdadero = true

// Literal types
type Nivel = 1 | 2 | 3
