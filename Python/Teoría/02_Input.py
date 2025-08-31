age=int(input("Ingrese su edad: ")) # Al pedir con input siempre nos da un str, lo tenemos que convertir a int
print(age+1)
# Obtener varios valores a la vez
ciudad, pais=input("Ingrese su ciudad y país: ").split()    
print(f"Tú vives en {pais}, {ciudad}")