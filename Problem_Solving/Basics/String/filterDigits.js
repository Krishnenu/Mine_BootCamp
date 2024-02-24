const str="Na10r23a45ya2n";
let arr="";

for(let i=0;i<str.length;i++){
   if(isNaN(parseInt(str[i]))){
    arr+=str[i];
   } 
}

console.log(arr);