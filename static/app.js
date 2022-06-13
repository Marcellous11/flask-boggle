const submitBtn = document.querySelector('#input-form button');
console.log(submitBtn);

submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	input = document.querySelector('input');
	input.value = '';
});

// async function getResponseStatus() {
// 	res = await axios.get('http://127.0.0.1:5000/');
// 	console.log(res);
// }

// getResponseStatus();

// class BoggleGame {
// 	constructor(boardId, secs = 60) {
// 		this.secs = secs;
// 		this.showTimer();

// 		this.score = 0;
// 		this.words = new Set();
// 		this.board = $('#' + boardId);
// 	}
// }
