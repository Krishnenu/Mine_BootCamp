let ch="a b bdjs jjdj jkfjsf";

function removeSpace(a){
    let res=a.split(" ");
    return res.filter(Boolean).join("");
}



function main2(str) {
    let res=str;
    for(let i=0;i<res.length;i++){
        if(res[i].toUpperCase()){
            console.log(res[i]);
        }
        
    }
    console.log(res);
}

main2("heloUUU");

