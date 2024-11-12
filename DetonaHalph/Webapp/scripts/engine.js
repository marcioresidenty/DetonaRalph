/**
 * 
 */

const state = {
	view: {
		squares: document.querySelectorAll(".square"),
		enemy: document.querySelector(".enemy"),
		timeLeft: document.querySelector("#time-left"),
		score: document.querySelector("#score"),
	},
	
	values: {
		timerId: null,
		gameVelocity: 1000
	},
};

// Limpa a classe inimiga de todos os quadrados 
function randomSquare() {
	state.view.squares.forEach((square) => {
		square.classList.remove("enemy");
	});
		
	// Sorteia um numero aleatorio de 1 a 9
	let randomNumber = Math.floor(Math.random() * 9 );
	// Pega o numero quadrado sorteado de 1 a 9
	let randomSquare = state.view.squares[randomNumber]; 
	randomSquare.classList.add("enemy");
}

function moveEnemy() {
	state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}

function addListenerHitBox() {
	state.view.squares.forEach((square) => {
		
	});
}

function initialize() {
	
	moveEnemy();
	
}

initialize();