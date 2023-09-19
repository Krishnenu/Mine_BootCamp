const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  
   
  function fromPairs(pair){
    const result={};
    for(let p of pair){
        result[p[0]]=p[1];
    }
    return result;
  }

  console.log(fromPairs(pairs));