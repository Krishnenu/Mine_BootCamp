// Initially Promise is in pending State till its Either Reject or Resolve:

//1. if Its Rejected the it will return the status as rejected and resoan for Rejection.
//2. If Its fullfilled the it will return status as fullfiled and value of promise.

// Ways to Create Promise:

// 1. Using New Promise Object:
// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Lalla");
//     },1000);
//   });

// we can access value by .then method once it got resolve and if its got rejected the we can get
// value by .catch method of promise.

// 2. Using static method fullfilled or Rejected.
// Promise.resolve("value");   --->    fullfiled ,value
// Promise.reject("Reason");   --->    rejected, reason

// Note:By Default promise is synchronous but when we call .then method then it goes to the queueMicrotask()
// and then it is asynchronous.

// A Promise has three states

// Pending: Before the event has happened, the promise is in the pending state.
// Fulfilled: Action related to the promise has succeeded.}
// Rejected: Action related to the promise has failed.}

// Settled: Fulfilled and Rejected state is called as Settled state..

const promiseArr = [];

for (let i = 0; i < 20; i++) {
  if (i == 9) {
    promiseArr.push(Promise.resolve(i));
  } else {
    promiseArr.push(Promise.resolve(i));
  }
}

// // Promise.allSettled() method which accepts an array of promises. It returns a new
// // promise that will resolve if all the promises in the array are settled, regardless
// // of whether the promises are resolved or rejected.
// // An example of Promise.allSettled() with one promise rejected:

const promiseAllSettled = (promiseList) => {
  return new Promise((resolve, reject) => {
    const resultList = [];
    promiseList.forEach((promise, index) => {
      promise.then((response) => {
        resultList.push(response);
      });
      promise.catch((reason) => {
        resultList.push(reason);
      });
      if (index === promiseList.length - 1) {
        resolve(resultList);
      }
    });
  });
};

// // The Promise.all() method executes many promises in parallel. It accepts an array of promises and returns
// // a single promise.

// // It will only resolve if all the promises passed have been resolved.
// // If any promise in an array of promises fails then it will reject.

const promiseAll = (promiseList) => {
  return new Promise((resolve) => {
    const resultList = [];
    promiseList.forEach((promise) => {
      promise.then((response) => {
        resultList.push(response);
      });
    });
    return resolve(resultList);
  });
};

//The Promise.race() method returns a promise that fulfills or rejects as soon as one of the
// promises in an iterable fulfills or rejects, with the value or reason from that promise

const promiseRace = (promiseList) => {
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.then((response) => {
        resolve(response);
      });
      promise.catch((reason) => {
        reject(`${index} is got rejected`);
      });
    });
  });
};

// Promise.Any() returns a Promise when any one of the promise is resolved.

const promiseAny = (promiseList) => {
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise) => {
      promise.then((response) => {
        resolve(response);
      });
      promise.catch((reason) => {});
    });
  });
};
