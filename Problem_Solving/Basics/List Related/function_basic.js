// (function test(){
//     this.name=test.name+"-";
//     console.log(test);
// })();
// test.count=0;

function test(){
    
    return this.count++;
}
let counter={count:0};
for(let i=0;i<5;i++){
    console.log(test.bind(counter)());
}