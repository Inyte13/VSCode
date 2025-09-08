# For each pero con cualquier cosa iterable
frutas=["Manzana", "Pera", "Platano"]
for fruta in frutas:
  print(fruta)
str="Tonto"
for char in str:
  print(char)

# Enumerate(), para recuperar el índice
for i, fruta in enumerate(frutas):
  print(f"i: {i}, valor: {fruta}")

# For anidados
clase=["A", "B", "C"]
num=[1,2,3]
for l in clase:
  for n in num:
    print(f"{l}{n} ")

# Break en for
animales=["Perro", "Gato", "Canario", "Araña"]
for animal in animales:
  print(animal)
  if animal=="Gato":
    break

# Continue con for
for animal in animales:
  if animal=="Gato":
    continue
  print(animal)

# Compresión de listas
animales=["Perro", "Gato", "Canario", "Araña"]
animales_uppercase=[animal.upper() for animal in animales]
#                  [valor_lista for elemento in iterable]
print(animales_uppercase)
        