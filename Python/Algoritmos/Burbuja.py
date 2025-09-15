def burbuja(lista):
  for i in range(len(lista)):
    for j in range(len(lista)-i-1):
      if lista[j]>lista[j+1]:
        lista[j], lista[j+1]=lista[j+1], lista[j]
  return lista

calificaciones=[15, 10, 18, 12, 20, 8, 11, 14, 19, 13]
print(burbuja(calificaciones))
