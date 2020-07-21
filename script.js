// EVENT LISTENERS ///////////////////////////////////////////////////////////////////////


function eventListeners(){
// MAIN EVENT LISTENER
document.getElementById('slamButton').addEventListener('click', function(){
    console.log("Claws Slammed on Count Button Click = " + claws);
    slamClawButtonPress();
    console.log('log after slamClawButtonPress()\n claws = ' + claws);
});

//allows user to increase milliseconds waited by a timeOutValue variable
document.getElementById('timerDown').addEventListener('click', function(){
    timeOut += timeOutValue;
    document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to slam a claw"
});

//allows user to decrease milliseconds waited by a timeOutValue variable
document.getElementById('timerUp').addEventListener('click', function(){
    timeOut -= timeOutValue;
    document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to slam a claw"
});

//allows user to increase count by countValue variable
document.getElementById('countUp').addEventListener('click', function(){
    counter += counterValue;
    document.getElementById('slamButton').innerHTML = "Slam " + counter + " claws!";
});

//allows user to decrease count by countValue variable
document.getElementById('countDown').addEventListener('click', function(){
    counter -= counterValue;
    document.getElementById('slamButton').innerHTML = "Slam " + counter + " claws!";
});

document.getElementById('upgrade1').addEventListener('click', function(){
    document.getElementById('upgrade1').disabled = true;
    counter +=10;
    document.getElementById('slamButton').innerHTML = "Slam " + counter + " claws!";
    console.log(counter);
});
}

//allows user to increase amount liver function takes off timeOut variable
document.getElementById('increaseLiverFunction').addEventListener('click', function(){
    liverFunction += liverFunctionValue;
});

//allows user to decrease amount liver function takes off timeOut variable
document.getElementById('decreaseLiverFunction').addEventListener('click', function(){
    liverFunction -= liverFunctionValue;
});

//allows user to decrease milliseconds waited by liver function
document.getElementById('speedUpLiver').addEventListener('click', function(){
    liverSpeed -= liverSpeedValue;
});

//allows user to increase milliseconds waited by a liver function
document.getElementById('slowDownLiver').addEventListener('click', function(){
    liverSpeed += liverSpeedValue;
});

eventListeners();
