// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes = [
	{
		quote: "Be Your self",
		source: "MI",
		citation: "On 2007 music album",
		year: 2007
	},
	{
		quote: "Dont Let your guards down",
		source: "Geemix",
		citation: "On an open fight with the master",
		year: 2016
	},
	{
		quote: "You can become a developer!",
		source: "DeeLaw",
		citation: "On his first programming tutorial",
		year: 2017
	}
];

function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

function getRandomQuote() {
	var numbersOfQuotes = quotes.length;
	var randomQuote = quotes[Math.floor(Math.random() * numbersOfQuotes)];
	return randomQuote;
}


function printQuote() {
	var printedQuotes = getRandomQuote();
	printedQuotes += print('<p class="quote">' + printedQuotes.quote + '</p><p class="source">' + printedQuotes.source + '<span class="citation">' + printedQuotes.citation + '</span><span class="year">' + printedQuotes.year + '</span></p>');
}

printQuote();
