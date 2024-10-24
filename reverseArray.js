function reverse(arr){
  const reverseArr = [];

  for(let i = arr.length -1; i >= 0 ; i--){
    const valueAtIndex = arr[i];
    reverseArr.push(valueAtIndex); 
  }
  
  return reverseArr;
}

const array= [1,2,3,4,5,6];
let result = reverse(array);

console.log(result);
