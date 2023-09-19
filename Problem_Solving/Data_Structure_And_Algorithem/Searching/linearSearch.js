const arr=[23,29,3,19,67,92,2,76];

let linearSearch=(value,element)=>{    
    for(let key of value.keys()){
         if (value[key]===element){
            return (`Value found at Index= ${key} value= ${value[key]}`);
         }
    }
    return (`Value not Found`);
}

console.log(linearSearch(arr,19));