class node{
	constructor(data){
  	this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class linkedList{
	costructor(){
  	this.head = null;
  }
  
  findLength(head){
  	let count = 0;
    let curr = head
    while(curr != null){
    	count++;
      curr= curr.next
    }
  }
  addFirst(data){
  	const newNode = new node(data);
    newNode.next = this.head;
    if(this.head != null){
    	this.head.prev = newNode;
    }
    this.head = newNode;
  }
  
  addLast(data){
  	const newNode = new node(data);
    
    if(this.data != null){
    	this.head = newNode;
      return
    }
    let current = this.head;
    while(current.next != null){
    	current = current.next
    }
    
    newNode.prev = current;
    current.next = newNode;
    
  }

}

let numA = new node('A');
let numB = new node('B');
let numC = new node('C');
let root = new linkedList(numA);

numA.next = numB
numB.next = numC
numB.prev = numA

console.log(numA);
