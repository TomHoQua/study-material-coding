function binarySearch(theArray, theTarget){
	let left = 0; 
	let	right = theArray.length - 1; 
	
	while (left <= right){  
  	let mid = Math.floor(left +(right - left)/2); //can be (right - left)/2 >>>> can lead to overflow
    
    if(theArray[mid] == theTarget){
    	return mid;  //once we find the number that we're looking for, it will return the index
    }
    if(theArray[mid] < theTarget){
    	left = mid + 1;
    }
    else{
    	right = mid - 1;
    }
  }
	return -1;

}

let myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let myTarget = 3;

let result = binarySearch(myArray, myTarget);
if (result != -1){
	console.log(`the number: ${myTarget} is at the index of ${result}`);
}
else{
	console.log("number doesnt exist in this array")
}
