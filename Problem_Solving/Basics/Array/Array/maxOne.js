let nums = [1,1,0,1,1,1];

var findMaxConsecutiveOnes = function(nums) {
    let countOne=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
            if(count>countOne){
                countOne=count;
            }
        }else{
            count=0;
        }
    }
    return countOne;    
};


console.log(findMaxConsecutiveOnes(nums));