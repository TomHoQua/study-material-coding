 function fibonacci(){
 const number = 10; //how long i want the fibbo to go
  let n1=0; // first number always starts with  0
  let n2=1;  // second number should be 1
  let nextNum; // this variable basically count num1 + num2 and then this value is saved into num2 and the process repeats
  let fibo = []; // this is just for myself, to put the numbers in an array

  //console.log("fibbonaci seq") 

  for (let i = 1; i < number; i++){ //loop 1 to 9
    fibo.push(n1); //pushes the first number into the array
    nextNum = n1 + n2; //calculation for the next number
    n1= n2; //number1 has to save the OLD high number
    n2= nextNum; //number2 has to save the new high number
  } // and repeat
  return fibo; //and then return the array
  }
  
let result = fibonacci();
console.log(result); [0, 1, 1, 2, 3, 5, 8, 13, 21]
