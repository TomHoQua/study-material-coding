function quickSort(unsortedArray){
  //"checks" if the array is sorted and stops the loop + returns the sorted array
  // basically "it will keep splitting the left and right and the pivot and it will push them into arrays based on the conditions"
  // once the array has 0 or 1 > [] or [number] then return the array
if(unsortedArray.length <= 1){
  	return unsortedArray;
  }
	// important, otherwise i wont get the sorted arrray and it will keep on going


  // splitting into arrays if number is bigger or smaller than the pivot
	let smaller = []; //smaller numbers than the pivot
  	let bigger = [];  //bigger numbers than the pivot
	const pivot = unsortedArray[0]; // we can choose any pivot and move the numbers around the pivot
  
  for(i = 1; i < unsortedArray.length; i++){ //just a classic loop, minus the first pivot array, so we start at 1
  	if(unsortedArray[i] > pivot){  //if the "2nd number in the array is bigger than the pivot (our pivot is the first number)"
    	bigger.push(unsortedArray[i]); //  then push that number into the bigger array
    }
    else{ // else statment is basically just the opposite > if number is smaller than the pivot
    	smaller.push(unsortedArray[i]);  //then just push it into the smaller array
    }
  }
  return [...quickSort(smaller),pivot,...quickSort(bigger)]; // returns the arrays combined
} 


let arr = [44,75,78,42,31,57,84,51,32,73,94,12,48,97,45,62,15,78,9];
let sorted = quickSort(arr); //in order to call the function, im putting it into the sorted variable
console.log(sorted);
