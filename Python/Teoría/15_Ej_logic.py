# def equilibrio(str):
#   str=str.upper()
#   count_r=str.count("R")
#   count_j=str.count("J")
#   print(f"R:{count_r}\nJ:{count_j}")
#   return count_r==count_j 
# print(equilibrio("RJJJRRR"))

# def suma_pares(list):
#   sum=0
#   for lis in list:
#     if lis%2==0:
#       sum+=lis
#   return sum
# print(suma_pares([3,4,7,5,8]))

def primera_suma(nums, goal):
  for a in range(len(nums)):
    for b in range(a+1,len(nums)):
      if nums[a]+nums[b]==goal:
        return [a,b]
print(primera_suma([4,5,4,9],8))