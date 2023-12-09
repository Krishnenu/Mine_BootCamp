// Problem one

//Why its not printing anything FIX CODE

function executer3inRow(a, b, c){
    this.first(a);
    this.second(b);
    this.third(c);
}
const config = {
    first: (a)=>{console.log(a)},
    second: (b)=>{console.log(b)},
    third: (c)=>{console.log(c)}
};

// executer3inRow.bind(config)(1, 2, 3);
// console.log('*******');
// executer3inRow.call(config, 1, 2, 3);
// console.log('*******');
// executer3inRow.apply(config, [1, 2, 3]);


/*------------------------------------------------------------------------------------------*/

//Problem Two

// create a constructor function Car and Truck 
// create objects of class with info
// registrationNumber: "GA12345",
// brand: "Toyota"
// etc the displayDetails utility outside the class to print details
// Note :- here function use  ownerName as args so apply could be a better choice


function displayDetails (ownerName){
    console.log(ownerName + ", this is your vehicle: " + this.regNumber + " " + this.brand);
}


function car(brand,regNumber){
    this.brand=brand;
    this.regNumber=regNumber;
}

function truck(brand,regNumber){
    this.brand=brand;
    this.regNumber=regNumber;
}

const c=new car("Audi","1ABC234C");
const t=new truck("volvo","9ABC458CJK");

// displayDetails.bind(c)("krishnendu");

/*------------------------------------------------------------------------------------------*/

// ex3
// Find the issue how to fix that.


"use strict";
var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

const ok = person.prop.getName();
const notOk = person.prop.getName.bind(person);
const notOk2 = person.prop.getName.bind(person.prop);
// console.log(ok);
// console.log(notOk()); 
// console.log(notOk2());



/*------------------------------------------------------------------------------------------*/
//Ex4

function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var numbers = [1,2,3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);



/*------------------------------------------------------------------------------------------*/

function getGameType() {
       console.log(`${this.name} is ${this.type} game`);
     }

let game1 = {
    name: "Football",
    type: "outdoor",    
 };

let game2 = {
    name: "Badminton",
    type: "indoor",
 }


 console.log(getGameType.bind(game1));
 console.log(getGameType.call(game2));
 console.log(getGameType.apply(game2));



