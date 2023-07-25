const removeAllOccurances = (arr,val) => {
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        if(arr[left]===val){
            if(arr[right]===val){
                right--;
            }else{
                let temp = arr[right];
                arr[right] = arr[left];
                arr[left] = temp;
                right--;
                left++;
            }
        }else{
            if(arr[right]===val){
                right--;
            }else{
                left++;
            }
        }
    }
}
let arr = [3, 2, 3, 5, 3, 7, 8, 3];
removeAllOccurances(arr,3);
console.log(arr);