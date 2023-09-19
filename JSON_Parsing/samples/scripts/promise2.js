
// As a rule of thumb: When a function can return a promise, 
// ALWAYS return a promise. Otherwise you'll have this ugly code everywhere:



function job() {
    if (test) {
        return aNewPromise();
    } else {
        return 42;
    }
}

var result = job();

if (typeof job === 'object' && typeof job.then === 'function') {
    // ...
} else {
    // ...
}


// If you want to create an auto-resolved promise with a simple value, use 
// [Promise.resolve]
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)`:

function job() {
    if (test) {
        return aNewPromise();
    } else {
        return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
    }
}


// If you want to create an auto-rejected promise, use Promise.reject.

// Do not directly return primitives from a function if anywhere it reurns a promise If its really required Auto resolve or auto reject but return promise.

// Auto resolve ==========.  return Promise.resolve(primitive)
// Auto reject ============ return Promise.reject(primitive)