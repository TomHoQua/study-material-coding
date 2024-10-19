function binarySearch(yourArray, youTarget){
	let left = 0;
	let right = yourArray.length - 1;
	while(right >= left){
  	let mid = Math.floor(left + (right - left) /2);
  	if(yourArray[mid] == youTarget){
			return mid;    
    }
    if(yourArray[mid] > youTarget){
    	right = mid - 1;
    }
   	else {
    	left = mid + 1;
    }
  }
	return -1;
}

function quickSort(thArr){
	if(thArr.length <= 1){
  	return thArr;
  }
  
 	const pivot = thArr[0];
	let smallerArr = [];
	let biggerArr = [];
  
  for(let i= 1; i < thArr.length; i++){
    if(thArr[i] > pivot){
      biggerArr.push(thArr[i]);
    }
    else{
      smallerArr.push(thArr[i]);
    }
  }
  return [...quickSort(smallerArr), pivot, ...quickSort(biggerArr)];
}




let unsorted = [17,5,41,23,15,67,85,64,23,4,56,48,47,61,56,58];
let target = 61;
let test = quickSort(unsorted);
let result = binarySearch(test,target);

console.log(test);
if(result!= -1){
	console.log(`your number ${target} is on the index ${result}`);
}
else{
	console.log("number could not be found within this array");
}
