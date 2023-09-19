let quoteByMoods = require('./mood.json');

/**
 * @param {any} quoteByMoods 
 * @returns {{auther: [string]}}
 */
let getQuoteByAutherName = (quoteByMoods) => {
  const map = new Map();
  for (let mood in quoteByMoods) {
    for (let quoteWithAuther of quoteByMoods[mood]) {
        const [quote, auther] = quoteWithAuther.split("-");
      if (!map.has(auther)) { //frequency counting logic.
        map.set(auther, new Array());
      }
      map.set(auther, map.get(auther).concat(quote));
    }
  }
  return map;
};

console.log(getQuoteByAutherName(quoteByMoods));

//Normal Codes

// let getQuoteByAutherName = (quoteByMoods) => {
//     const hm = {};
//     for (let mood in quoteByMoods) {
//       for (let quoteWithAuther of quoteByMoods[mood]) {
//           const [quote, auther] = quoteWithAuther.split("-");
//         if (!hm[auther]) { //frequency counting logic.
//           hm[auther] = [];
//         }
//         hm[auther] = hm[auther].concat(quote);
//       }
//     }
//     return hm;
//   };
  
//   console.log(getQuoteByAutherName(quoteByMoods));


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// console.log(foo1());
// console.log(foo2());