var PlayersData=[];
var correctAns;
var usrCorrectAns = 0;
var usrIncorrectAns = 0;
var usrQuestionCount=0;
var seed1;
var seed2;
var QuestionCounter = 0;
var Questions=[];
var playerDataBuffer=[] ;
var femalegenderpercent=0;
var malegenderpercent=0;
var score;
var statuss;
var Questiondata;
var num1;
var num2;
var gendertotal=0;
var femalecount=0;
var malecount=0;
 var usrPercentage=0;
// Task 2
function Register(){
    //Validate Inputs ar
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
	console.log( document.getElementById("lName").value+"Last name from register");
    var age = calculateAge();
    var email = document.getElementById("email").value;
    var gender =  document.getElementById('gender').value;
    var notice = document.getElementById("notice");

    if(fName !="" && lName != "" && age != "" && email != "" && gender != ""){
        document.getElementById("notice").innerHTML = "";
   }
    else{
        notice.innerHTML = "<span style= 'font-weight:bold; ;color: red;'>Please Complete all fields </span><hr>";
        document.getElementById("nameForm").scrollIntoView();
        return false;
    }
	
//Passing data to task 13
  PlayersData = [fName,lName,age];
	console.log(PlayersData+"firstname last name age"); 
	
	//Apart of task 15
	gendertotal=gendertotal+1;
	if(gender=='female'){
		femalecount=femalecount+1;
	}
	else if(gender=='male'){
		malecount=malecount=1;
	}
   femalegenderpercent=(femalecount/gendertotal)*100;
   malegenderpercent=(malecount/gendertotal)*100;

 // Apart Task 3
    disableInput();
}

function disableModal(){ //Disabling modal and activating form and percentage button
    var endBtn = document.getElementById('modalBg');
    endBtn.classList.remove('activateModal');

    document.getElementById('modalBgChart').classList.remove('activateModal');
}
function diasble2(){
    var input =document.getElementsByClassName('ffrom');
    var startButton = document.getElementById("startBtn");
    var registrationForm = document.forms["registrationForm"];
    var percentage = document.getElementById("showPercentage");
    var percentagelb = document.getElementById("showPercentageLb");

    registrationForm.reset();
    input.disabled = false;

    for(i=0;i<input.length;i++){
        input[i].disabled=false;
    }   
    startButton.disabled = true;
    percentage.removeAttribute("hidden");
    percentagelb.removeAttribute("hidden");

    disableModal();
}
//Task 13
function showall(){
	console.log(document.getElementById("lName").value+"last name getElementById");
	console.log(PlayersData[1]+"last name array  print");
    var allplayertxt = document.getElementById("showAllPlayers");
    var allplayerlb = document.getElementById("showAllPlayersLb");
var gender=document.getElementById("");
	allplayertxt.innerHTML = ""; 
    allplayerlb.removeAttribute("hidden");
    allplayertxt.removeAttribute("hidden");

    playerDataBuffer.push(PlayersData,Questiondata,sstatus,score);
    console.log(playerDataBuffer+"Buffer data");

    allplayertxt.innerHTML = (playerDataBuffer+"\n \n");

	//document.getElementById('scorediv').className += 'scoreactivate';

	document.getElementById('showcharts').className += 'genderactivate';
	document.getElementsByClassName("addBreak").innerHTML = "<br>";
var chart=document.getElementById("showcharts");
	chart.removeAttribute("hidden");

}

// Apart of Task 2
function calculateAge(){
    var dob = document.getElementById('dob').value;
    var birthDate = new Date(dob);
    var currentDate = new Date();
    var age = (currentDate.getFullYear() - birthDate.getFullYear());
    return age;
}

// Apart Task 3
function disableInput(){
    var input =document.getElementsByClassName('ffrom');
    var startButton = document.getElementById("startBtn");

    input.disabled = true;

    for(i=0;i<input.length;i++){
        input[i].disabled=true;
    }   
    startButton.disabled = false;
}

//Task 4
function PlayGame() {
    document.getElementById("answerResponse").innerHtml = "";
    document.getElementById('modalBg').className += ' activateModal';

    var seed1 = Math.floor(Math.random()*9)+1;
    var seed2 = Math.floor(Math.random()*5)+1;
    correctAns = seed1 * seed2;
    Questions.push(seed1);
    Questions.push(seed2);
    Questions.push(correctAns);
    console.log(Questions+"User Question");
    QuestionCounter++;
   num1=seed1;
   num2=seed2;
    document.getElementById("numvalue1").value = seed1;
    document.getElementById("numvalue2").value = seed2;
    document.getElementById("usrAns").value  = "";

}
//TASK 6	
function checkAnswer(){
    var usrAns = document.getElementById('usrAns').value;
    document.getElementById("answerResponse").innerHTML = "";
                //  0      1    2    3     4       5             6
    //PlayersData = [fName,lName,age,gender,email,usrCorrectAns,usrIncorrectAns];
    if(usrAns == correctAns){
        document.getElementById("answerResponse").innerHTML = "<span style='color: green'>CORRECT!</span>";
        usrCorrectAns+=1;
        PlayersData.splice((PlayersData.length)-2,1,usrCorrectAns);
        console.log("Correct: "+usrCorrectAns);
		//passing data to task 13
		sstatus='Correct';
    }else{
        document.getElementById("answerResponse").innerHTML = "<span style='color: red'>Incorrect</span>";
        usrIncorrectAns+=1;
        PlayersData.splice((PlayersData.length)-1,1,usrIncorrectAns);
         console.log("Incorrect: " + usrIncorrectAns);
		 sstatus='Incorrect';
    }
	//passing data top task 13
	 var useranswer= document.getElementById("usrAns").value;
	Questiondata=[num1+"*"+num2+"="+useranswer];  
    showall();
}
function findPercentageScore(){
     document.getElementById('modalBgChart').className += ' activateModalclass';
    document.getElementById("showPercentage").innerHTML = "";
	usrQuestionCount=0;
    usrQuestionCount = usrCorrectAns+usrIncorrectAns;
     usrPercentage=((usrCorrectAns)/usrQuestionCount)*100;
    console.log(usrQuestionCount+"Questioncount"); 
console.log(usrCorrectAns+"User correct answer");

console.log(usrCorrectAns/usrQuestionCount+"usrCorrectAns/usrQuestionCount");
	console.log(usrPercentage+"Userpercentage");
    var date=new Date();
    var showValue = `Total number of questions: ${usrQuestionCount}\nPercentage score: ${Math.floor(usrPercentage)}%\nCurrent date: ${date}`;

	console.log(showValue+"show value");

    document.getElementById("showPercentage").innerHTML = showValue;


  score= usrPercentage;
  console.log(score+"score-percent");
usrCorrectAns=0;
usrIncorrectAns=0;
	disableModal();
}



function showfreq(){
	var fbar=femalegenderpercent;
	var mbar=malegenderpercent;
	document.getElementById("malebar").width=mbar;
	document.getElementById("femalebar").width=fbar;

	if(usrPercentage<50)
	{
	var bar1 = document.getElementById("bar1");
	let cnt1=0;
	cnt1++;
    bar1.innerHTML = (cnt1+" Player");
	console.log(bar1+"chart bar 1");
	}
	else if(usrPercentage<=59){
	var bar2 = document.getElementById("bar2")
	let cnt2=0;
	cnt2++;
    bar2.innerHTML = (cnt2+" Player");
	console.log(bar2+"chart bar 2");
	}
	else if(usrPercentage<=69){
		var bar3 = document.getElementById("bar3");
	let cnt3=0;
	cnt3++;
    bar3.innerHTML = (cnt3+" Player");
	console.log(bar3+"chart bar 3");
	}
	else if(usrPercentage<=79){
		var bar4 = document.getElementById("bar4");

	let cnt4=0;
	cnt4++;
    bar4.innerHTML = (cnt4+" Player");
	console.log(bar4+"chart bar 4");
	}
	else if(usrPercentage<=89){
		var bar5 = document.getElementById("bar5");

	let cnt5=0;
	cnt5++;
    bar5.innerHTML = (cnt5+" Player");
	console.log(bar5+"chart bar 5");
	}
	else if(usrPercentage<=99){
	var bar6 = document.getElementById("bar6");
	let cnt6=0;
	cnt6++;
    bar6.innerHTML = (cnt6+" Player");
	console.log(bar6+"chart bar 6");
	}
	else if(usrPercentage==100){
		var bar7 = document.getElementById("bar7");
	let cnt7=0;
	cnt7++;
    bar7.innerHTML = (cnt7+" Player");
	console.log(bar7+"chart bar 7");
	}
}
