let arr=["5","2","C","D","+"];


function a(ops){
    var result=[];
    for(let i=0;i<ops.length;i++){
        if(ops[i]==="C"){
            result.pop();
        }else if(ops[i]==="D"){
            let p=(String(result[result.length-1]*2));
            result.push(p);
        }else if(ops[i]==="+"){
            let f=(result[result.length-1]);
            let s=(result[result.length-2]);
            result.push(f+s);
        }else{
            result.push(ops[i]);
        }
    }
    return result;
}
console.log(a(arr));