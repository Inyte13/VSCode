#String=cadena de texto=texto normal se escribe:
    #si es lineal se escribe con ""
    #si es es espaciado se escribe con """ """
#Numeros
    #INT=enteros 30
    #FLOAT=numeros reales 30.2
#Booleanos
    #true
    #false
#----------------------------------------------------------------------------    
#Variables=Puede variar de valor
numero=11
numero+=3
print(numero) 
#Concatenar=Juntar
nombre="luis"
print(f"Hola mundo, soy {nombre}") #f strings
#del para eliminar variables
nombre="luis"
del nombre 
#in 
usuario="1234"
print("1" in usuario)#true
#not in
usuario_2="werotito"
print("estaca" not in usuario_2)#true
#----------------------------------------------------------------------------
#MATRICES
#lista se puede modificar
lista_animales=["gato", "perro"]
print(lista_animales[0])
#tupla no se puede modificar individual si no todo
tupla_animales=("gato", "perro")
print(tupla_animales[0]) 
#conjunto(set) no se puede modificar individual sino todo y no se repite valores
conjunto_animales={"gato", "perro"}
    #print(conjunto_animale[0])  NO SE PUEDE HACER ESO EN EL CONJUNTO 
#diccionario(dict) 
diccionario={
    "nombre":"Luis",
    "peso":"81",
    "edad":19
}             
print(diccionario["edad"])
#----------------------------------------------------------------------------
#Operadores Matematicos
x=6%4 #el residuo
print(x)
y=3//2 #division redondeada siempre hacia abajo y ENTERO
print(y)
z=8/2 #4 es FLOAT 
print(z)
#----------------------------------------------------------------------------
#Operadores de comparacion 
#     == != <= >= < >
#----------------------------------------------------------------------------
#Condicionales
 #if-else
 #elif
 
#Operadores logicos
 #and
    #T.T=T
    #todo los demas F
 #or
    #F.F=F
    #todo los demas V
 #not
    #notTrue=False
    #notFalse=True

#Metodo de cadenas
#upper
variable_1="convierteme"
convertir_a_mayuscula=variable_1.upper()#SIEMPRE ES MINUSCULA.UPPERJ()
print(convertir_a_mayuscula)
#lower Convertir a minuscula
variable_1="COVIERTEME"
convertir_a_minuscula=variable_1.lower()
print(convertir_a_minuscula)
#capitalize Primera letra en Mayuscula
variable_1="convierteme"
convertir_primera_a_mayuscula=variable_1.capitalize()
print(convertir_primera_a_mayuscula)
#----------------------------------------------------------------------------
#find  Busca, si no encuentra: devuelve -1
variable_2="abc defghi"
buscar=variable_2.find("a")
print(buscar)
#index Busca, si no encuentra: da error
variable_2="abc defghi"
buscar=variable_2.index("a")
print(buscar)
#----------------------------------------------------------------------------
#isnumeric Si es numerico true sino false 
#AUNQUE SEA UN TEXTO INDETIFICA LOS NUMEROS
#isaplha Si es alfanumerio true sino false
#SOLO SI HAY LETRAS INCLUSO LOS ESPACIOS NO PUEDEN IR
 #----------------------------------------------------------------------------
#count Contar coincidencias si se encuentra ES LITERAL
variable_2="abc defghi"
buscar=variable_2.count("a")
print(buscar)
#len Contar los caracteres de una cadena
contar=len(variable_1)
print(contar)
#----------------------------------------------------------------------------
#startswith Con que empieza el string?
empieza=variable_1.startswith("s")
print(empieza) 
#endswith Con que termina el string?
termina=variable_1.endswith("s")
print(termina)
#----------------------------------------------------------------------------
#replace Remplaza una string por otra string
remplazar=variable_1.replace("me", "mo")
print(remplazar)
#split Separa y vuelve independiente 
separar=variable_2.split()#nada son los espacios para contar las palabras
print(separar)
#----------------------------------------------------------------------------
#list Crear una lista   
lista=list([1,3,3,3,3,4,5,234,54])
print(lista)
#append Agrega elementos al ultimo
lista.append("jjijiji")
#insert Agrega elementos en una posicion especifica
lista.insert(3,30)
#extend Agrega una lista a otra lista
lista.extend([True,False])
#pop Elimina elemeno segun la posicion
lista.pop(0)#PARA ELIMINAR EL ULTIMO ELEMENTO COLOCAR -1
#remove Elimina elemento segun el nombre que le digas SI NO ESTA LANZA ERROR
lista.remove("jjijiji")
#clear Elimina toda la lista
#lista.clear()
#sort Ordena todo menos strings ASCENDENTE
lista.sort()
#sort(reverse=true) Ordena todo menos strings DESCENDENTE
lista.sort(reverse=True)    
#reverse Revierte la lista SIN ORDEN
lista.reverse()
print(lista)

diccionario={
    "nombre":"luis",
    "apellidos":"garcia",
    "subs":10000
}
#keys Devuelve datos
Devolvedor=diccionario.keys()
print(Devolvedor)
#get Devuelve el significado(dato de la derecha) SIN EL GET GENERA ERROR
Significados=diccionario.get("subs")
print(Significados)
#clear Clenea
#diccionario.clear()
#pop Elimina un elemento
diccionario.pop("nombre")
print(diccionario)
#items Los elementos pueden ser iterables
se_pueden_iterar=diccionario.items()
print(se_pueden_iterar)
#----------------------------------------------------------------------------
#INPUTS El usuario coloca el dato en la consola y siempre es STRING
#INT Convertir un numero a entero
#FLOAT Convertir a un numero real
#----------------------------------------------------------------------------
#CREANDO UNA TUPLA
tupla=tuple([1,2,3])
tupla="dato1","dato2"
print(tupla)
#----------------------------------------------------------------------------
#CREANDO CONJUNTOS
conjunto=set([1,2,3])
conjunto_1=frozenset(["dato1","dato_2"])#UN CONJUNTO DENTRO DE OTRO CONJUNTO    
conjunto_2={conjunto_1,"dato3"}
print(conjunto_2)
#Teoria de conjuntos
conjunto_1={1,2,3,4,5}
conjunto_2={1,4}
#SUBCONJUNTO
resultado=conjunto_2.issubset(conjunto_1)#ES UN SUBCONJUNTO???
resultado=conjunto_2<=conjunto_1#SUS VALORES SON MENORES O IGUAL QUE EL OTRO???
#SUPERCONJUNTO
resultado=conjunto_1.issuperset(conjunto_2)#ES UN SUPERCONJUNTO???
resultado=conjunto_1>conjunto_2#SUS VALORES SON MAYORES???
#ES DIFERENTE???
resultado=conjunto_1.isdisjoint(conjunto_2)
print(resultado)
#----------------------------------------------------------------------------
#CREANDO DICCIONARIOS
diccionario=dict(nombre="luis",apellidos="garcia")
diccionario=dict.fromkeys("nombre","apellido")#itera el primer elemento
diccionario=dict.fromkeys(["nombre","apellido"])#normal(nombre:none,apellido:none)
diccionario=dict.fromkeys(["nombre","apellidos"],"no sé")#normal(nombre:no sé,apellido:no sé)
print(diccionario)
#----------------------------------------------------------------------------
#BUCLES
#FOR a IN b  a=1,2,3,4... b=[0](),[1](),[2]() 
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
#broken
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
