/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]



/*---------------------------- Variables (state) ----------------------------*/
let win, lose, tie, turn, winner
let board = []
/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('div')
const gameStatus = document.getElementById("message")
const resetBtn = document.getElementById("reset")


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){
	square.addEventListener("click", handleClick)
})

resetBtn.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
	// squareEls.className = "start"
	board = [null, null, null, null, null, null, null, null, null]
  turn = 1
	winner = null
	gameStatus.className = "blankMsg"
	render()
}

function render(){
	getWinner()
	board.forEach((square, index) => {
	if (square === 1) {
		squareEls[index].textContent = "X"
		squareEls[index].className = "X"
	}	else if (square === -1) {
		squareEls[index].textContent = "O"
		squareEls[index].className = "O"
	} else {
		squareEls[index].textContent = null
		squareEls[index].className = "blank"
	}})

	if(winner === null){
		gameStatus.textContent = `It's ${turn === 1 ? "Player 1's turn (X)" : "Player 2's turn (O)"}`
	}

	else {
		function playerName() {
			let output;
			if (turn === -1) {
				output = 'Player 1 (X)';
				gameStatus.className = "xMsg"
			} else if (turn === 1) {
				output = 'Player 2 (O)';
				gameStatus.className = "oMsg"
			}
			return output;
		}
		gameStatus.textContent = `${winner === 'T' ? "It's a tie!" : "Congrats! " + playerName() + " won!"}`
	}
}

function handleClick(evt){
	if(board[parseInt(evt.target.id.replace("sq",''))] !== null){
		return
	} else if(winner !== null){
		return
	} else {
		board[parseInt(evt.target.id.replace("sq",''))] = turn
	}
	turn *= -1
	render()
}

function getWinner() {
	winningCombos.forEach(combo => {
  	if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3){
			winner = turn
			confetti.start(2000)
		} else if(!board.includes(null)){
			winner = 'T'
		}
	})
}
