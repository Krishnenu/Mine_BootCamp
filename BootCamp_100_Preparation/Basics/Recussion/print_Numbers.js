function numberPrint(num,i){
    if(num<i){
        return;
    }else{
    console.log(i);
    numberPrint(num,++i);
    console.log(i);
    }  
}

numberPrint(10,1);