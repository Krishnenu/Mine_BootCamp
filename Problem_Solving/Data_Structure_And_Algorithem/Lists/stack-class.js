class Stack {
    
  constructor() {
    this.data = [];
    this.top = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed into the stack.
   * @return {number} The new length of the stack.
   */

  push(item) {
    console.log(item.trim());
    if (item) {
      throw new Error("Please Enter a valid Input:");
    }
    this.data[this.top] = item;
    this.top = this.top + 1;
    return this.top;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */

  pop() {
    if (this.top === 0) {
      return;
    }
    this.data[this.top] = undefined;
    this.top = this.top - 1;

    return this.data[this.top];
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.data.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.data[this.top - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */

  length() {
    return this.data.length; //return type mismatch
  }

}

const s = new Stack();
console.log(s.push(" "));
