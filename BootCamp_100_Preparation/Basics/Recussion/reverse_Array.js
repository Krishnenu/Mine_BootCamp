// Method 1
// const arr=[1,4,6,8,9,0,3,5,2];

// function reverseArray(array,i,result){//result non-premitive CBR
//  if(i === array.length){
//     return;
//  } 
//  reverseArray(array,i+1,result);
//  result.push(array[i]); 
// } 
// let res = [];
// reverseArray(arr,0,res);
// console.log(res);


// Method 2  
// const arr1=[1,2,3,4,5,6];
// let i=0;
// function swap(arr,f,l){
//     const temp = arr[f];
//     arr[f] = arr[l];
//     arr[l] = temp;
// }
// function reverseArray(array,first,last){//result non-premitive CBR
//  if(first>=last){
//     return;
//  } 
// swap(array,first,last);
// reverseArray(array,first+1,last-1);
// } 

// reverseArray(arr1,0,arr.length-1);
// console.log(arr1);


const arr=[1,2,3];

function reverseArray(array, res,i){//result non-premitive CBR
 if(i === (array.length/2)){
    return;
 }
 reverseArray(array, res,i+1);
 res.push(arr[i]);
} 
let res = [];
reverseArray(arr, res, 0);
console.log(res);