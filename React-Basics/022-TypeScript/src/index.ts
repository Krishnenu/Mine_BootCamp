(function(){
    // defining type to any variable.

// method 1- assogn value direct
let var1={
    a:'a'
};
// Method2 - assign the type to variable

let  var2:String;
var2='a';

let var3:number;

let var4:object;

let var5:undefined;

let var6:unknown;

let var7:{
    a:string
};
// Method 3 - make interface and assign interface to a variable.
interface TypeVar5{
    a:string;
}

let var8:TypeVar5;

interface TypeVar2<P>{
    a:string;
    b:P;
}

let var13:TypeVar2<number>;

// Method 4 - define using type and assign to a variable.

type TypeVar3={
    a:string;
}

let var9:TypeVar3;


// Composition Type 

// function add(a:number|string  ,b:number|string):string|number{
//     return a+b;
// }

let temp:any={};

let var10:{a:string}|[number] |boolean =temp;

if (var10 instanceof Array){
  
}else if (var10 instanceof Boolean){
    var10
}

// genrics intro to Array

let var11:{a:string}&Array<number> =temp;// combining object and array Proprties.

if (var11 instanceof Array){

}else{
    var11
}

// Generics

function buildObject(key:string,value:any):{[kay:string]:any}{
    let obj={};
    obj[key]=value;
    return obj;
}

function buildObject2<T>(key:string,value:T):{[key:string]:T}{
    let obj={};
    obj[key]=value;
    return obj;
}

let var12=buildObject2('a',10);

type AddOrConcat<A,B>=A extends (string)?string:(B extends (string)?string:number);

function addOrConcat<A,B>(a:A  ,b:B):AddOrConcat<A,B>{
    return (a as any + b as any);
}

let var14=addOrConcat("10","12");
let var15=addOrConcat(10,12);
let var16=addOrConcat("10",12);


// Enum Making:
enum E{
    'Akshay','Amit','Lalla'
}

let var17:E;

})();