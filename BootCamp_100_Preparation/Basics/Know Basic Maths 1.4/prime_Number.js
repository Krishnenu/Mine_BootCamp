let isPrimeNumber=function (num){
    let isPrime=true;
    if(num===0){
        throw new Error("Please enter valid prime number.");
    }
    for(let i=1, r=Math.sqrt(num); i<=r; i++){
        if(Math.floor(num%i)===0){
            isPrime=false;
        }
    }
    return isPrime;
}
console.log(isPrimeNumber(120));

