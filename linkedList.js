class ListNode{ // CREATE A NODE ["number1", next] and after defining the next node the node could look like this
	constructor(data){	//the node will point to the next number [number1, number2] > [number2, number5] > [number5, number3]
  	this.data = data;
  	this.next = null;
  }
}

class LinkedList{ //if the head node is not passed, the head is initialised to null
	constructor(head = null){
  	this.head= head;
  }
  size(){
  	let count = 0;
    let node = this.head;
    while(node){
    	count++;
      node = node.next;
    }
    return count;
  }
  
  
}

let node1 = new ListNode(1); //IN ORDER TO CREATE A NEW NODE
let node2 = new ListNode(2); // WE HAVE TO CALL THE CLASS AND ADD THE VALUE INTO THE PARAMETER
let node3 = new ListNode(5);
let node4 = new ListNode(9);
node1.next = node2;	//AND THEN THE NULL NEXT NODE WILL BE FILLED WITH THE NEXT NODE VALUE
node2.next = node3;	
node3.next = node4;

let list = new LinkedList(node1); //creating the linked list

console.log(list.head.next.data); //TRYING TO ACCESS THE LIST
console.log(list.size());
