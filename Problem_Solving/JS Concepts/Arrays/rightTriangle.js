function rightTriangle(n){
    let res='';
    for(let i=0;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i<j){
                res+=" ";
            }else{
                res+="*";
            }
        }
        res+="\n";
    }
return res;
}


var name = prompt("Enter any value");
rightTriangle(name);