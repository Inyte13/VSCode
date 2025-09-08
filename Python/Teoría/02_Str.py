str="¡Hola developer!"
str.startswith("¡") # (True) Empieza con "¡"
str.endswith("!") # (True) Termina con "!"
str.find("o") # (2) Posición de la primera coincidencia
str.count("e") # (3) Cuantas veces aparece "e"
str.upper() # Convertir todo a mayúscula
str.lower() # Convertir todo a minúscula
str.capitalize() # Convertir todo a Primera letra Upper, resto lower
str.title() # Cada palabra con inicial Upper
str.replace("developer", "dev") # Cambia "developer" por "dev"
str.split() # Divide el str en subcadenas usando el " " como divisor