import { create } from 'zustand'

export const useFavoritosStore = create((set, get) => ({
  // Estado
  favoritos: [],

  // Acciones
  addFavorito: (id) => {
    set((state) => ({
      favoritos: state.favoritos.includes(id)
        ? state.favoritos
        : [...state.favoritos, id]
    }))
  },
  removeFavorito: (id) => {
    set((state) => ({
      favoritos: state.favoritos.filter((idInput) => idInput !== id)
    }))
  },
  isFavorito: (id) => {
    return get().favoritos.includes(id)
  },
  toggleFavorito: (id) => {
    const { addFavorito, removeFavorito, isFavorito } = get()
    isFavorito ? removeFavorito(id) : addFavorito(id)
  },
  countFavoritos: () => get().favoritos.length
}))
