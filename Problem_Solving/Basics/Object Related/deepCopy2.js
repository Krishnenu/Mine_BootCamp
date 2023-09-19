

const deepCopy = (value) =>{

    //primitive
    if(typeof value !== 'object'){
        return value;
    }else{
        //
        let res;
        if(Array.isArray(value)){
            res = value.map((item)=>deepCopy(item));
        }else{
            res = {};
            for(let key in value){
                res[key] = deepCopy(value[key]);
            }
        }
        return res;
    }

};

let newLocJason ={"isbn": "123-456-222",  
"author": 
   {
     "lastname": "Doe",
     "firstname": "Jane"
   },
"editor": 
   {
     "lastname": "Smith",
     "firstname": "Jane"
   },
 "title": "The Ultimate Database Study Guide",  
 "category": ["Non-Fiction", "Technology"]
}

console.log(deepCopy(newLocJason));