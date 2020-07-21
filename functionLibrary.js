function clawTotalUp(){
  claws += counterValue;
};

function clawsDisplayWriter(){
  document.getElementById('clawsDisplay').innerHTML = "Claws slammed = " + claws;
}

//getting drunk has never been so fun: sets the amount "timeOut" increases with each claw slammed
function getDrunkFunc(){
  timeOut = timeOut*gettingDrunk;
}

function timeOutDisplayWriter(){
  document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to slam a claw";
}

function disableButton(){
  document.getElementById('slamButton').disabled = true;
}

function activateButton(){
  document.getElementById('slamButton').disabled = false;
}

//this solves the delay issue I was having
//code below waite for a promise to be resolved before running the function calls
//now I just have to figure out how to make it happen multiple times...
function timeOutDelay(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('this log is from the timeOutDelay() function\n claws = ' + claws);
    }, timeOut);
});
}

async function slamClawButtonPress(){
  disableButton();
  for(i=0; i<counter; i++){
    const test = await timeOutDelay();
    console.log(test);
    clawTotalUp();
    console.log('log after clawTotalUp()\n claws = ' + claws);
    getDrunkFunc();
    console.log('log after getDrunkFunc()\n timeOut = ' + timeOut);
    timeOutDisplayWriter();
    console.log('log after timeOutDisplayWriter()')
    clawsDisplayWriter();
    console.log('log after clawsDisplayWriter()')
    }
  activateButton();
}

//this is the liver function, even though it doesnt 
setInterval(function(){ 
  if(timeOut > 1000){
    timeOut -= liverFunction;
    timeOutDisplayWriter();
    console.log('liver function fired here');
    console.log(liverFunction);
    console.log(liverSpeed);
  } 
}, liverSpeed);

//hides and shows the modifier buttons in the "upgradeArea" div
function showHideUpgradeArea() {
  var x = document.getElementById("upgradeArea");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//UPDATERS /////
//these functions update the display on each of the elements on the page constantly
//NOTE: THIS MAY CONSUME LOTS OF MEMORY
//I don't know yet how this works in the hardware really...

setInterval(function(){ 
  if(timeOut < 1000){
    timeOut = 1000;
    timeOutDisplayWriter();
  } 
}, 100);

setInterval(function(){ 
  if(counter < 1){
    counter = 1;
  } 
}, 100);

setInterval(function(){ 
  if(liverFunction < 0){
    liverFunction = 0;
  } 
}, 100);

setInterval(function(){ 
  if(liverSpeed < 0){
    liverSpeed = 0;
  } 
}, 100);

setInterval(function(){ 
  document.getElementById('slamButton').innerHTML = "Slam " + counter + " claws!" 
}, 100);

setInterval(function(){ 
  document.getElementById('clawsDisplay').innerHTML = "Claws slammed = " + claws;
}, 100);

setInterval(function(){ 
  document.getElementById('liverFunctionDisplay').innerHTML = (liverFunction/1000).toFixed(2);
}, 100);

setInterval(function(){ 
  document.getElementById('liverSpeedDisplay').innerHTML = (liverSpeed/1000).toFixed(2) + " seconds";
}, 100);

setInterval(function(){ 
  document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to Slam a Claw.";
}, 100);
 





/*Previous solution riddled with holes, problems, and mom's spaghetti
////////
function revealUpgrade1(){
  if(claws>=10){
      document.getElementById('upgrade1').removeAttribute('hidden');
      document.getElementById('upgrade1').removeAttribute('disabled');
  }
}

function revealUpgrade2(){
  if(claws>=20){
      document.getElementById('upgrade2').removeAttribute('hidden');
      document.getElementById('upgrade2').removeAttribute('disabled');
  }
}

function revealCountUp(){
  if(claws>=10000){
      document.getElementById('countUp').removeAttribute('hidden');
      document.getElementById('countUp').removeAttribute('disabled');
  }
}

function revealCountDown(){
  if(claws>=10000){
      document.getElementById('countDown').removeAttribute('hidden');
      document.getElementById('countDown').removeAttribute('disabled');
  }
}

function revealTimerUp(){
  if(claws>=10000){
      document.getElementById('timerUp').removeAttribute('hidden');
      document.getElementById('timerUp').removeAttribute('disabled');
  }
}

function revealTimerDown(){
  if(claws>=10000){
      document.getElementById('timerDown').removeAttribute('hidden');
      document.getElementById('timerDown').removeAttribute('disabled');
  }
}

function increaseTimer(){
  if(claws<=20){
      timeOut += drunkTime;
  } else if(claws>20 && claws<=50){
      timeOut += drunkTime * drunkTimeMultiplier;
  } else if(claws>50 && claws<=100){
      timeOut += drunkTime * drunkTimeMultiplier * 1.1;
  } else if(claws>100){
      timeOut += drunkTime * drunkTimeMultiplier * 1.2;
  }
}

function clawCountUp(){
  claws += counterValue;
}

function disableFalse(){
  document.getElementById('slamButton').disabled = false;
  console.log('disabled on "slamButton" set to false');
}

function disabledTrue(){
  document.getElementById('slamButton').disabled = true;
  console.log('disabled on "slamButton set to true');
}

// THE MAIN FUNCTION ///////
/////
function launchCount(){
  for (var i = 0; i < counter; i++) {
    setTimeout(function (i) {
      setTimeout(function (){
        console.log('claws = ' + claws)
        console.log("i = " + i);
        clawCountUp();
        console.log('clawCountUp fires, claws now = ' + claws);
        console.log('timeOut assigned to this iteration = ' + timeOut);
        document.getElementById('clawsDisplay').innerHTML = "Claws slammed = " + claws;
        document.getElementById('timeOutDisplay').innerHTML = "It takes you " + (timeOut/1000).toFixed(2) + " second(s) to Slam a Claw.";
        /* reveal more buttons by using the functions here /////
        revealUpgrade1();
        revealUpgrade2();
        revealCountUp();
        revealCountDown();
        revealTimerUp();
        revealTimerDown(); 
      }, timeOut*i);
      console.log('setTimeout function (i) sets iterations and stack')
    }, timeOut, (i));
  };
};

function slamClawButtonPress(){
  launchCount();
};*/