const arr=[1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0 ,1,1,0,0];

// function sortArray(arr){
//     let first=0;
//     let last=arr.length-1;
//     while(first<last){
//             while(arr[first]===0){
//                 first++;
//             }
//             while(arr[last]===1){
//                 last--;
//             }
//             if(arr[first]===1 && arr[last]===0){
//                 let temp;
//                 temp=arr[first];
//                 arr[first]=arr[last];
//                 arr[last]=temp;
//             }
//     }
//     return arr;

// }

/**
 * Correct Solution
 * function sortArray(arr){
    let first=0;
    let last=arr.length-1;
    while(first<last){
            if(arr[first]===0){
                first++;
            } else if(arr[last]===1) {
                last--;
            } else if(arr[first]===1 && arr[last]===0){
                let temp;
                temp=arr[first];
                arr[first]=arr[last];
                arr[last]=temp;
                first++;
                last--;
            }
    }
    return arr;
   }
 */


function sortArray(arr){
    let first=0;
    let last=arr.length-1;
    while(first<last){
            if(arr[first]===0){
                first++;
            }
            if(arr[last]===0 ){
                let temp;
                temp=arr[first];
                arr[first]=arr[last];
                arr[last]=temp;
            }
            last--;
    }
    return arr;
}

console.log(sortArray(arr));