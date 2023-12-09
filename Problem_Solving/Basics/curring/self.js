const s=function (a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

let arg1=s(1);
let arg2=arg1(2);
// let addertwo=s(20)(7);

let adderAll=s(10)(20)(30);

// console.log(adderC);
// console.log(adderAll);
// console.log(addertwo(45));
console.log(arg2(3));