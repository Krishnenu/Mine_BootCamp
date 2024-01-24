// const getFirstOccurance = (nums, target) => {
//     let lo = 0;
//     let hi = nums.length-1;
//     let firstOccurance = -1;
//     let mid;
//     while(lo<=hi){
//         mid = Math.floor((hi+lo)/2);
//         //console.log("1",mid,lo,hi);
//         if(nums[mid]===target){
//             firstOccurance = mid;
//             lo=0;
//             hi = mid-1;
//         }else if(nums[mid]>target){
//             hi=mid-1;
//         }else if(nums[mid]<target){
//             lo=mid+1;
//         }else if(lo==hi){
//             break;
//         }
//     }
//     return firstOccurance;
// };

const getFirstOccurance = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;
  let lastOccurance = -1;
  let mid;
  while (lo <= hi) {
    mid = Math.floor((hi + lo) / 2);
    if (nums[mid] === target) {
      lastOccurance = mid;
      lo=mid;
      hi = mid+1;
    } else if (nums[mid] > target) {
      hi=mid+1;
    } else if (nums[mid] < target) {
      hi = (mid-1+hi)/2;
    } else if (lo == hi) {
      break;
    }
  }
  return lastOccurance;
};

//get last occurance
console.log(
  getFirstOccurance([5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 10], 7)
);
