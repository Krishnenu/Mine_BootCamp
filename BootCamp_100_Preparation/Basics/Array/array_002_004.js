// Write a function called `generate_subarrays` that takes an array of integers as input and returns a list of all subarrays. A subarray is defined as a contiguous portion of the original array.
// Function Signature:
// Input:
// - The input parameter `arr` is a list of integers.
// Output:
// - The function should return a list of lists, where each inner list represents a subarray.
// Example:
// Input:
// arr = [1, 2, 3]
// Output:
// [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]
// Your task is to implement the `generate_subarrays` function to solve this problem. You can assume that the input will always be a valid list of integers.
// Feel free to modify the question or add any additional constraints based on your requirements.

const arr=[4,2,3];

function generate_subarrays(array){    
    let subArray=[];
    for(let i=0;i<array.length;i++){
        let tempArray=[];
        for(let j=1;j<=array[i];j++){
            tempArray.push(j);
        }
        subArray.push(tempArray);
    }
    return subArray;
}

console.log(generate_subarrays(arr));


