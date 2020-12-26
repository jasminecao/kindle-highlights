document.getElementById('kindle').addEventListener('click', () => {
	chrome.tabs.update({
		active: true,
		url:
			'https://read.amazon.com/notebook',
	});
});

function injectTheScript() {
	console.log('injected')
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// query the active tab, which will be only one tab
		//and inject the script in it
		chrome.tabs.executeScript(tabs[0].id, { file: 'content_script.js' });
	});
}

document.getElementById('export').addEventListener('click', injectTheScript);
