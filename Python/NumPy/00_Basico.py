import os
import numpy as np # simplificamos numpy por np
os.system('cls')

# Declaración de un vector o array
vector = np.array([23, 12, 10, 12, 84])
type(vector) # ndarray

# Declaración de una matriz
matriz = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]) 
#[[ 1  2  3  4]
# [ 5  6  7  8]
# [ 9 10 11 12]]

# Ver la dimensión
vector.ndim # 1

# El index
vector[0] # 23

# Rango para vectores [n:m] = [n, m)
vector[1:3] # [12, 10]

# Rango para matrices [f, c] = [fila + 1, columna + 1]
matriz[2, 0] # 9

# Forma / Shape ( , , ) 1D 2D 3D
vector.shape # (5,), 1D: 4 elementos
matriz.shape # (3, 4), 1D: 3 elementos, 2D: 4 elementos

# Cambiar la forma / reshape(f, c)
matriz.reshape(2, 6)
#[[ 1  2  3  4  5  6]
# [ 7  8  9 10 11 12]]

