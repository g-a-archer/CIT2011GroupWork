var PlayersData=[];
var correctAns;
var usrCorrectAns = 0;
var usrIncorrectAns = 0;
var usrQuestionCount=0;
var seed1;
var seed2;
var QuestionCounter = 0;
var Questions=[seed1,seed2,correctAns];
var playerDataBuffer=[] ;
var femalegenderpercent=0;
var malegenderpercent=0;
var score;
var status;
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
    var age = calculateAge();

    var email = document.getElementById("email").value;
    var gender =  document.getElementById('gender').value;
    var notice = document.getElementById("notice")

    if(fName !="" && lName != "" && age != "" && email != "" && gender != ""){
        document.getElementById("notice").innerHTML = "";
 
 	//Passing data to task 13
  PlayersData = [fName,lName,age];
	console.log(PlayersData); 
	
  // Apart Task 3
    disableInput();
   }
    else{
        notice.innerHTML = "<span style= 'font-weight:bold; ;color: red;'>Please Complete all fields </span><hr>";
        document.getElementById("nameForm").scrollIntoView();
        return false;
    }
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
}

function disableModal(){ //Disabling modal and activating form and percentage button
    var endBtn = document.getElementById('modalBg');
    endBtn.classList.remove('activateModal');

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
}
//Task 13
function showall(){
    var allplayertxt = document.getElementById("showAllPlayers");
    var allplayerlb = document.getElementById("showAllPlayersLb");
var gender=document.getElementById("");
	allplayertxt.innerHTML = ""; 
    allplayerlb.removeAttribute("hidden");
    allplayertxt.removeAttribute("hidden");
   
  
    playerDataBuffer.push(PlayersData,Questiondata,status,score);
    console.log(playerDataBuffer);
	
    allplayertxt.innerHTML = ("\n"+playerDataBuffer);
 
	document.getElementById('scorediv').className += 'scoreactivate';
	
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
    console.log(Questions);
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
		status='Correct';
    }else{
        document.getElementById("answerResponse").innerHTML = "<span style='color: red'>Incorrect</span>";
        usrIncorrectAns+=1;
        PlayersData.splice((PlayersData.length)-1,1,usrIncorrectAns);
         console.log("Incorrect: " + usrIncorrectAns);
		 status='Incorrect';
    }
	//passing data top task 13
	 var useranswer= document.getElementById("usrAns").value;
	Questiondata=[num1+"*"+num2+"="+useranswer];  
    showall();
}
function findPercentageScore(){
    document.getElementById("showPercentage").innerHTML = "";
	usrQuestionCount=0;
    usrQuestionCount = usrCorrectAns+usrIncorrectAns;
    console.log(usrQuestionCount);
     usrPercentage=((usrCorrectAns)/usrQuestionCount)*100;
    console.log(usrQuestionCount); 
console.log(usrCorrectAns);

console.log(usrCorrectAns/usrQuestionCount);
	console.log(usrPercentage);
    var date=new Date();
    var showValue = `Total number of questions: ${usrQuestionCount}\nPercentage score: ${Math.floor(usrPercentage)}%\nCurrent date: ${date}`;
    
	console.log(showValue);

    document.getElementById("showPercentage").innerHTML = showValue;
 
 
  score= usrPercentage;
usrCorrectAns=0;
usrIncorrectAns=0;
	disableModal();
	showfreq();
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
	console.log(bar1);
	}
	else if(usrPercentage<=59){
	var bar2 = document.getElementById("bar2")
	let cnt2=0;
	cnt2++;
    bar2.innerHTML = (cnt2+" Player");
	console.log(bar2);
	}
	else if(usrPercentage<=69){
		var bar3 = document.getElementById("bar3");
	let cnt3=0;
	cnt3++;
    bar3.innerHTML = (cnt3+" Player");
	console.log(bar3);
	}
	else if(usrPercentage<=79){
		var bar4 = document.getElementById("bar4");
    
	let cnt4=0;
	cnt4++;
    bar4.innerHTML = (cnt4+" Player");
	console.log(bar4);
	}
	else if(usrPercentage<=89){
		var bar5 = document.getElementById("bar5");
    
	let cnt5=0;
	cnt5++;
    bar5.innerHTML = (cnt5+" Player");
	console.log(bar5);
	}
	else if(usrPercentage<=99){
	var bar6 = document.getElementById("bar6");
	let cnt6=0;
	cnt6++;
    bar6.innerHTML = (cnt6+" Player");
	console.log(bar6);
	}
	else if(usrPercentage==100){
		var bar7 = document.getElementById("bar7");
	let cnt7=0;
	cnt7++;
    bar7.innerHTML = (cnt7+" Player");
	console.log(bar7);
	}
}
