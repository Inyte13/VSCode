#E.1 Métodos append e insert
# num=[1,2,3,4,5]
# num.append(6)
# num.insert(1, 10)
# num[0]=0
# print(num)
#E.2 Métodos extend, remove, pop y clear
# a=[1,2,3]
# b=[4,5,6,1,2]
# a.extend(b)
# a.remove(1)
# print(a)
# elemento_eliminado=a.pop(3)
# print(elemento_eliminado)
# print(a)
# b.clear
#E.3 Usando del
# num=[1,2,3,4,5,6,7,8,9,10]
# del num[2:5]
# print(num)
#E.4 Métodos sort, count e in
# list=[5, 2, 8, 1, 9, 4, 2]
# list.sort()
# print(list)
# print(list.count(2))
# print(7 in list)
# E.5 Copiando con slicing y copy
# original=[1,2,3]
# copia_1=original[:]
# copia_2=original.copy()
# referencia=original
# referencia[0]=10
# print(original, copia_1, copia_2, referencia)    
# E.6 Clasificando sin importar las mayúsculas
# frutas=["Manzana", "pera", "BANANA", "naranja"]
# frutas.sort(key=str.lower)
# print(frutas)
