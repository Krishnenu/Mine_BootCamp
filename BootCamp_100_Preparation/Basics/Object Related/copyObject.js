let originalObj = {
    a: "Hi",
    22: 100.55,
    10: true,
    d: null,
    e: 0xA2,
    f: undefined
}

/**
* @returns {Object}
*/
function getCopyOfOriginalObj(originalObj) {
    let copy={};
    for(let key in originalObj){
        copy[key]=originalObj[key];
    }
    return copy;
}

console.log(getCopyOfOriginalObj(originalObj));

