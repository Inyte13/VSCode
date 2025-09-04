# If, elif, else
edad=int(input("Ingrese su edad: "))
if edad>18:
    print("Eres mayor de edad")
elif edad==18:
    print("Tienes justo 18 años")
else:
    print("Eres menor de edad")
# Condición ternaria, un if else en una solo línea
print("Eres mayor de edad") if edad>=18 else print("Eres menor de edad")
# [Si cumple la condicion] if [condición] else [Si no cumple]
    