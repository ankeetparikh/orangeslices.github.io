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
var file = "TWGQuestions.csv";
var reader = new FileReader();

//game functions




var Set = function(ques)
{
	w1.innerHTML = ques.first;
	w3.innerHTML = ques.third;
}

var nextQuestion = function()
{
	w2.value ="";
	var i = Math.floor(Math.random()*questionList.length);
	var question = questionList.splice(i,1); //splice returns an array
	used.push(question[0]);
	if(questionList.length == 0)
	{
		questionList = used;
		used = new Array();
	}
	//console.log("Used:" + used.length)
	return question.pop(); //get last element of the array
}

var curr = nextQuestion();
Set(curr);

var Play = function()
{
	if(w2.value == curr.answer)
	{
		
		//console.log("QList:" +questionList.length);
		curr = nextQuestion();
		Set(curr);
	}
}

