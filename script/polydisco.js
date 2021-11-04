var PlayersData;
var correctAns;
var seed1;
var seed2;

// Task 2
function Register(){
    //Validate Inputs ar
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    age = calculateAge();
    email = document.getElementById("email").value;
    gender =  document.getElementById('gender').value;

    PlayersData = [fName,lName,age,gender,email,];
    // Apart Task 3
    disableInput();

}

function disableModal(){ //Disabling modal and activating form and percentage button
    var endBtn = document.getElementById('modalBg');
    endBtn.classList.remove('activateModal');

    var input =document.getElementsByClassName('ffrom');
    var startButton = document.getElementById("startBtn");
    var registrationForm = document.forms["registrationForm"];
    registrationForm.reset();

    input.disabled = false;

    for(i=0;i<input.length;i++){
        input[i].disabled=false;
    }   
    startButton.disabled = true;
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
        
    document.getElementById("numvalue1").value = seed1;
    document.getElementById("numvalue2").value = seed2;
    document.getElementById("usrAns").value  = "";
}
//TASK 6	
function checkAnswer(){
    var usrAns = document.getElementById('usrAns').value;
    var check=true;
    console.log(usrAns);
    console.log(correctAns);
	
    PlayersData.push(seed1 * seed2, "User's answer: "+usrAns,);	
    if(usrAns == correctAns){
       document.getElementById("answerResponse").innerHTML = "Your answer is CORRECT!";
	return true; 
	if(check){
		PlayersData.push("Answer is correct,");
	}
    }else{
        document.getElementById("answerResponse").innerHTML = "Your answer is incorrect. Try again.";
		return false;  
		if(check){ 
			PlayersData.push("Answer is incorrect,");
		}
    }	
}
