let test = [[[[1,2],[3,4]]],-1,0,[5],[6]];

const flatArray = (arr,res)=>{
    if(!Array.isArray(arr)){
        res.push(arr);

    }else{
        for(let key in arr){
            flatArray(arr[key],res);
        }
    }  
}
let res =[];
flatArray(test,res)
console.log(res);