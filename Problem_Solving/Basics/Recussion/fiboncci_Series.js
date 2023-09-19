function fibonacci(num){
    if(num===0 || num ===1){
        return num;
    }
    const fib=fibonacci(num-1)+fibonacci(num-2);
    return fib;
}
console.log(fibonacci(11));