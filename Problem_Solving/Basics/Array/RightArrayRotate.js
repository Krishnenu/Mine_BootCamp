let nums = [1,2,3,4,5,6,7], k = 3;

// approch 1
// var rotate = function (nums, k) {
// while(k>0){
//     let temp=nums[nums.length-1];
//     for (let i = nums.length-1; i>0; i--) {
//         nums[i]=nums[i-1];
//     }
//     nums[0]=temp;
//     k--;
// }
//   return nums;
// };


//Aproch Two
//  var rotate = function (nums, k) {
//     if(nums.length<2) return nums;
//     if(k>=nums.length) {
//         k = k % nums.length || k;
//         if(!k) return nums;
//     }
//     temp = {}, ti=k;
//     for (let i = nums.length-1; i>=0; i--) {
//         if(i-k<0) {
//             nums[i] = temp[++ti]
//         } else {
//             temp[i]=nums[i];
//             nums[i]=nums[i-k];
//         }
//     }
//    return nums;
//  };

 var rotate = function (nums, k) {
    let temp=new Array(k);
    let p=0;
    let len=nums.length;
    if(len<2){
      return ;  
    }
    if(k%len){
        k=k%len;
    }
    for(let i=len-k;i<=len-1;i++){
        temp[p]=nums[i];
        p++;
    }
    for(let j=len-k-1;j>=0;j--){
        nums[j+k]=nums[j];
    }
    for(let l=0;l<k;l++){
        nums[l]=temp[l];
    }
  return nums;
};

console.log(rotate(nums, k));

// console.log(rotate(nums, k));
