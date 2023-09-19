let firstNumber=function(n){
    let result=[];
    let number=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0];
    for(let i=0;i<n;i++){
        result.push(number[Math.floor(Math.random()*100%36)]);
    }
    return "Generated Captcha code of" + n + "character  ->"+result.join('');
}


console.log(firstNumber(5));