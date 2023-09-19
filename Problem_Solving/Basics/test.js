
// setTimeout(() => {
//     try {
//       console.log('try block');
//       throw new Error(`An exception is thrown`);
//     } catch(err) {
//         console.log('Error: ', err)
//         } 
//     },1000);


const arr = ['Hi', null, 0, true, 0n, '', [], {}, (100/0), parseInt('Hi'), ()=>{}, undefined, '0']

function isTruthy(value) {
    return value ? true : false;
}

/**
 * @param {any[]} arr 
 */
// function truthFinder(arr) {
//     let a=[];
//     for(const el of arr) {
//         a.push(`${el} => ${isTruthy(el)}`)
//     }
//     return a;
// }

// console.log(truthFinder(arr));


function issueTicket(val){
    let ticNo=val;
    return function getTicket(){
        if(ticNo<=0){
             console.log("No Ticket available:");
        }else{
            console.log("Ticket issued");           
        }
        ticNo--;
    }
}

let ticket=20;
var anda = issueTicket(ticket);

// while(ticket>=0){
//     anda();
//     ticket--;
// }




// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);


// const numbers = [11, 25, 31, 23, 33, 18, 200];
// console.log(numbers.sort((a,b)=>a-b));



// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){     
//         console.log(b)
//     }
//     inner();
// }
// outer();



// for (let i = 0; i < 5; i++) {
// 	setTimeout(
//         function(){ 
//             console.log(i); 
//         }, i * 1000 );
// }


// const circle = {
//     radius: 20,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => this.radius ,
//   };
//   console.log(circle.diameter());
//   console.log(circle.perimeter());


// function second() {
// 	var message;
//   console.log(message);
// }

// function first() {
// 	var message="first";
//   second();
//   console.log(message);
// }

// var message = "default";
// first();
// console.log(message);





// var currentCity = "NewYork";

// var changeCurrentCity = function() {
//   console.log('Current City:', currentCity);
//   var currentCity = "Singapore";
//   console.log('Current City:', currentCity);
// }

// changeCurrentCity();


/**
* Question: 1
*/

// console.log("Hi Guys");

// /**
// * @param {string} str
// * @param {function(str): void} cb
// */

// function fun(str, cb) {
// 	console.log("inside fun");
// 	cb(str);
// 	console.log("After CB");
// }

// fun("value", function(s) {
// 	console.log(s);
// 	fun("innerValue", function(st) {
// 		console.log(st);
// 		console.log(s);
// 	});
// 	console.log("done");
// });
// console.log("End");

//hi guys
//inside fun
//value
//inside fun
// inner value
// value
//After CB
// done
//aftter cb
//end


/**
* Question: 2
*/

// console.log("Hi Guys");

// /**
//  * @type {function(): void}
//  */
// let newFunc;

// /**
// * @param {string} str
// * @param {function(str): void} cb
// */
// function fun(str, cb) {
// 	console.log("inside fun");
// 	cb(str);
// 	console.log("After CB");
// }

// fun("value", function(s) {
// 	console.log(s);
// 	fun("innerValue", function(st) {
//         console.log(st);
//         console.log(s);
//         newFunc = function() {
//             console.log(st);
//             console.log(s);
//         }
//     });
// 	console.log("done");
// });

// newFunc();

// console.log("End");

//inside fun
//value
//inside fun
//innerValue
//value
//After CB
//done
//After CB
//innerValue
//value
//end


// const circle = {
//     radius: 20,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI *this.radius,
//   };
//   console.log(circle.diameter());
//   console.log(circle.perimeter());




  const person = { name: "Lydia" };

  function sayHi(age) {
    return `${this.name} is ${age}`;
  }
  
  console.log(sayHi.call(person, 21));
  console.log(sayHi.bind(person, 21));













