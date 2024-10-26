class Queue{
	constructor(){
  	this.queue = [];
  }
  
  enqueue(data){
  	return this.queue.push(data);
  }
 	
  dequeue(){
  	if(this.queue.length > 0){
      return this.queue.shift();
      }
  }
  peek(){
  	return this.queue[this.queue.length-1];
  }
  isEmpty(){
  	return this.queue.length == 0;
  }
	size(){
  	return this.queue.length;
  }
  clear(){
		this.queue = [];
  }
}

let someData = new Queue();

someData.enqueue(1);
someData.enqueue(2);
someData.enqueue(3);

console.log(someData.peek());

console.log(someData.dequeue());
console.log(someData.dequeue());

console.log(someData.isEmpty());
console.log(someData.size());

someData.clear();
console.log(someData.isEmpty());





