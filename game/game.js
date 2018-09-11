alert('Hello');

var ans = prompt('Shall we play a game?');
var answer = ans.toLowerCase();


if (answer === 'yes') {

	alert('Then lest go!');
	var name = prompt('What is youre name');
	var gen = prompt(name + " you are male ? or female ?");
	var gender = gen.toLowerCase();
	
	if (gender === 'male') {

		alert('Oh you are a good lookin fellow');


	} else if (gender === 'female') {
		alert('Ah you are, a beautifle woman');
		
	} else {
		alert('What the hell is that?');
		
	}
		
} else {
	alert('Ok, then nevermind');
}


