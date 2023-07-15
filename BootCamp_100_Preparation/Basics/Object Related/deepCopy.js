const locationJson=require("./justice.json");

const createDeepCopy = (obj) => {
     let res;
   if(typeof obj === 'object'){
        if(Array.isArray(obj)){
            res = [];
            for (let key of obj) {
                if (typeof obj[key] === "object") {
                  //array and primitive
                  if (Array.isArray(obj[key])) {
                    res[key] =obj[key].map((item)=> createDeepCopy(item));
                  } else {
                    //object
                    res[key] = createDeepCopy(obj[key]);
                  }
                }
              }
            
        }else{
            res = {};
            for (let key in obj) {
                if (typeof obj[key] === "object") {
                  //array and primitive
                  if (Array.isArray(obj[key])) {
                    res[key] =obj[key].map((item)=> createDeepCopy(item));
                  } else {
                    //object
                    res[key] = createDeepCopy(obj[key]);
                  }
                }
              }
        }
   } else {
        return obj;
   } 

  //base cond

  //recursive code.

  // 1: pretivie
  //2: array
  //3: object
  //4 : we will iterate only enumerable keys


  return res;
};
//kaam ni kia.
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

// console.log(createDeepCopy(newLocJason));

function cloneArr(arr) {
    return arr.map(v => clone(v));
}

function cloneObj(obj) {
    let objCopy = {}, key;
    for(key in obj) {
        objCopy[key] = clone(obj[key]);
    }
    return objCopy;
}

function clone(obj) {
    if(typeof(obj) === 'object') {
        return (obj===null) ? null : ((obj instanceof Array) ? cloneArr(obj) : cloneObj(obj));
    }
    return obj;
}

console.log(clone(newLocJason));