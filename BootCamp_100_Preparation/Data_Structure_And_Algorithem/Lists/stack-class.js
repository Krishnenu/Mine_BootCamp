class Stack {
  constructor() {
    this.data=[];
    this.top=0;
  }
  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed into the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.data[this.top] = item;
    this.top=this.top+1;  
    return `New Length = ${this.top}`;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {

    if (this.top===0){
        throw new Error("Stack is Empty Please a Item to stack.");
    }
    if (!(this.data[this.top]===" ")){
        this.data[this.top]= undefined;
        this.top=this.top-1;
    }
    return this.data[this.top]===" "?undefined:this.data[this.top];
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.data.length===0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return (this.data[this.top-1]===(undefined || " "))?undefined:(this.data[this.top-1]);
    }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
   return `No of Item in Stack= ${this.data.length}`;
  }
}


const s=new Stack();
// console.log(s.push("hi1"));
// console.log(s.push("hi2"));
// console.log(s.push("hi3"));
// console.log(s.push("hi4"));
console.log(s.push(" "));
// console.log(s.pop());
console.log(s.peek());
// console.log(s.isEmpty());
// console.log(s.peek());
// console.log(s.pop());
// console.log(s.push("hellow"));
// console.log(s.pop());
// console.log(s.peek());