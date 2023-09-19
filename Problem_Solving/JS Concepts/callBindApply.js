
var person={
    firstName:"John",
    lastName:"Doe",
    getFullName(){
        var fullName=this.firstName+" "+this.lastName;
        return fullName;
    }
}

var logName=function(){
    console.log("logged "+this.getFullName());
}
logName.call(person);

// Bind returns a copy of object and it can be ssigned to variable and can be called as anonymous function call.
var logPersonName=logName.bind(person);
logPersonName();

// but in case of call it uses the object but its doesnot return anything so we cant store and cant call as anynomous function
logName.call(person);

// function browing

let person2={
    firstName:"krishnendu",
    lastName:"Narayan",

}

// apply is used as browing other function in place of original function but key should be match.
console.log(person.getFullName.apply(person2));

//curring- creating a copy of function with some parameter as preset.

function multiply(a,b){
    return a*b;
}

var multiplyByTwo=multiply(this,2);
console.log(multiplyByTwo);