let rank = [9, 5, 8, 7, 1];

let matchFactor = 2;
let noOfPlayer = 5;
// {3,-1,1,5,4}
//{2,1,-1,5,4}

function matchRank(noOfPlayer, rank, matchFactor) {
  const res = new Array(noOfPlayer);
  res.map((e)=>{return e=-1});
  for (let i = 0; i < rank.length; i++) {
        res[i]=-1;
    for (let j = 0; j < i; j++) {
      if (rank[i] - matchFactor <= rank[j] &&
        rank[i] + matchFactor >= rank[j] && res[j]===-1
      ) {
        res[i] = j + 1;
        res[j] = i + 1;
        break;
      }
    }
  }

  return res;
}

console.log(matchRank(noOfPlayer, rank, matchFactor));
