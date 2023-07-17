const arr=[1,4,66,87,32,45,67,34,65];


function rotation(arr,i){
    let temp=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
     arr[arr.length]=temp;
     return arr;
}

console.log(rotation(arr,0));