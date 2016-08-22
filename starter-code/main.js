console.log("JS file is connected to HTML! Woo!")

// Establishing values for our cards
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// setting the number of cards for java to create
var numOfCArds = 4;

//creating function
var createBoard = function (){
for (var i = 1, i < numOfCArds, i +=1)
	var newCard = document.createElement('div');
	newCard.classname = 'card';
	document.getElementbyId('game-board')[0].appendChild(newCard);
}






/* if (cardTwo === cardFour) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}

if (cardTwo === cardOne) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}

if (cardTwo === cardThree) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}

if (cardOne === cardThree) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}

if (cardOne === cardFour) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}

if (cardThree === cardFour) {
	alert('You found a match!');
}
	else {
		alert('Sorry, try again.');
}
*/