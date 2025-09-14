# Sirve para encontrar un elemento que se repita más de len(list)/2 veces (no igual aunque sea par)
def elemento_mayoritario(nums):
  elemento, count=0,0 # Asignamos elemento y contador
  for num in nums:
    if count==0:
      elemento,count=num,1
    elif num==elemento:
      count+=1
    else:
      count-=1
  if(nums.count(elemento)>len(nums)//2):
    return elemento
  return None
nums=[1,2,1,3,1]
print(elemento_mayoritario(nums))