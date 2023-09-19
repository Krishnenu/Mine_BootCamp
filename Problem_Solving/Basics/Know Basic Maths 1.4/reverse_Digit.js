
let revrsetDigit=function(num){
    let sum=0;
    let r=0;
            while (num>0){
                r=Math.floor(num%10);
                sum=(sum*10)+r;
                num=Math.floor(num/10);                
            }
        return sum;
    }

console.log(revrsetDigit(0));