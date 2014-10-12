var w1 = document.getElementById('w1');
var w2 = document.getElementById('w2');
var Question = function(first, second, third)
{
	this.first = first;
	this.answer = second; //answer to the question
	this.last = third;
}

var questionList = new Array(); //Array of Questions

var nextQuestion = function()
{
	return questionList[Math.floor(Math.random()*questionList.length)];
}