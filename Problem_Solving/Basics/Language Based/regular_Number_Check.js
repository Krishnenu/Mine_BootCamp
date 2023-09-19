/*  A regular number in mathematics is defined as one which evenly divides some power of 60. 
Equivalently, we can say that a regular number is one whose only prime divisors are 2, 3, and 5.
These numbers have had many applications, from helping ancient Babylonians keep time to tuning 
instruments according to the diatonic scale.Given an integer N, write a program that returns, 
in order, the first N regular numbers.  */

function isRegularNumber(number){
    let isValidNumber=false;

    if((parseInt(number%2)===0) && (parseInt(number%3)===0) && (parseInt(number%5)===0) && (parseInt(number%30)===0)){

        isValidNumber=true;
    }
    return isValidNumber;
}


console.log(isRegularNumber(30));
