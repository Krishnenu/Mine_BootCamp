// Normal way:

function revWordsinString(rev){
    let str=rev.split(" ");
    let newStr=[];
    for(let i=str.length-1;i>=0;i--){
        let sstr=str[i].split("");
        let rstr=[];
        for(let j=sstr.length-1;j>=0;j--){
            rstr.push(sstr[j]);
        }
        rstr=rstr.join("");
        newStr.push(rstr);
    }
    return newStr.join(" ");
}


console.log(revWordsinString("today is monday sunny day"));

// Optimisation:

function revStringWords(word){

    for(let i=0;i<word.length-1;i++){
        for(let j=word.length-1;j>=0;j--){
            if(i<j){
                let temp='';
                temp=word[i];
                word[j]=word[j];
                word[j]=temp;
            }
        }
        return word;
    }
}

console.log(revStringWords("hellow2"));