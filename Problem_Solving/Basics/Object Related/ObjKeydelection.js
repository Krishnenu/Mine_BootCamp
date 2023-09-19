// let objKeyDelection= (obj,rmkey)=>{
//     let key=Object.keys(obj);
//     let resultArr=[];
//     for(let i=0;i<key.length;i++){
//         let currkey=key[i];
//         if(currkey === rmkey){
//             delete obj[currkey];
//         }else{
//             resultArr.push(`${currkey}:${obj[currkey]}`);
//        }
//     }
// return resultArr;
// }

let objKeyDelection= (obj,rmkey)=>{
    let arr=[];
    // for(let i=0;i<rmkey.length;i++){
    //         arr.push(`${rmkey[i]} --> ${obj[rmkey[i]]}`);
    //     if(obj.hasOwnProperty(rmkey[i])){
    //         delete obj[rmkey[i]];
    //      }else{
    //         throw new Error("Key not found");
    //      }
    // }
    // return arr;
    return rmkey.map((key) => {
      if (obj.hasOwnProperty(key)) {
        let str = `${key} --> ${obj[key]}`;
        delete obj[key];
        return str;
      } else {
        throw new Error("Key not found");
      }
    });
}

let obj= {
	a: 1,
	b: 2,
	c: [1,2,3],
	d: true,
    e:"hellow",
    f:["keys","double keys"]
}

let arr=["a","f","e"]

console.log(objKeyDelection(obj,arr));
console.log(obj);