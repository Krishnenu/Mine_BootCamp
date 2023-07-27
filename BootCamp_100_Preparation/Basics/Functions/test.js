// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);
 


// function greeting() {
//   setTimeout(function() {
//     console.log(message);
//   },0);
//   const message = "Hello, Good morning";
// }
// greeting();


// let message = 'Hello World!';
// console.log(message[0])
// message[0] = 'J';
// console.log(message);

// let name = 'John';
// name = name + ' Smith';
// console.log(name);



// var length = 10;
// function fn() {
// 	console.log(this.length);
// }
// var method = function(fn) {
//     fn();
//     arguments[0]();
// }
// var obj = {
//   length: 5,
//   method: method
// };

// obj.method(fn, 1, 56);
// method(fn, 1, 56);


var y=10;

function outer(){
  function inner(){
    console.log(y);
  } 
  inner();
  var y=20;
  inner();
}

outer();
