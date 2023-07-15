console.log("------------------- Pattern 1 --------------------------------\n");

function star_1(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<n;j++){
            output+="* ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_1(5));


console.log("------------------- Pattern 2 --------------------------------\n");


function star_2(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+="* ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_2(5));

console.log("------------------- Pattern 3 --------------------------------\n");

function star_3(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+=(j+1)+" ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_3(5));


console.log("------------------- Pattern 4 --------------------------------\n");

function star_4(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+=(i+1)+" ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_4(5));


console.log("------------------- Pattern 5 --------------------------------\n");

function star_5(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=n;j>i;j-- ){
            output+="* ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_5(5));


console.log("------------------- Pattern 6 --------------------------------\n");

function star_6(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<n-i;j++){
            output+=(j+1)+" ";
        }
        output+='\n';
    }
    return output;
}

console.log(star_6(5));


console.log("------------------- Pattern 7 --------------------------------\n");

function star_7(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<n-i-1;j++){
            output+=" ";
        }
        for (let k=0;k<(i*2)+1;k++){
            output+="*";
        }
        output+='\n';
    }
    return output;
}
 
console.log(star_7(5));


console.log("------------------- Pattern 8 --------------------------------\n");

function star_8(n){
    let output="";
    for(let i=0;i<n;i++){
        for(let k=0;k<i;k++){
            output+=" ";
        }
        for (let j=0;j<((2*n)-1)-(i*2);j++){
            output+="*";
        }
        output+='\n';
    }
    return output;
}
 
console.log(star_8(5));


console.log("------------------- Pattern 9 --------------------------------\n");

function star_9(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<n-i-1;j++){
            output+=" ";
        }
        for (let k=0;k<(i*2)+1;k++){
            output+="*";
        }
        output+='\n';
    }

    for(let i=0;i<n;i++){
        for(let k=0;k<i;k++){
            output+=" ";
        }
        for (let j=0;j<((2*n)-1)-(i*2);j++){
            output+="*";
        }
        output+='\n';
    }
    return output;
}
 
console.log(star_9(5));


console.log("------------------- Pattern 10 --------------------------------\n");


function star_10(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<i+1;j++){
            output+="*";
        }
        output+="\n";
    }
    for(let i=0;i<n;i++){
        for (let j=n;j>i+1;j--){
            output+="*";
        }
        output+="\n";
    }
    return output;
}
 
console.log(star_10(5));


console.log("------------------- Pattern 11 --------------------------------\n");

function star_11(n){
    let output="";
    let val;
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            val= (i+j)%2===0 ? 1 :0;
            output+=val;
        }
        output+='\n';
    }
    return output;
}

console.log(star_11(5));


console.log("------------------- Pattern 12 --------------------------------\n");

function star_12(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+=(j+1);
        }
        for(let k=i*2;k<(n*2)-2;k++){
            output+=" ";
        }
        for (let l=i;l>=0;l-- ){
            output+=(l+1);
        }
        output+='\n';
    }
    return output;
}

console.log(star_12(4));


console.log("------------------- Pattern 13 --------------------------------\n");

function star_13(n){
    let output="";
    let k=1;
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+=k+" ";
            k++;
        }        
        output+='\n';
    }
    return output;
}

console.log(star_13(5));


console.log("------------------- Pattern 14 --------------------------------\n");

function star_14(n){
    let output="";
    let k;
    for(let i=0;i<n;i++){
        k=65;
        for (let j=0;j<=i;j++ ){           
            output+=String.fromCharCode(k)+" ";
            k++;            
        }             
        output+='\n';
    }
    return output;
}

console.log(star_14(5));

console.log("------------------- Pattern 15 --------------------------------\n");

function star_15(n){
    let output="";
    let k;
    for(let i=0;i<n;i++){
        k=65;
        for (let j=0;j<n-i;j++){
            output+=String.fromCharCode(k)+" ";
            k++;
        }
        output+='\n';
    }
    return output;
}

console.log(star_15(5));

console.log("------------------- Pattern 16 --------------------------------\n");

function star_16(n){
    let output="";
    let k=65;
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){           
            output+=String.fromCharCode(k)+" ";                      
        }
        k++;              
        output+='\n';
    }
    return output;
}

console.log(star_16(5));

console.log("------------------- Pattern 17 --------------------------------\n");

// function star_17(n){
//     let output="";
//     let k=65;
//     for(let i=0;i<n;i++){
//         // for (let j=0;j<n-i-1;j++){
//         //     output+=" ";
//         // }
//         for (let k=0;k<(i*2)+1;k++){
//             output+=String.fromCharCode(k);
//         }
//         output+='\n';
//     }
//     return output;
// }

// console.log(star_17(5));

console.log("------------------- Pattern 18 --------------------------------\n");

function star_18(n){
    let output="";
    let k=69;
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){ 
            output+=String.fromCharCode(k)+" ";
            k++;
        }
        k=k-i-2;
        output+='\n';
    }
    return output;
}

console.log(star_18(5));


console.log("------------------- Pattern 19 --------------------------------\n");

function star_19(n){
    let output="";
    for(let i=n;i>0;i--){
        for (let j=0;j<i;j++ ){
            output+="*";
        }
        for(let k=0;k<(n*2)-(i*2);k++){
            output+=" ";
        }
        for (let l=i;l>0;l-- ){
            output+="*";
        }
        output+='\n';
    }

    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+="*";
        }
        for(let k=i*2;k<(n*2)-2;k++){
            output+=" ";
        }
        for (let l=i;l>=0;l-- ){
            output+="*";
        }
        output+='\n';
    }
    return output;
}

console.log(star_19(5));



console.log("------------------- Pattern 20 --------------------------------\n");

function star_20(n){
    let output="";
    for(let i=0;i<n;i++){
        for (let j=0;j<=i;j++ ){
            output+="*";
        }
        for(let k=i*2;k<(n*2)-2;k++){
            output+=" ";
        }
        for (let l=i;l>=0;l-- ){
            output+="*";
        }
        output+='\n';
    }
    for(let i=n-1;i>0;i--){
        for (let j=0;j<i;j++ ){
            output+="*";
        }
        for(let k=0;k<(n*2)-(i*2);k++){
            output+=" ";
        }
        for (let l=i;l>0;l-- ){
            output+="*";
        }
        output+='\n';
    }
    return output;
}

console.log(star_20(5));



console.log("------------------- Pattern 22 --------------------------------\n");

function star_22(n){    
    let output="";
    let val=1;
    for(let i=0;i<(n*2)-1;i++){
        for (let j=0;j<(n*2)-1;j++ ){
            if((j+i)===0){
                output+=0;
            }else{
                output+=val;
            }
        }
        output+='\n';
    }
    return output;
}

console.log(star_22(3));



let user1 = { 
    name : 'Jacob',
    age : 28
  };
  
let user2 = user1;
  
console.log(user1 === user2);
