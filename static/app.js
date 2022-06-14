const submitBtn = document.querySelector('#input-form button');
console.log(submitBtn);

submitBtn.addEventListener('click', function(e) {
	// e.preventDefault();
	input = document.querySelector('input');
	// input.value = '';
	// getResponseStatus();
});

async function getResponseStatus() {
	res = await axios.get('/check-word');
	console.log(res);
	let highscore = document.querySelector('p b');

	counter = 0;
	if (res.result == 'ok') {
		highscore.innerHTML = counter += 1;
	}
}

console.log('hey');

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
