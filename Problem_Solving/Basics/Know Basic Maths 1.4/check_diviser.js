let diviser_print=function(num){
           for(let i=1;i<=num;i++){
            if(Math.floor(num%i)===0)
                console.log(i);               
            }       
}

console.log(diviser_print(999));