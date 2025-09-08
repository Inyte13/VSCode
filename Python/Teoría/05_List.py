lista2=["Plátano", "Manzana", "Piña"] # Lista de str
lista3=[False, 1, "2", 3.14] # Lista mixta
lista_vacia=[]
matriz=[[1,2], [3,4]]
print(lista2[-1]) # Podemos acceder desde atrás
lista1=[1, 2, 3, 4, 5] # Lista de int

# Slicing
print(lista1[1:4]) # [2, 3, 4]
print(lista1[:4]) # [1, 2, 3, 4]
print(lista1[3:]) # [4, 5]
print(lista1[::2]) # [1, 3, 5]
print(lista1[::-1]) # [5, 4, 3, 2, 1]

# Copiar la lista
print(lista1[:]) # [1, 2, 3, 4, 5]
lista1+=[6,7] # Concatenando valores

# Longitud de la lista
print(len(lista1))
