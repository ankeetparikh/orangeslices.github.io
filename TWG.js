var w1 = document.getElementById('w1');
var w3 = document.getElementById('w3');

var Question = function(first, second, third)
{
	this.first = first;
	this.answer = second; //answer to the question
	this.third = third;
}

var questionList = new Array(); //Array of Questions

questionList.push(new Question('bengal','tiger', 'shark'));

var nextQuestion = function()
{
	return questionList[Math.floor(Math.random()*questionList.length)];
}

w1.innerHTML = questionList[0].first;
w3.innerHTML = questionList[0].third;
console.log(questionList[0].third);