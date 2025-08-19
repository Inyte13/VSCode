str="Holao"
print(f"{str} soy Luis") # Imprime el string (Holao soy Luis)
print(str.find("o")) # Devuelve la posición en la que se encontró "o" sino devuelve -1 (1)   
print(str.index("o")) # Devuelve la posición en la que se encontró "o" sino lanza error (1)
print(str.count("o")) # Cuenta cuantas veces se repite "o" (2)
print(len(str)) # Devuelve la cantidad de caracteres (5)
print(str.startswith("H")) # Comprueba si empieza con "H" (True)
print(str.endswith("u")) # Comprueba si termina con "o" (False
print(str.replace("o","i")) # Reemplaza "o" por "i" (Hilai)
print(str.split("l")) # Divide la cadena por "l" eliminándola en el proceso (['Ho', 'ao'])
print(f"{str} soy Luis") # Interpolación de Strings (Holao soy Luis)
print("a" in str) # "a" esta en el string (True) 
print("estaca" not in str) # "estaca" no esta en el string (True)
del str # Elimina la variable str