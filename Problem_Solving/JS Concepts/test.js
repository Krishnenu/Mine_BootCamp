// Problem 1

// const arr = ['Hi', null, 0, true, 0n, '', [], {}, (100/0), parseInt('Hi'), ()=>{}, undefined, '0']

// function isTruthy(value) {
//     return value ? true : false;
// }

// /**
//  * @param {any[]} arr 
//  */
// function truthFinder(arr) {
//     for(const el of arr) {
//         console.log(`${el} => ${isTruthy(el)}`)
//     }
// }

// truthFinder(arr);


// Problem 2

// if data Nan return promise that rejects instantaniously

// if data odd return promise that returns itself after 1 sec

// if data even return promise that resolve itself after 2 sec.

function checkCondition(data){
    return new Promise((res,rej)=>{
        if(isNaN(data)){
            rej("Not a number please enter valid number!");
        }else{
            if(data%2===0){
                setTimeout(()=>{
                    return data;
                },2000);
            }else{
                setTimeout(()=>{
                    return data;
                },1000);
            }
        }
    })
    }