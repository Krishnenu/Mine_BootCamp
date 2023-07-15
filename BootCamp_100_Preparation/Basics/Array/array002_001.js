//Question:
//Write a program that takes an array of integers as input and returns the sum of all the even numbers in the array. If the array is empty or does not contain any even numbers, the program should return 0.

let arr = [1, 2, 3, 4, 5, 6,8];

function getSumOfEvenNumber(arr){
    const ar=[];
    let sum=0;
    for(let a of arr){
        if(a%2===0){
            sum=sum+a;
            ar.push(a);
        }
    }
return sum;
}

console.log(getSumOfEvenNumber(arr));