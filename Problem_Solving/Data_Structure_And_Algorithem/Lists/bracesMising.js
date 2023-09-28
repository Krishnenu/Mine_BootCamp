let arr="{{{{{{[(hi)]}}}}}}";

function SearchingChallenge(str) { 
    let res=0;
    let resArr=[];
    let countsmallbraces=0;
    let countmiddlebraches=0;
    let countbigbraches=0;
    let count=0;  
    for(let i=0;i<str.length;i++){
      if(str[i]==="(" || str[i]===")" || str[i]==="[" || 
      str[i]==="]" || str[i]==="{" || str[i]==="}"){
        resArr.push(str[i]);
      }
    }
    for(let j=0;j<resArr.length;j++){
      if(resArr[j]==="("){
        countsmallbraces=countsmallbraces+1;
      }
       if(resArr[j]===")"){
        countsmallbraces=countsmallbraces-1;
        count=count+1;
      }
      if(resArr[j]==="["){
        countbigbraches=countbigbraches+1;
      }
       if(resArr[j]==="]"){
        countbigbraches=countbigbraches-1;
        count=count+1;
      }
      if(resArr[j]==="{"){
        countmiddlebraches=countmiddlebraches+1;
      }
       if(resArr[j]==="}"){
        countmiddlebraches=countmiddlebraches-1;
        count=count+1;
      }
    }  
    if((countsmallbraces===0)&&(countmiddlebraches===0)&&(countbigbraches===0)){
      res=1;
    }  
    return `${res} ${count}`;  
  }
     
  // keep this function call here 
  console.log(SearchingChallenge(arr));