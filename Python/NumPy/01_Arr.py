import os
import numpy as np
os.system('cls')

# Concatenar vectores
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
np.concatenate((arr1,arr2)) # [1 2 3 4 5 6]

# Concatenar matrices
matriz1 = np.array([[1, 2], [3, 4]])
# [[1 2]
#  [3 4]]
matriz2 = np.array([[34, 81], [52, 53]])
# [[34 81]
#  [52 53]]
np.concatenate((matriz1, matriz2), axis=0)
# [[ 1  2]
#  [ 3  4]
#  [34 81]
#  [52 53]]
np.concatenate((matriz1, matriz2), axis=1)
# [[ 1  2 34 81]
#  [ 3  4 52 53]]

# Dividir vectores
arr = np.array([1, 2, 3, 4, 4, 4])
np.array_split(arr, 3) # [array([1, 2]), array([3, 4]), array([4, 4])]

# Buscar elemento, devuelve los índices donde estan los elementos encontrados
np.where(arr == 4) # (array([3, 4, 5]),)

# Ordenar con sort
messy = np.array([3, 0, 2, 1])
np.sort(messy) # [0 1 2 3]
