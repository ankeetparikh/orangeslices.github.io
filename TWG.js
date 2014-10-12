var w1 = document.getElementById('w1');
var w2 = document.getElementById('second');
var w3 = document.getElementById('w3');
var questionList = new Array(); //Array of Questions
var used = new Array();

var Question = function(first, second, third)
{
	this.first = first;
	this.answer = second; //answer to the question
	this.third = third;
}


//read in the csv file
questionList.push(new Question('bengal','tiger', 'shark'));

//game functions




var Set = function(ques)
{
	w1.innerHTML = ques.first;
	w3.innerHTML = ques.third;
}

var nextQuestion = function()
{
	var i = Math.floor(Math.random()*questionList.length);
	var question = questionList.splice(i,1);
	used.push(question);
	return question;
}

var curr = nextQuestion();
console.log(curr);
Set(curr);

var Play = function()
{
	if(w2.value == curr.answer)
	{
		curr = nextQuestion();
		Set(curr);
	}
}

