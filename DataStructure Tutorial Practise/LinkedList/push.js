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
        if(this.length===0){
            return undefined;
        }
        let current = this.head;
        let newTail =current;
        while(current.next){
            newTail = current;
            current= current.next;
        }
        this.tail=newTail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        } 
        return current;
         
    }

    shift(){
        let temp= this.head;
        if(this.length===0) return undefined;
        this.head=this.head.next;
        this.length--;
        if(length===0){
            this.tail=null;
        }
        
        return temp;
    }

    unshift(val){
        const newNode= new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail= this.head;
            
        }
        else{
            newNode.next=this.head;
            this.head =newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0 || index >this.length-1){
            return null;
        }
        else{
           let count =0;
           let current =this.head;
        while(count!==index){
            current =this.head.next;
            count++;
        }
        return current;
        }
    }

    set (index, value) {
        let foundNode =this.get(index)
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, node){
        if(index<0 || index>=this.length){
            return false;
        }
        else if(index===0){
           return !!this.unshift(node);

        }
        else if (index===this.length-1){
            this.push(node);
            return true;
        }
        else {
            const newNode = new Node(node);
            const foundNode = this.get(index-1);
            newNode.next = foundNode.next;
            foundNode.next= newNode;
            this.length++;
            return true;

        }
    }

    remove(index){
        if(index <0 || index >=this.length-1) return undefined;
        if(index===0) return this.shift(index);
        if(index ===this.length-1) {
            return this.pop();
            
        }
        else{
            const foundNode = this.get(index-1);
            const next = foundNode.next;
            const nextNext = foundNode.next.next;
            foundNode.next=nextNext;
            this.length--;
            return next;
        }
    }

    reverse(){
        let tail= this.tail;
        this.tail= this.head;
        this.head= tail;
        let next;
        let prev;
        let node = this.head;

        
    }

}



//test 
let list = new SinglyLinkedList();
list.push("zero");
list.push('one');
list.push('two');
console.log(list);

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

console.log(list.remove(2));
console.log(list.get(2));
console.log(list.length);



 





