class Node {
    constructor(val){
        this.val =val;
        this.next =null;
    }
}


class SinglyLinkedist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);

    }
}

let list = new SinglyLinkedist();
list.push("Hello");
console.log(list);