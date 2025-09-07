def saludar(name): # name es el parámetro 
    print(f"Hola {name}")
saludar("Sara") # Sara es el argumento

def sumar(a,b):
    """Suma dos números y devuelve el resultado""" # docstring, documentar con string
    return a+b

def producto_default(a,b=1):
    return a*b
print(producto_default(5)) # Toma el valor por default
print(producto_default(5,2)) # Ignora el valor por default

# Parámetros por clave
def presentacion(name, age):
    print(f"Soy {name} y tengo {age} años")
presentacion(age="19", name="Inyte") 

# Parámetros dinámicos
def suma_dinamica(*args):
    suma=0
    for num in args:
        suma+=num
    return suma
print(suma_dinamica(1,23,4,5,4,23))
print(suma_dinamica(12,43))

# Parámetros clave-valor dinámico
def info(**kwargs):
    for k,v in kwargs.items():
        print(f"{k}: {v}")
info(name="Inyte", age=19)
info(pais="Colombia", sexo="Femenino")
info(status="Dead", estado_civil=False)
