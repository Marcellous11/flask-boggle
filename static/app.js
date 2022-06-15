const submitBtn = document.querySelector('form');
console.log(submitBtn);

submitBtn.addEventListener('submit', async function(e) {
	e.preventDefault();
	word = document.querySelector('input').value;
	console.log(word);

	const res = await axios.get('/check-word');
	console.log(res);
	console.log(res.data.result);
});

// 	counter = 0;
// 	if (res.result == 'ok') {
// 		highscore.innerHTML = counter += 1;
// 	}

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
