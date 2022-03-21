//implementation of Node class
class Node {
    constractor(val){
        this.val = val;
        this.next =null;
    }
}

class LinkedList {
    constractor(){
        this.head =null;
        this.tail =null;
        this.length = 0;
    }
}


//test case
let newNode = new Node("hi");
newNode.next = new Node ("you");

console.log(newNode);