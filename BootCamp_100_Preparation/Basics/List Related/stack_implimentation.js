function stack_implimentation() {
  this.isStackEmpty = true;
  this.isStackFull = false;
  this.top = 0;
  this.data = new Array(100);
  
  this.push = function (item) {
    if (this.data.length === this.top) {
      throw new Error("Stack Overflow");
    } else {
      this.data[this.top] = item;
      this.top++;
      this.isStackEmpty = false;
    }
  };

  this.pop = function () {
    if (this.top === 0) {
      throw new Error("Array index out of bond.");
    } else {
      this.top--;
      this.data[this.top] = null;
    }
  };
}

// s.push("87")
// s.push("99");
// s.pop();
// s.push("76");
// s.push("345");
// s.pop();
// s.push(786);
var s = new stack_implimentation();
//s.pop();
// var i = 0;
// while(i<100){
//     s.push(i);
//     i++;
// }
s.push(11);
s.push(12);
s.pop();
console.log(s.data);
