lista1=['a', 'b', 'c', 'd']
lista1.append('e') # Inserta un elemento al final como +=
lista1.insert(0, "Inicio") # Insertar un elemento en el la posición indicada
lista1.extend(['f', "Final"]) # Agrega elementos a la lista
lista1.remove('f') # Elimina la primera aparición de un elemento
lista1.pop(0) # Elimina según el índice
del lista1[-1] # Elimina según el índice
del lista1[1:] # Elimina considerando el rango
print(lista1)
# Modificando la lista original
lista2=[3, 54, 23, 69, 103, 38, 2, 4]
sorted_lista2=lista2.sort()
print(sorted_lista2)
print(lista2)
# Modificando la lista haciendo una copia
lista2=[3, 54, 23, 69, 103, 38, 2, 4]
sorted_lista2=sorted(lista2)
print(sorted_lista2)
print(lista2)
lista3=[1,1,1,1,5,3,4,5,4.20,3]
print(lista3.count(1)) # Cuantas veces aparece el 1
print(1 in lista3) # Devuelve un booleano

