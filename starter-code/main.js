console.log("JS file is connected to HTML! Woo!")

// Establishing array for the cards
var cards = ['queen', 'queen', 'king', 'king'];

//Declaring cardsInPlay
var cardsInPlay = [];

// setting the number of cards for java to create
var numOfCards = 4;

//creating function
var createBoard = function (){
for (var i = 0; i<cards.length; i++)
	var newCard = document.createElement('div');
	newCard.classname = 'card';
	newCard.setAttribute('data-card',cards[i]);
	newCard.addEventListener('click', isTwoCards);
	document.getElementbyId('game-board')[0].appendChild(newCard);
}

// creating function to determine if two cards have been picked
var isTwoCards = function (){
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; 
		} else {
			this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
		cardsInPlay = [];
		}
}


var isMatch = function (){
	if (cards[0] === cards[1]) {
	alert('You found a match!');
}
	else {
	alert('Sorry, try again.');
}
}
