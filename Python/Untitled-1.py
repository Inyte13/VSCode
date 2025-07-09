def fibonacci(x):
    fibonaccito=[]
    a,b=0,1
    for i in range(x):
        a,b=b,a+b
        fibonaccito.append(b)
    return fibonaccito
resultaditofibonaccito=fibonacci(5)
print(resultaditofibonaccito) 
   
def factorial(x):
    if x<0:
        return "no se puede xd"
    elif x==0 or x==1:
        return 1
    else:
        return x*factorial(x-1)
resultado=factorial(5)
print(resultado)

def lista(x):
    listita=[]
    for i in range(1,x+1):
        listita.append(i)
    return listita
resultadito=lista(10)
print(resultadito)

#def lista(x):
#    return [i for i in range(1,x + 1)]
#resultadito = lista(10)
#print(resultadito)

vocales_en_la_palabra=[]
palabra="jamon con queso y pan"
for i in palabra:
    if i in "aeiou":
        vocales_en_la_palabra.append(i)
uwu=len(vocales_en_la_palabra)
print(uwu)

archivos_txt=open("Python\\Eshora.txt")
archivo=archivos_txt.read()
x=archivo.split()
contar=len(x)
print(contar)

#try:
#    with open("Python\\Eshora.txt", "r") as archivo_txt:
#        archivo = archivo_txt.read()
#        palabras = archivo.split()
#        cantidad_palabras = len(palabras)
#        print(cantidad_palabras)
#except FileNotFoundError:
#    print("El archivo no se encontró.")
#except Exception as e:
#    print(f"Ocurrió un error: {e}")


   
