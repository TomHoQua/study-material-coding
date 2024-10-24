/*white a function, that takes A,B,C in its parameters
  function creates bunch of number from A to B (including B) with the step of C
  from these numbers, keep only the numbers that are odd and divided by 7, these numbers should return an array to the user
*/

function test(a,b,c){
	const temp = [];
  for(let i= a; i <= b; i+=c ){ /* this was tricky to figure out at first, 
  since i wanted the loop go from 5(a) to 25(b)
  then i have to declare i as A and have the condition of i <= b (this should include B) 
  and in order increase the A value in the for loop, i make use of the C
  if the problem didnt require me to use the C step, i would use i++
  i += c  is basically i += 1 which could also be i++ */
  	if(i %2 == 1 && i% 7==0){ //if i modulo 2 (module divideds a number and returns what's left) = 1 && (ive used double ampersants for the AND operator) i modulo 7 should return zero 
    	temp.push(i); // this is going to push the numbers that follow these conditions
    }
    else{
    	continue; //i could just ignore the else statement and not even write it, but i added the else with continue just for myself
    }
  }
	return temp; //once the loop is finished, i should get back my array
}
// the values
let aA = 5;
let bB= 100;
let cC= 1;

//called my function
let result = test(aA,bB,cC);
console.log(result);
