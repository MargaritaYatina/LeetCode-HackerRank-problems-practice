//implementation of Node class
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
 }
class SinglyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    push(val) {
      const newNode = new Node(val)
      if (this.head===null) { // happens only once
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;   // this.a.next = b node???
        this.tail = newNode;
      }
      this.length++;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current=current.next;
        }
    }

    pop(){
        if(list.length===0){
            return undefined;
        }
        else{
            let current = this.head;
            let newTail =current;
            while(current.next){
                newTail = current;
                current= current.next;
                
            }
            this.tail=newTail;
            this.tail.next = null;
            this.length --;
            if(this.length===0){
                this.head=null;
                this.tail=null;
            }
        }
        return this;
    }
}

//test case
let list = new SinglyLinkedList();
list.push("first");

console.log(list.pop());
console.log(list.pop());
console.log(list);





