document.getElementById('kindle').addEventListener('click', () => {
	chrome.tabs.update({
		active: true,
		url:
			'https://read.amazon.com/notebook',
	});
});

function injectTheScript() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.executeScript(tabs[0].id, { file: 'content_script.js' });
	});
}

document.getElementById('export').addEventListener('click', injectTheScript);

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ?
					"from a content script:" + sender.tab.url :
					"from the extension");
		if (request.data) {
			document.getElementById('output').innerHTML = request.data;
		}
	}
  );