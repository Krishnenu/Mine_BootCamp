
let isPalindrome=function(num){
    let sum=0;
    let digit=num;
    let r=0;
            while (num>0){
                r=Math.floor(num%10);
                sum=(sum*10)+r;
                num=Math.floor(num/10);                
            }           
        return digit===sum?true:false;
    }

console.log(isPalindrome(765567));