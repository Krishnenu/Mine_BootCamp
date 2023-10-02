var canBeIncreasing = function(nums) {
    let res=true;
    let remove=0;
    let pre=0;
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1] && !pre<nums[i-1]){
            pre=nums[i-1];
        }else{
            remove++;
            if(remove>1){
                res=false;
            }
        }
    } 
    return res;   
};