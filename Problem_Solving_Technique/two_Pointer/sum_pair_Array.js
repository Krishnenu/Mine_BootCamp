// Two Pointer Problem:

// Input: nums = [-3, -1, 0, 2, 3, 6, 7, 8, 9], target = 9
// Output: [(2, 7), (3, 6)]
// Explanation: The elements at indices (2, 7) and (3, 6) form pairs with sums equal to the target 9: (0 + 9) and (2 + 7).


const arr=[-3, -1, 0, 2, 3, 6, 7, 8, 9];

function expectedSum(array,sum){
    let first=0;
    let last=arr.length-1;
    let result=[];
    while(first<last){
        if (((array[first])+(array[last]))===sum){
            result.push([first,last]);
            first=first+1;
        }else if(((array[first])+(array[last]))>sum){
            last=last-1;
        }else if(array[first]+(array[last])<sum){
            first=first+1;
        }
    }
    return result;
}

console.log(expectedSum(arr,9));
