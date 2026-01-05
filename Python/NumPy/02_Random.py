import os
from numpy import random
os.system('cls')

# randint, random enteros
random.randint(10) # [0, 10)

# rand, random decimal entre 0 y 1
random.rand() # [0, 1)

# generando varios randints, size=(F x C)
random.randint(10, size=(3, 3))
# [[7 8 8]
#  [1 2 7]
#  [5 1 9]]

# choice, elegir entre una lista
nombres = ['Camilo', 'Lia', 'Luis', 'Cielo']
random.choice(nombres) # Nombre aleatorio del vector nombres
  
# elegir varios entre una lista, PUEDE REPETIR
random.choice(nombres, size=(2))