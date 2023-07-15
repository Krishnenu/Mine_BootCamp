
const digitCount = require("./digit_Count");
let isArmestrong=function(num){
    let sum=0;
    let digit=num;
    let r=0;
            while (digit>0) {                
                r=Math.floor(digit%10);               
                sum=sum+ Math.pow(r,digitCount(num));
                digit=parseInt(digit/10);               
            }           
        return num===sum?true:false;
    }

console.log(isArmestrong(153));