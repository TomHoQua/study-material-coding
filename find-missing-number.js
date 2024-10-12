const newArray = [];//ive added an empty array that will take the generated numbers from for loop
let givenArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
    39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
    58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 
    76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 
    94, 95, 96, 97, 98, 99, 100
]; // lets say that i have a problem where i need to find a certain persons number within this array
const missingNumbers = []; 

for(let i = 1; i <= 100; i++){
  newArray.push(i);
} //generates my newArray where i have numbers 1-100


for (let i = 0;i <= newArray.length;i++){ // loop that will go on from 1 - the length of the newArray that we have created (so 1-100)
  if(!givenArray.includes(newArray[i])){ // IF givenArray DOES NOT inclue a certain number in that array THEN push missing number into the missingNumbers array
    missingNumbers.push(newArray[i]); //pushes the number
  }
}

console.log("Missing numbers are: " + missingNumbers.join(", ")); 


//there's an optimal way for doing this

//const n = 100;
//const expectedSum = (n * (n + 1)) / 2;

// Calculate actual sum of the given array
//const actualSum = givenArray.reduce((acc, num) => acc + num, 0);

// The missing number is the difference between the expected sum and the actual sum
//const missingNumber = expectedSum - actualSum;
