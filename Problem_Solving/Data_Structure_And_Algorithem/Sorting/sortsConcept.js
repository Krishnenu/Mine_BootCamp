const word1 = "abcjdh", word2 = "pqr";

// function creatDobleMatrix(data1,data2){
//     let arr=[];
//     arr[0]=data1.split("");
//     arr[1]=data2.split("");
//     for(let i=0;i<2;i++){
//         for(let j=0;j<arr[i].length;j++){
//             arr[i][j]
//         }
//     }
//     return arr;
// }
// let arr2d=creatDobleMatrix(word1,word2);


// function findOutPut(word1,word2){
//     let arr=[];
//     let smallString=0;
//     if(word1.length===word2.length){
//         smallString=word1;
//     }else{
//         smallString = word1.length<word2.length?word1:word2;
//     }   

//     let i=0,j=0;
//     while(i<=smallString.length && j<smallString.length){
//         // arr.push(word1[i],word2[j]);
//         // i++;
//         // j++;
//         if(i<=j){
//             arr.push(word1[i]);
//             i++;
//         } else {
//             arr.push(word2[j]);
//             j++;
//         }
//         // this case coverd in if(i<j || i=j) => if(i<=j);
//         // else{
//         //     arr.push(word1[i]);
//         //     i++;
//         // }
        
//     }
//     if( !(word1.length===word2.length)){
//         while(word1.length>=i){
//             arr.push(word1[i]);
//             i++;
//         }
//         while(word2.length>=j){
//             arr.push(word2[j]);
//             j++;
//         }
//     }
   
//     return arr.join("");
    
// }


/** * @param {string} word1 
 * * @param {string} word2 
 * * @return {string} 
 * */
var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      res.push(word1.charAt(i));
    }
    if (j < word2.length) {
      res.push(word2.charAt(j));
    }
    i++;
    j++;
  }
  return res.join("");
};
console.log(findOutPut(word1,word2));