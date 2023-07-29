// total sample space => mens + women + kids in colony.
// survey target => find out all advance cigarette smoker men.
//                  => find out all maghai pan consumer women.

// how to do the survey for smokers.
// step: 1 => find out all the mens in colony.
// step: 2 => find out all the mens who are cigarette smokers.
// step: 3 => find out all the smoker mens who smoke `Advance cigarette`.

// how to do the survey for pan consumers.
// step: 1 => find out all the women in colony.
// step: 2 => find out all the women who are consume pan.
// step: 3 => find out all the pan consumer women who eat `maghai pan`.

let sample_space = [
  {
    name: "Akshay",
    sex: "male",
    isSmoker: true,
    isPanEater: false,
    cigaretteBrand: "advance",
  },
  {
    name: "Laxman",
    sex: "male",
    isSmoker: false,
    isPanEater: true,
    panType: "banrasi",
  },
  {
    name: "sanjana",
    sex: "female",
    isSmoker: true,
    cigaretteBrand: "gold flake",
    isPanEater: true,
    panType: "maghai",
  },
  {
    name: "nandu",
    sex: "kid",
    isSmoker: true,
    cigaretteBrand: "double mint",
    isPanEater: true,
    panType: "kalkatta",
  },
  {
    name: "thakur saab",
    sex: "male",
    isSmoker: true,
    cigaretteBrand: "cigar",
    isPanEater: false,
  },
];

const finder = function (sex) {
  return function (smokers) {
    return function (brand) {
      if (brand) {
        return `There are ${sex} who ${smokers} brand ${brand}`;
      }
    };
  };
};


const male=finder("male");
const smokers=male("smokers");


// mens(sample_space);

sample_space.map((item) => {
  if(item.cigaretteBrand==="gold flake"){
    console.log(smokers(item.cigaretteBrand));
  }
});



// correct Solution

function getPeopleBasedOnSex (sampleSpace,sex){
    let getPeopleBasedOnSex = sampleSpace.filter((value)=>value.sex === sex);
    return function isPanEater(trueOrFalse){
        let panEater = getPeopleBasedOnSex.filter((value)=>value.isPanEater===trueOrFalse);
        return function panType(typeOfPan){
           let typeOfPanEat= panEater.filter((value)=>value.panType === typeOfPan );
           return typeOfPanEat;
        }
    }
}

console.log(getPeopleBasedOnSex(sample_space,"female")(true)("maghai"))