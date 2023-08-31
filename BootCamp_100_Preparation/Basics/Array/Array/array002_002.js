//Question:
//Write a program that takes an array of integers as input and returns the count of numbers that are greater than the average of all the numbers in the array.

let arr = [4, 6, 8, 2, 5, 7,9];

function calAverage(arr){
    let sum=0;
    let count=0;
    for(let a of arr){
        count=count+1;
        sum=sum+a;
    }
    return (sum/count).toFixed(1);
}

function aboveAverage(arr){
    const avg=calAverage(arr);
    const result=[];
    let count=0;
    for(let a of arr){
        if(avg<a){
            count=count+1;
            result.push(a);
        }
    }
    return `${result} are greater then average and Total Count= ${count}`;
}

console.log(aboveAverage(arr));