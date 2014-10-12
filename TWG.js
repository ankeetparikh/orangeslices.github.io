window.onload = function(){
var w1 = document.getElementById("first");
var w2 = document.getElementById("second");
var w3 = document.getElementById("third");


var questionList = new Array(); //Array of Questions
var used = new Array();

var Question = function(first, second, third)
{
	this.first = first;
	this.answer = second; //answer to the question
	this.third = third;
}



var list = ["lamp,post,mark",
"artificial,intelligence,quotient",
"car,show,business",
"bengal,tiger,shark",
"space,ship,wreck",
"cow,bell,hop",
"going,bald,eagle",
"special,order,up",
"money,ball,pit",
"muscle,milk,shake",
"micro,soft,ware",
"water,bottle,neck",
"green,apple,computer",
"couch,potato,chip",
"pack,rat,race",
"optimus,prime,rib",
"subatomic,particle,physics", 
"movie ,marathon,runner",
"break ,time,management",
"deep,space,craft",
"motor,oil,painting",
"broken,heart,surgery",
"wheel of ,fortune,cookie",
"forest,fire,hazard",
"fire,alarm,clock",
"anger,management,position",
"assembly,line,dancing",
"snow,crab,cake",
"pilot,light,fixture",
"corn,oil,lamp",
"gene,pool,party",
"mountain,range,rover",
"snow,ball,room",
"lap,top,hat",
"ice,crystal,meth",
"flammable,substance,abuse",
"time,travel,agent",
"bed,room,service",
"iced,tea,party",
"force,field,commander",
"pink,eye,brow",
"dragon,fruit,punch",
"advertising,campaign,manager",
"basket,ball,boy",
"taco,bell,boy",
"taylor,swift,key",
"snap,back,pack",
"thigh,gap,year",
"smart,watch,tower",
"grid,iron,man",
"iron,man,made",
"space,bar,bell",
"key,board,game",
"sun,dial,tone",
"shower,head,ache",
"photo,copy,cat",
"power,point,blank",
"camera,man,hunt",
"beat,boxer,rebellion",
"ball,game,board",
"first,kiss,cam",
"black,ice,cream",
"flappy,bird,watching",
"soda,pop,corn",
"juice,box,tops",
"eye,glass,slippers",
"bird,bath,room",
"face,book,shelf",
"flat,stanley,cup",
"heavy,weight,watchers"];

for(var i =0; i < list.length; i++)
{
	var words = list[i].split(",");
	questionList.push(new Question(words[0],words[1],words[2]));
}

//game functions




var Set = function(ques)
{
	
	w1.innerHTML = ques.first;
	w3.innerHTML = ques.third;
}

var nextQuestion = function()
{
	w2.value = "";
	var i = Math.floor(Math.random()*questionList.length);
	var question = questionList.splice(i,1); //splice returns an array
	
	question = question[0];
	used.push(question);
	if(questionList.length == 0)
	{
		questionList = used;
		used = new Array();
	}
	
	return question; //get last element of the array
}

var curr = nextQuestion();
Set(curr);

var Play = function()
{	
	
	if(w2.value == curr.answer)
	{
		
		
		curr = nextQuestion();
		Set(curr);
		
	}
}
var button = document.getElementById("submission").addEventListener("click", Play, true);

};