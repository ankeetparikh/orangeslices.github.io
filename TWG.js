var w1 = document.getElementById('w1');
var w2 = document.getElementById('second');
var w3 = document.getElementById('w3');



var Question = function(first, second, third)
{
	this.first = first;
	this.answer = second; //answer to the question
	this.third = third;
}

var questionList = new Array(); //Array of Questions
var used = new Array();

questionList.push(new Question('bengal','tiger', 'shark'));

var nextQuestion = function()
{
	var i = Math.floor(Math.random()*questionList.length);
	var question = questionList.splice(i,1);
	used.push(question);
	return question;
}

var reset = function()
{
	var next = nextQuestion();
	w1.innerHTML = next.first;
	w3.innerHTML = next.third;
}