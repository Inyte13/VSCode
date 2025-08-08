y=3//2 # División redondeada hacia abajo y ENTERO
print(y)
z=8/2 #4 es DOUBLE/FLOAT 
print(z)
#BUCLES
#for a in b  a=x,y,z b=[0](x),[1](y),[2](z) 
#EN LISTAS EN TUPLAS EN CONJUNTOS    
animales=["gato","perruno","zorruno","cornito"]
numeros=["uno","dos","tres","cuatro"]
for animale,numero in zip(animales,numeros):#Dos listas al mismo tiempo
    print(f"lista de animales: {animale}")
    print(f"lista de numeros: {numero}")
for num in range(1,11):#Sin un rango empezara desde cero ejem(3)
    print(num)
for num in enumerate(numeros):
    print(num)#nos daria su indice y el valor
    print(num[0])#nos daria solo los INDICES
    print(num[1])#nos daria solo el valor
#EN DICCIONARIOS
colores=dict(feliz="amarillo",triste="azul")
print(colores)
for indice in colores:#nos daria su indice
    print(indice)
for indice_valores in colores.items():
    print(indice_valores)#nos daria indice y el valor
    print(indice_valores[0])#nos daria el indice
    print(indice_valores[1])#nos daria el valor
#----------------------------------------------------------------------------
#continue
for comer in animales:
    if comer=="gato":
        continue
    print(f"me voy a comer un {comer}")
#break
for comer in animales:
    if comer=="zorruno":
        break
    print(f"me voy a comer un {comer}")
else:
    print("jajaja no se va a ver")#el else no se ve por el break
print("no pudiste")
#recorrer una cadena de texto
cadena="jajaja"
for recorriendo in cadena:
    print(recorriendo)
#for en una linea de codigo
numeros_enteros=1,2,3,4,5
numeros_al_cubo=[x**3 for x in numeros_enteros]
print(numeros_al_cubo)
#----------------------------------------------------------------------------
#round
numero_redondeando=round(21.3484758395,5)
print(numero_redondeando)
#bool retorna false si es un (0, vacio, false, None)
resultado_bool=bool(2)
#all retorna true si todos los valores son verdaderos
resultado_all=all(["asdfsf",34,[34]])
#*
def suma(nombre,*numeritos):#como parametro de la funcion
    return f"{nombre}, tu suma es: {sum(numeritos)}"
resultado=suma("luis",4,5,2,34)
#----------------------------------------------------------------------------
def suma_total(numeritos):#forma optima de sumar valores
    return sum([*numeritos])
resutado_2=suma_total([4,34,542,54])
print(resutado_2)
#----------------------------------------------------------------------------
#Parametros de tres con uno opcional
def frase(nombre,apellido,adjetivo="estupido"):
    return f"hola {nombre} {apellido} eres muy {adjetivo}"
frese_final=frase("luis","Garcia","bueno")
print (frese_final)
#----------------------------------------------------------------------------
#funcion que diga si es par lo que se pone en una array(lista)
numerotes=[3,54,23,42,34]   
def es_par(num):
    if (num%2==0):
        return True
numeros_pares=filter(es_par,numerotes)
print(list(numeros_pares))
#----------------------------------------------------------------------------
#lambda
numeros_pares=filter(lambda numsito:numsito%2==0,numerotes)
print(list(numeros_pares))
#----------------------------------------------------------------------------
#modulos

#import ejercicio_2
#importada_de_otro_modulo=ejercicio_2.es_primo(4)
#print(importada_de_otro_modulo)

#as RENOMBRAR UN MODULO
import ejercicio_2 as ejm2
 
#from USAR SOLO UNA FUNCION
from ejercicio_2 import es_primo
importada_de_otro_modulo=es_primo(4)
print(importada_de_otro_modulo) 

#paquete SI UNA CARPETA TIENE EL ARCHIVO "__init__.py"
