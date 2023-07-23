// Input: nums = [3, 2, 3, 5, 3, 7, 8, 3], val = 3
// Output: 4
// Explanation: After removing all occurrences of 3 from the array, the modified array becomes [2, 5, 7, 8], and its length is 4.

const nums = [3, 2, 3, 5, 3, 7, 8, 3];

function removeOccurence(arr,key){
    let first=0;
    let last=arr.length-1;

    while(first<last){
        if(arr[first]===key && arr[last]===key){
            last=last-1;
        }else if((!(arr[last]===key) && arr[first]===key) || (arr[last]===key) && !(arr[first]===key)){
            let temp=arr[last];
            arr[last]=arr[first];
            arr[first]=temp;
            first=first+1;
            last=last-1;
        }else if(!(arr[last]===key) && !(arr[first]===key)){
            first=first+1;
        }
    }
return arr;
}

console.log(removeOccurence(nums,3));