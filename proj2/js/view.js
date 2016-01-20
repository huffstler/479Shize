import * as cg from "colorGenerator.js";


// when the user first naviagates to the page, hide everything but a form
// - accomplish this with CSS selectors and manipulation of the DOM
// when they enter information into the form it disappears and the game begins

// restrict input to string elements
// initializing game, should only be called once.
// creates a game state
var begin = function(name) {
    var name = prompt('Please enter your name');
    if (name != null && name != "") {
	// the name should be retrieved from the controller
	var player = new User(name, 0);
	var listofrounds = []; // used for when we repeat the below list
	var listOfColors = ['red', 'green', 'blue', 'purple','yellow', 'gray'];
	for (var i in listOfColors) {
	    // generate a new round for each of the colors
	    // for time's sake, lets start with just 6 elements tonight
	    var individualround = Round(listOfColors[i], listOfColors[i]);
	    // added for debug, to help us cheat :)
	    console.log(individualround);
	    listofrounds.push(individualround); // scaling stub, not being used atm
	    // retrieves user input
	    var input;
	    document.addEventListener('keydown', function(event) {
		if(event.keyCode == 89) {
		    console.log('yes!');
		    input = true;
		} if (event.keyCode == 78) {
		    console.log('no!');
		    input = false;
		}
	    });
	    if (input == individualround.match) {
		player.score++;
	    } else {
		console.log(player);
		break;
		// write player and score to database
		// exit the loop
	    }
	}
    }
};






