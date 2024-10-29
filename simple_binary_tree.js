class Node{
	constructor(data,right,left){
  	this.data = data;
    this.left = left;
    this.right = right
  }
}

let root = new Node('R');
let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');

root.left = nodeA
root.right = nodeB

nodeA.left = nodeC
nodeA.right = nodeD

nodeB.left = nodeE
nodeB.right = nodeF

console.log(`        ${root.data}    `);
console.log(`right ${root.data}: ${root.right.data} ` + `left ${root.data}: ${root.left.data} `);
console.log(`right ${root.right.data}: ${root.right.right.data} ` + `left ${root.left.data}: ${root.right.left.data} `);
console.log(`right${root.left.data}: ${root.left.right.data} ` + `left ${root.left.data}:${root.left.left.data} `);
