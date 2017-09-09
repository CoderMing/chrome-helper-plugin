chrome.tabs.query({
    active: true,
    currentWindow: true
}, tabs => {
	let qrElement = $('#urlcode');
	qrElement.qrcode({
		width: qrElement.width(),
		height: qrElement.height(),
		text: tabs[0].url
	});
});