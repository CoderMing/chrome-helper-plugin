(async ctx => {
	console.log("123");
	let x = await new Promise(resolve => {
		setTimeout(resolve, 500);
	})
	console.log(x);
})()
