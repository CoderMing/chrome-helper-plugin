'use strict';

chrome.tabs.query({
	active: true,
	currentWindow: true
}, function (tabs) {
	var qrElement = $('#urlcode');
	qrElement.qrcode({
		width: qrElement.width(),
		height: qrElement.height(),
		text: tabs[0].url
	});
});