const s=function (a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

let adderA=s(10);
let adderB=adderA(34);
let adderC=adderB(20);
let addertwo=s(20)(7);

let adderAll=s(10)(20)(30);

console.log(adderC);
console.log(adderAll);
console.log(addertwo(45));