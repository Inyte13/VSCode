function unionArrs(arr1,arr2){
  let arr3=[]
  for(let n of arr1){
    if(arr2.indexOf(n)===-1){
      arr3.push(n)
    }
  }
  for(let n of arr2){
    if(arr1.indexOf(n)===-1){
      arr3.push(n)
    }
  }
  return arr3
}