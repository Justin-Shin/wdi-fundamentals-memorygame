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
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

function setBoard() {
    //set board up
    shuffleCards(cards);
	for (i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

function isTwoCards() {
	// add card to array of cards in play
	// 'this' hasn't been covered in this pre-work, but
	// for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
	this.innerHTML = "<img class='cardImg' src='images/" + this.getAttribute('data-card') + ".jpg'>"


	// if you have two cards in play, check for a match
	if (cardsInPlay.length === 2) {

    	// pass the cardsInPlay as an argument to the isMatch function
    	isMatch(cardsInPlay);

    	// clear cards in play array for your next try
    	cardsInPlay = [];

	}

}

function isMatch(cardsPicked) {
	if (cardsPicked[0]==cardsPicked[1]) {
		alert('You found a match!');
		shuffleCards(cards);
	} else {
		alert('Sorry, try again :(')
	}
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = "";
	}
}

function shuffleCards(z) {
	//Attempt at creating a shuffle from online source
	var i,j,x;
	for (i=z.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = z[i - 1];
        z[i - 1] = z[j];
        z[j] = x;
    }
}

setBoard();