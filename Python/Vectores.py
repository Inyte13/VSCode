
conjunto={"s", "e"} # Conjunto, no se puede modificar individual sino todo y no se repite valores
conjunto.add("t") # Agregar un elemento al conjunto, print(setAnimales[0]) NO SE PUEDE HACER ESO EN EL CONJUNTO 
# LIST
nombres=["Mafer", "Oriana", "Paula"] # Lista, se puede modificar
nombres.append("Cariño") # Agrega "Cariño" al final de la lista
nombres.insert(1,"Aitana") # Agrega "Aitana" en la posición 1
nombres.extend(["Ana","Camila"]) # Agrega una lista a otra lista
nombres.pop(0) # Elimina el elemento en la posición 0, SI NO PONES NADA ELIMINA EL ULTIMO
nombres.remove("Ana") # Elimina el elemento "Ana" SI NO LO ENCUENTRA LANZA ERROR
nombres.reverse() # Revierte el orden de la lista
num=[8,3,5,1,4,7,9,2,6]
num.sort() # Ordena la lista de menor a mayor
num.sort(reverse=True) # Ordena la lista de mayor a menor
nombres.clear() # Elimina todos los elementos de la lista 
# TUPLA
tupla=tuple(nombres) # Tupla, no se puede modificar
#CREANDO CONJUNTOS
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
# #----------------------------------------------------------------------------
# DICCIONARIO
diccionario={"Nombres":"Lucy","Apellidos":"Martínez","Edad":21}
print(diccionario.keys()) # Devuelve las claves
print(diccionario.values()) # Devuelve los valores
print(diccionario.items()) # Devuelve las claves y los valores
print(diccionario) # Muestra el diccionario completo
print(diccionario.get("Edad")) # Muestra el value de "Edad" si no existe devuelve None
print(diccionario["Edad"]) # Muestra el value de "Edad" si no existe lanza error
# #CREANDO DICCIONARIOS
# diccionario=dict(nombre="luis",apellidos="garcia")
# diccionario=dict.fromkeys("nombre","apellido")#itera el primer elemento
# diccionario=dict.fromkeys(["nombre","apellido"])#normal(nombre:none,apellido:none)
# diccionario=dict.fromkeys(["nombre","apellidos"],"no sé")#normal(nombre:no sé,apellido:no sé)
# print(diccionario)
# #----------------------------------------------------------------------------