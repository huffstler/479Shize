
// used only for persistence purposes, not involved in game logic
export var User = function (name, score) {
    this.name = name;
    this.score = score;
}

// essentially the logical module of the game
export var Round = function (name, color) {
    this.name = name; // text-rendered on screen
    this.correctcolor = name; // the correct color 
    // this is where the below method will be called
    this.displaycolor = displayDetermine(color);
    this.match = ((this.correctcolor === this.displaycolor) ? true : false);
};


function displayDetermine(colorString) {
    var x = Math.floor(Math.random()*10);
    // only generate based on whether or not the random number is greater than 5
    if(x < 5) {
	var listOfColors = ['red', 'green', 'blue', 'purple','yellow', 'gray'];
	// now we must remove the above colorString from the below list of colors.
	for (var y in listOfColors) {
	    if (listOfColors[y] === colorString) {
		var omission = listOfColors.splice(y, 1);
	    }
	}
	// now the dom background as the color of x in listOfColors
	// dom.css.color = listOfColors[x];
	return listOfColors[x];
    }
    else {
	return colorString;
    }
};		

// run through an infinte evaluation loop
// cycles through a set of colors to run through the span of the game
// 1. each round is dependent on input that is received from the controller
// 2. evaluate the correctness of the input
// 3. if evaluation passes, continue iterating through the game
// 4. if not, exit the evaluation loop and store the player's name, and their score in a file.

// task1: model, controller
//   - controller needs to be defined, so that the model will have something to catch and act on
// task2: model
//   - simple, method that is contained in the round class to consume input
//   - should find a manner in which to ensure that the function can only be
//     after construction
//   - by defining it as a method, the controller can act on the object if necessary
// task3: model
//   - evaluation should occur in the model, and then pass the results to the view
// task4: view, controller, and model
//   - the game event should trigger after the user enters their name on the root page
//   - a form should appear, then the event-listener kicks off the input-evaluation loop
//     which should be generating rounds based off of the pre-defined color-list
//   - probably not worth having a reset option, we could probably just perform a call to the dom
//     to reset the current view pane 

// var round1 = new Round('green', 'green');
// console.log(round1.displaycolor);


