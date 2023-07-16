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
