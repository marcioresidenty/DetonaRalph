/**
 * 
 */

const state = {
	view: {
		squares: document.querySelectorAll(".square"),
		enemy: document.querySelector(".enemy"),
		timeLeft: document.querySelector("#time-left"),
		score: document.querySelector("#time-score"),
	},
	
	values: {
		gameVelocity: 1000,
		hitPosition: 0,
		result: 0,
		curretTime: 60,
	},
	
	actions: {
		timerId: setInterval(randomSquare, 1000),
		countDownTimerId: setInterval(countDown, 1000),
	}
	
};
// função para dar tempo ao jogo
function countDown() {
	state.values.curretTime--;
	state.view.timeLeft.textContent = state.values.curretTime;
	
		if(state.values.curretTime<= 0) {
			clearInterval(state.actions.countDownTimerId);
			clearInterval(state.actions.timerId);
			
			alert("Gamer Over! O seu resultado foi: " +state.values.result);
		}
}

function playSound() {
	let audio = new Audio("./audios/hit.m4a");
	audio.volume = 0.2;
	audio.play();
	
}


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
	state.values.hitPosition = randomSquare.id;
}




function addListenerHitBox() {
	state.view.squares.forEach((square) => {
		square.addEventListener("mousedown", () => {
			if (square.id == state.values.hitPosition){
		    	 state.values.result++;
			     state.view.score.textContent = state.values.result;
				 state.values.hitPosition = null;
				 playSound();
			}
		});
		
	});
}

function initialize() {
	
	
	addListenerHitBox();
	
	
}

initialize();