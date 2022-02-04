/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]



/*---------------------------- Variables (state) ----------------------------*/
let win, lose, tie, turn, winner
let board = []
/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('div')
const gameStatus = document.getElementById("message")


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){
	square.addEventListener("click", handleClick)
})

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
	board = [null, null, null, null, null, null, null, null, null]
  turn = 1
	winner = null
	render()
}

function render(){
	getWinner()
	board.forEach((square, index) => {
	if (square === 1) {
		squareEls[index].textContent = "X"
	}	else if (square === -1) {
		squareEls[index].textContent = "O"
	} else {
		squareEls[index].textContent = null
	}})
// 3.3.2) Render a message reflecting the currrent game state:
  // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	if(winner === null){
		gameStatus.textContent = `It's ${turn === 1 ? "Player 1's turn" : "Player 2's turn"}`
	}
// 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
  // 3.3.2.3) Otherwise, render a congratulatory message to which player has won. 
	else {
		function playerName() {
			let output;
			if (turn === -1) {
				output = 'Player 1';
			} else if (turn === 1) {
				output = 'Player 2';
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
		} else if(!board.includes(null)){
			winner = 'T'
		}
	})
}

// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).