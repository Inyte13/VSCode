lista2=["Plátano", "Manzana", "Piña"]
lista3=[False, 1, "2", 3.14] # Lista mixta

lista2[-1] # Podemos acceder desde atrás

lista1=[1, 2, 3, 4, 5] # Lista de int

# Slicing
lista1[1:4] # [2, 3, 4]
lista1[:4] # [1, 2, 3, 4]
lista1[3:] # [4, 5]
lista1[::2] # [1, 3, 5]
lista1[::-1] # [5, 4, 3, 2, 1]

# Copiar la lista
lista1[:] # [1, 2, 3, 4, 5]
lista1+=[6,7] # Concatenando valores

# Longitud de la lista
len(lista1)

# List Comprehension
cuadrados = [x ** 2 for x in lista1]


