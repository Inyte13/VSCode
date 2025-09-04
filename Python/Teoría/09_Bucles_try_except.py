# While controlado por centinela y try, catch
num=-1
while num<=0:
    try:
        num=int(input("Ingresa un entero positivo: "))
        if num<=0:
            print("Debe ser positivo")
    except:
        print("Debe ser un entero")

# While con continue (no rompe el bucle sino que vuelve al while sin hacer el código de abajo)
# contador=0
# while contador<10:
#     contador+=1
#     if contador%2==0:
#         continue
#     print(contador)

# While con else (se cumple cuando el while nos da false)
# contador=0
# while contador<5:
#     print(contador)
#     contador+=1
# else:
#     print("Terminé")

# For each pero con cualquier cosa iterable
# frutas=["Manzana", "Pera", "Platano"]
# for fruta in frutas:
#     print(fruta)
# str="Tonto"
# for char in str:
#     print(char)

# Enumerate()
# for i, fruta in enumerate(frutas):
#     print(f"i: {i}, valor: {fruta}")

# For anidados
# clase=["A", "B", "C"]
# num=[1,2,3]
# for l in clase:
#     for n in num:
#         print(f"{l}{n} ")
