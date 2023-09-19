// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<0){
        throw new TypeError("Argument cant be negative");
    }

    let i = 1;
    let r = 0;
    while(i<x/2){
        if(i*i == x){
            r=i;
            break;
        }else if(i*i>x){
            r=i-1;
            break;
        }else if(i*i<x){
            i++
        }  
    }
    return r;
};

var mySqrt2 = function(x) {
    if(x<0) throw new TypeError("Argument cant be negative");

    let i = 0;
    let sq = 0;
    while(sq<x){
        i++;
        sq = i*i; 
    }

    return sq==x ? i : i-1;
};

console.log(mySqrt2(100));