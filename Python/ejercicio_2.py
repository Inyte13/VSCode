def es_primo(numero):
    for i in range(2,numero-1): #i=iterar
        if numero%i==0: 
            return False
    return True 
        
def primos_desde_este_numero(numero):
    primos=[]
    for i in range(2,numero+1):
        resultado=es_primo(i)
        if resultado==True: primos.append(i)
    return primos
resultados=primos_desde_este_numero(16)
print(resultados)

def obtener_compañero(num):
    compañeros=[]
    for i in range(num):
        age=int(input("Ingrese su edad: "))
        name=input("Ingrese su nombre: ")
        compañero=(age,name)
        compañeros.append(compañero)
    compañeros.sort(key=lambda x:x[0])
    asistente=compañeros[0][1]
    docente=compañeros[-1][1]
    return asistente,docente
resultado=obtener_compañero(3)
print(resultado)

primos_hasta=lambda x:list(
    filter(
        lambda x: all(x%i!=0 for i in range(2, int(x**0.5)+1)),
        range(2,x)
        )
    )
print(primos_hasta(15))

def sucesion_fibonacci(num):
    fibonacci=[0]
    a,b=0,1
    for i in range(num):
        if a+b>num:
            return fibonacci
        else:
            fibonacci.append(b)
            a,b=b,a+b
resultaditos=sucesion_fibonacci(15)
print(resultaditos)





 