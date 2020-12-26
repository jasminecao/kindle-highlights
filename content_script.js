var notes = [];

function getNotes() {
	let elements = document
		.getElementById('kp-notebook-annotations')
		.getElementsByTagName('span');
	for (let i = 0; i < elements.length; i++) {
		let span = elements[i];

		if (span.id === 'annotationHighlightHeader') {
			let page = 'page ' + span.innerHTML.split(';')[1];
			let data = {page: page};
			notes.push(data)
		}
		if (span.id === 'highlight') {
			let len = notes.length - 1;
			notes[len].text = span.innerHTML;
		}
	}
	alert(notes[3].text)
}

getNotes();
