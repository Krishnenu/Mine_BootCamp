/* 
The code snippet below is synchronous. It calls `callback1` one time and `callback2` three times. You must modify 
this code to make it asynchronous with the following rules:
- `callback1` must be called only one time, after 2 seconds.
- `callback2` must be called three times with an interval of 1 second.
**/


function job(callback1, callback2) {
    setTimeout(()=>{
        callback1();
    },2000);
    let i=0;
    while(i<3000){
        setTimeout(()=>{
            callback2();
        },i);
        i=i+1000;  
    }  
}

const callback1 = ()=>{
    console.log("callback1");
}

const callback2 = () =>{
	console.log("callback2");
}

job(callback1,callback2);