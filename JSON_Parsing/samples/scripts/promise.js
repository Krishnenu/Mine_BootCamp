// if data even return promise that resolve itself after 2 sec.

function checkCondition(data){
    return new Promise((res,rej)=>{
        let st = Date.now();
        if(isNaN(data)){
            rej("Not a number please enter valid number!");
        }else{
            if(data%2===0){
                setTimeout(()=>{
                    res(`Even Number = ${data} and time=${Date.now() - st}`);
                },2000);
            }else{
                setTimeout(()=>{
                    res(`Odd Number = ${data} and time=${Date.now() - st}`);
                },1000);
            }
        }
    })
    }
checkCondition(100).then((d)=>{console.log(d)});