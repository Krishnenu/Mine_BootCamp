// const promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
        
//     },3000);
//     res("Resolved");
// })

// promise.then((re)=>{
//     console.log(re);
// }
// )


// console.log('start'); 

// const promise1 = new Promise((resolve, reject) => {  
//     console.log(1);  
//     resolve(2);
//   }) 
//   promise1.then(res => {
//     console.log(res)
//   }) 
//   console.log('end');

//   //start
//     //1
//   //end
 
//   //2

//Create a function that takes an array of promises and return a promise where the returned 
//promise will have values as {status:resolved , response:""}{status:rejected,reason:""}

const promiseArr=[];

for(let i=0;i<20;i++){
        promiseArr.push(Promise.reject(i));    
        // promiseArr.push(Promise.resolve(i));
        
}

// function resPromise(arr){
//     arr.map((r)=>{
//         r.then((res)=>res);
//     })
// }


/**
 * 
 * @param {[Promise]} promiseList 
 * @returns {Promise}
 */

const promiseAllSettled = (promiseList) => {
    return new Promise((resolve,reject)=>{
        let count = promiseList.length;//This flag is to keep track ie array.map is synchronous.
        const resultList = [];
        promiseList.forEach((promise,index)=>{
            promise.then((response)=>{
                resolve(response);
                // count--;
                // resultList.push(response);
                // if(count === 0){
                //     resolve(resultList); //if all element parsed and not burst yet we can resolve
                // }
            });
            promise.catch(reason=>{
                reject(`${index} is got rejected`);
                // count--;
                // resultList.push(reason);
                // if(count === 0){
                //     resolve(resultList); //if all element parsed and not burst yet we can resolve.
                // }
            });
        });
    });
};

console.log(promiseAllSettled(promiseArr));

// const p=new Promise((res,rej)=>{
//     setTimeout(()=>{rej("Lalla");},25000);
//   })
//   undefined

//   ​​
//   const pF= Promise.resolve("k");
//   pF();

//   setTimeout(()=>{
//     console.log("hi");
//   },0);
//   Promise.resolve("hellow").then((res)=>{console.log(res)});
//   queueMicrotask(()=>console.log("Bye")); 

  
//   // question
//   console.log('start'); 

// const promise1 = new Promise((resolve, reject) => {  
//     console.log(1);  
//     resolve(2);
//   }) 
//   promise1.then(res => {  
//     console.log(res)
//   }) 
//   console.log('end');