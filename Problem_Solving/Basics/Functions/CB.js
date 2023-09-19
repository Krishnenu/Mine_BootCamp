/**
* Question: 1
*/

console.log("Hi Guys");

/**
* @param {string} str
* @param {Function} cb
*/
function fun(str, cb) {//value ,  cb
	console.log("inside fun");
	cb(str);
	console.log("After CB");
}


//invocation
fun("value", function(s) {
	console.log(s);
    //2nd invocation
	fun("innerValue", function(st) {
		console.log(st);
		console.log(s);
	});
	console.log("done");
});

console.log("End");

//Hi Guys
//inside fun
//Value
//inside fun
//

