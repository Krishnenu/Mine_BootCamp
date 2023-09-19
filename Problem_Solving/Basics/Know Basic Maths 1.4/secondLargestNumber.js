let arr=[23,76,98,99,102,394,25,76,87,65];

function secondLarger(arr){
    let first=arr[0];
    let second=0;
    for(let i=1;i<arr.length;i++){        
        if(arr[i]>first){
            second = first;
            first=arr[i];
        } else if(arr[i]<first && arr[i]>second) {
            second = arr[i];
        }
    }
    return second;
}

console.log(secondLarger(arr)); 