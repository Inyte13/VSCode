conjuntoA={1,2,3,4,5,6,7,8,9} # No existe el índice, son desordendados
conjuntoB={5,6,100,200,300}
conjuntoA.add(10) # Agregar un elemento al conjunto
conjuntoA.remove(1) # Elimina el elemento 1, SI NO LO ENCUENTRA LANZA ERROR
conjuntoA.discard(10) # Elimina el elemento 10, SI NO LO ENCUENTRA NO HACE NADA
#conjuntoA.pop() # Elimina un elemento al azar
print(conjuntoA.union(conjuntoB)) # A ∪ B, devuelve un nuevo conjunto
print(conjuntoA.intersection(conjuntoB)) # A ∩ B, devuelve un nuevo conjunto
print(conjuntoA.difference(conjuntoB)) # A - B, devuelve un nuevo conjunto
print(conjuntoA.issubset(conjuntoB)) # A ⊆ B, True si A es subconjunto de B
print(conjuntoA.issuperset(conjuntoB)) # A ⊇ B, True si A es superconjunto de B
print(conjuntoA.isdisjoint(conjuntoB)) # True si no tienen elementos en común
# conjunto=set([1,2,3])
# conjunto_1=frozenset(["dato1","dato_2"])#UN CONJUNTO DENTRO DE OTRO CONJUNTO    
# conjunto_2={conjunto_1,"dato3"}
# print(conjunto_2)
# #Teoria de conjuntos
# conjunto_1={1,2,3,4,5}
# conjunto_2={1,4}
# #SUBCONJUNTO
# resultado=conjunto_2.issubset(conjunto_1)#ES UN SUBCONJUNTO???
# resultado=conjunto_2<=conjunto_1#SUS VALORES SON MENORES O IGUAL QUE EL OTRO???
# #SUPERCONJUNTO
# resultado=conjunto_1.issuperset(conjunto_2)#ES UN SUPERCONJUNTO???
# resultado=conjunto_1>conjunto_2#SUS VALORES SON MAYORES???
# #ES DIFERENTE???
# resultado=conjunto_1.isdisjoint(conjunto_2)
# print(resultado)