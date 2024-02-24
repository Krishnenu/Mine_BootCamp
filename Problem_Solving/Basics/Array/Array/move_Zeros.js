/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const test= [0,1,0,3,12];
var moveZeroes = function(nums) {
    let left=0;
    let right=0;
    if(nums.length<2) return nums;
    for(;right<nums.length;right++){
        if(nums[right]!==0){
            let temp=nums[left];
            nums[left]=nums[right];
            nums[right]=temp;
            left++;
        }
           
    }
return nums;
};
console.log(moveZeroes(test));