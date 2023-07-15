let person={
    firstname:"Krishnendu",
    lastname:"narayan",
    info:["social","caring","understable"],
    loaction:{
        state:"karnakata",
        dist:"bangalore"
    }
}

let arr=["a","folder","profile",6,"s6ge"];


for(let p in person){
        for(let a of person[p]){
            console.log(a);
    }

}

