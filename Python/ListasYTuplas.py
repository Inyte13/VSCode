# LIST (se puede modificar)
nombresL=["Mafer", "Oriana", "Paula"] 
nombresL.append("Cariño") # Agrega "Cariño" al final de la lista
nombresL.insert(1,"Aitana") # Agrega "Aitana" en la posición 1
nombresL.extend(["Ana","Camila"]) # Agrega una lista a otra lista
nombresL.pop(0) # Elimina el elemento en la posición 0, SI NO PONES NADA ELIMINA EL ULTIMO
nombresL.remove("Ana") # Elimina el elemento "Ana" SI NO LO ENCUENTRA LANZA ERROR
nombresL.reverse() # Revierte el orden de la lista
num=[8,3,5,1,4,7,9,2,6]
num.sort() # Ordena la lista de menor a mayor
num.sort(reverse=True) # Ordena la lista de mayor a menor
print(nombresL) # Imprime la lista
# nombresL.clear() Elimina todos los elementos de la lista

# TUPLA (no se puede modificar)
nombresT=tuple(nombresL) # Convertimos la lista a una tupla
nombresT.count("Oriana") # Cuenta cuántas veces aparece "Oriana"
nombresT.index("Paula") # Devuelve el índice de "Paula"


