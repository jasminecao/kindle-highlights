var notes = [];

function getNotes() {
	let elements = document
		.getElementById('kp-notebook-annotations')
		.getElementsByTagName('span');
	let output = ''
	for (let i = 0; i < elements.length; i++) {
		let span = elements[i];

		if (span.id === 'annotationHighlightHeader') {
			let page = '<p>(p. ' + span.innerHTML.split(';')[1] + ') ';
			let data = {page: page};
			notes.push(data)
			output = output.concat(page);
		}
		if (span.id === 'highlight') {
			let len = notes.length - 1;
			notes[len].text = span.innerHTML;
			output = output.concat(span.innerHTML + '</p>');
		}
	}
	chrome.runtime.sendMessage({data: output}, function(response) {
		console.log(response);
	});
}

getNotes();