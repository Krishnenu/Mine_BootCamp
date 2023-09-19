
Array.prototype.addAll=function(){
    let sum=0;
    let str='';
    let obj={};
    for(let a of this){
        if(typeof a ==='number'){
            sum=sum+a;
        }else if(typeof a ==='string'){
            str=str+" " +a;
        }else{
            console.log(`Please Enter Number or String value ${a}`);
        }
    }
    obj.SumVal=sum;
    obj.strVal=str;    
    return obj;
}



let arr = [0,1,2,"hi","how are you",8,3,6,];
let result = arr.addAll();
console.log(result);