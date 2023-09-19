function simpleFlatObject (obj) {

    let result = {};
    let key = Object.keys(obj);

    for(let i=0; i< key.length; i++){

        let currkey = key[i];
        let currval = obj[currkey];

        if(typeof currval ==='object'){
            if(Array.isArray(currval)){
                let arr = [];
                for(let j = 0; j<currval.length; j++){
                    arr.push(currval[j]);
                }
                result[currkey] = arr.join(" ");            
            }else{
                result[currkey] = [];
                var insideObj = currval;
                for(let keys in insideObj){
                  result[currkey].push(`${keys}-${insideObj[keys]}`);
                }       
            }
        }else{
            result[currkey] = [];
            result[currkey].push(currval);
        }
    }
    return result
}

let testData={
    a:1,
    b:true,
    c:"champ",
    d:["Krishnendu","Narayan"],
    e:{
        name:"John",
        age:38
    }
}


console.log(simpleFlatObject(testData));


