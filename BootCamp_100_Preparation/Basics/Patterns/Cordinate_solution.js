
function pattern(x,y){
    let xmin=-1*(x/2), xmax=(x/2);
    let ymin=-1*(y/2), ymax=(y/2);
    let p="";
    for(y=ymax ;y>=ymin;y-=0.5){
        for(x=xmin;x<=xmax;x+=0.5){
            if((x*x)+(y*y) ===4 ){
                p+="* ";
            }
            else p+="  ";
        }
        p+="\n";
    }
return p;
}


// function drawPattern(){
//     let s_length=10,s_width=10;
//     return pattern(s_length,s_width);
// }

// drawPattern();

console.log(pattern(20,20));