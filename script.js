const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = [
	'Another',
	'Oooops',
	'More',
	'Next',
	'Continue',
	'Keep going',
	'Click me',
	'A new one',
	'Try Again',
	'So Close',
	'Well Done',
];

const url = 'https://jsonplaceholder.typicode.com/';
const urlToFetch = url + 'todos';

const getJson = (param) => {
	fetch(urlToFetch)
		.then((response) => response.json())
		.then((data) => renderResponse(data));
};

const sendJson = (endpoint) => {
	const url = 'https://jsonplaceholder.typicode.com/';
	const urlToFetch = url + endpoint;
	const data = {
		method: 'POST',
		headers: {
			'Content-type': 'application.json/',
		},
		body: JSON.stringify({
			title: 'Naber?',
			completed: false,
			name: 'Mustafa',
		}),
	};
	fetch(urlToFetch, data)
		.then((response) => response.json())
		.then((data) => console.log(data));
};

sendJson('users');

// DO NOT CHANGE BELOW THIS LINE
const formatJson = (resJson) => {
	resJson = JSON.stringify(resJson);
	//console.log(resJson);
	let counter = 0;
	return resJson
		.split('')
		.map((char) => {
			switch (char) {
				case ',':
					return `,\n${' '.repeat(counter * 2)}`;
				case '{':
					counter += 1;
					return `{\n${' '.repeat(counter * 2)}`;
				case '}':
					counter -= 1;
					return `\n${' '.repeat(counter * 2)}}`;
				default:
					return char;
			}
		})
		.join('');
};

const renderResponse = (jsonResponse) => {
	const jsonSelection = Math.floor(Math.random() * 10);
	//sendJson();
	jsonButton.innerHTML = `${collection[jsonSelection]}!`;
	display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

jsonButton.addEventListener('click', getJson);
