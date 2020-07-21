// INITIALIsE VARIABLES ///////////////////////////////////////////////////////////////////
//total number of claws drank
let claws = 0;

//the amount of claws you will slam when clicking the slam button
let counter = 1;

//a variable used to modify the "counter" var
let counterValue = 1;

//the amount of time the program will wait between slamming each claw
//NOTE: this variable is modified heavily by the program and will always be at least 1
let timeOut = 1000;

//variable used to modify "timeOut" var
let timeOutValue = 100;

//dunno what this does lol
let timeDelay = 10;

//used for first upgrade
let boost = 10;

//increases "timeOut" by this amount each time a claw is drank
let drunkTime = 100;

//dunno what this does either lol
let drunkTimeMultiplier = 1.1;

//exponentially increases "timeOut" with every claw slammed
let gettingDrunk = 1.1;

//the amount of time the liver function will wait before executing
let liverSpeed = 3000;

//sets the amount the liver will subtract from "timeOut"
let liverFunction = 100;

//used to adjust liver function
let liverFunctionValue = 10;

//used to adjust liver speed
let liverSpeedValue = 100;

/* SETTING UP HTML DOC CONTENT /////////////////////////////////////////////////////////////
//////
//////
//////
*/

function setup (){
//HTML CONTENT
//sets the HTML content of the count button
document.getElementById('slamButton').innerHTML = "Slam " + counter + " claw!";

//sets claws slammed display for the user
document.getElementById('clawsDisplay').innerHTML = "Claws slammed = " + claws;

//sets millisecond display for the user
document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to Slam a Claw.";

//sets display content for liverDisplay area above "liverFunctionDisplay" div
document.getElementById('liverFunctionExplained').innerHTML = "Your liver is processing claws." + "<br><br>" + "It will decrease your claw cooldown timer by ";

//sets display content for liverDisplay area after "liverFunctionDisplay" div
document.getElementById('liverFunctionExplainedCont').innerHTML = " every "


//sets HTML content of "upgrade" button"<br><br>"
document.getElementById('upgrade1').innerHTML = "Boost your Claw Slamming by " + boost + " per "

//sets HTML content of "Speed Up by " button
document.getElementById('timerUp').innerHTML = "Speed Up by " + timeOutValue + " milliseconds";

//sets HTML content of "Slow Down by " button
document.getElementById('timerDown').innerHTML = "Slow down by " + timeOutValue + " milliseconds";

//sets HTML content of "Increase Count by " button
document.getElementById('countUp').innerHTML = "Increase count by " + counterValue;

//sets HTML content of "Decrease Count by " button
document.getElementById('countDown').innerHTML = "Decrease count by " + counterValue;

//sets HTML content of "increaseLiverFunction " button
document.getElementById('increaseLiverFunction').innerHTML = "Increase liver function by " + liverFunctionValue + " milliseconds";

//sets HTML content of "decreaseLiverFunction " button
document.getElementById('decreaseLiverFunction').innerHTML = "Decrease liver function by " + liverFunctionValue + " milliseconds";

//sets HTML content of "decreaseLiverFunction " button
document.getElementById('decreaseLiverFunction').innerHTML = "Decrease liver function by " + liverFunctionValue + " milliseconds";
}

//sets HTML content of "speedUpLiver" button
document.getElementById('speedUpLiver').innerHTML = "Speed up liver by " + liverSpeedValue + " milliseconds";

//sets HTML content of "slowDownLiver" button
document.getElementById('slowDownLiver').innerHTML = "Slow down liver by " + liverSpeedValue + " milliseconds";

setup();