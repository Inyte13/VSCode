# Range, una variable que crea una secuencia de números cuando lo necesitemos
print(type(range(0,6)))
for num in range(5,10):
    print(num)
for num in range(20,12,-2):
    print(num)

# Convirtiendo el range en una lista (no recomendado)
list=list(range(10))
print(list)

# Hacer algo una cantidad determinada de veces (recomendado)
for _ in range(5):
    print(_)
    _+=1    

