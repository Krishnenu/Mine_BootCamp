function callMeBack(refCb){
    setTimeout(()=>{
        console.log("Hellow World");
    },1000);

    console.log("Dummey");

    setTimeout(()=>{
        console.log("Hellow World 3");
    },2000);

    refCb();

    setTimeout(()=>{
        console.log("Hellow World 2");
    },1000);

    refCb();
}

function useMeRef(){
    setTimeout(()=>{
        console.log("Hellow World 4");
    },1000);
}

callMeBack(useMeRef);


