const bunchOfNumber = [1,4,2,7,5,8,9,3]; //an array with number in it

function theNumberIsHere(theArray,thatnumber){ //function that i will call later parameter(the array with the numbers, the number that i want to find )
  for(let i in theArray){ // loop that will iterate through each value 
    if(thatnumber === theArray[i]){ //if THE NUMBER THAT IM LOOKING FOR equals THE NUMBER IN THE ARRAY 
      return i;  //return the index > where the number is in
    }
  } 
   // Return -1 if the number is not found in the array (optional, but useful) #chatgpt
  }

  console.log("the number on this position: " + theNumberIsHere(bunchOfNumber,7)); // print out the string + the function should give us the number of the index position
  //it should return 3
  // why? we start from 0
  // so i: 0 should be 1
  // i: 1 should be 4
  // i: 2 should be 2
  // i: 3 should be 7
