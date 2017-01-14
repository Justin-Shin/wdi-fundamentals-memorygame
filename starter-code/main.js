console.log("JS file is connected to HTML! Woo!")
/*
var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";


if (cardOne == cardFour) {
	alert('You found a match!');
} else if (cardOne !== cardFour) {
	alert('Sorry, try again');
} 
*/

var cards = ['king','king','queen','queen']

var gameBoard = document.getElementById('game-board');

function setBoard() {
	/* Attempt at creating a shuffle from online source
	var i,j,x;
	for (i=cards.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = cards[i - 1];
        cards[i - 1] = cards[j];
        cards[j] = x;
    }
    */

    //set board up
	for (i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
}