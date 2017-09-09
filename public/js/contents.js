"use strict";

(async function (ctx) {
	console.log("123");
	var x = await new Promise(function (resolve) {
		setTimeout(resolve, 500);
	});
	console.log(x);
})();