// HackerRank Problem.

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  

calculate the absolute diference of sum of left Diagonal - sum of Right Diagonal
*/


let array = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

function diagonalDifference(arr) {
  let res = 0;
  let leftDiaSum = 0;
  let rightDiaSum = 0;
  let len=arr.length-1;
  for (let i = 0; i < arr.length; i++) {
        leftDiaSum = leftDiaSum + arr[i][i];
  }
  for (let i = 0; i < arr.length; i++) {
      rightDiaSum = rightDiaSum + arr[i][len-i];
  }
  return Math.abs(leftDiaSum - rightDiaSum);
}

console.log(diagonalDifference(array));
function extraLongFactorials(n) {
    let res=1;
    for(let i=n;i>0;i--){
        res=BigInt(res)*BigInt(i);
    }
    return BigInt(res).toString();
 }

 console.log(extraLongFactorials(25));