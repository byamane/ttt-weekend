/*-------------------------------- Constants --------------------------------*/
const winCondition = [ //step 4
	//Player 1
		[1,0,0,
		0,1,0,
		0,0,1],
		
		[0,0,1,
		0,1,0,
		1,0,0],
			
		[0,1,0,
		0,1,0,
		0,1,0],
			 
		[0,0,0,
		1,1,1,
		0,0,0],
		
	//Player Two
		[-1,0,0,
		0,-1,0,
		0,0,-1],
			
		[0,0,-1,
		0,-1,0,
		-1,0,0],
			
		[0,-1,0,
		0,-1,0,
		0,-1,0],
			
		[0,0,0,
		-1,-1,-1,
		0,0,0],
	]


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
			if (turn === 1) {
				output = 'Player 1';
			} else if (turn === -1) {
				output = 'Player 2';
			} else {
				output = 'Error in func playerName()';
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

// function getWinner(){
// 	winCondition.forEach(win){
// 		if (board.some(win){
// 			winner = turn
// 		})

// 	}
// }




	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).