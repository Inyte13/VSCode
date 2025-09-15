# Sirve para encontrar un elemento que se repita más de len(list)/2 veces (no igual aunque sea par)
def elemento_mayoritario(lista):
  elemento=0
  count=0 
  for li in lista:
    if count==0:
      elemento=li
      count=1
    elif li==elemento:
      count+=1
    else:
      count-=1
  if(lista.count(elemento)>len(lista)//2):
    return elemento
  return None
lista=[1,2,1,3,1]
print(elemento_mayoritario(lista))