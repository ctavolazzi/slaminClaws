// GAME OBJECT
const GAME = {
  game_over: false, //used to trigger clearing the automatic intervals on the COMPUTER object
  timelimit: 10000,

  ///// TEAM OBJECTS
  ////
  ///
  //
  USER: {
    name: "Crispy", 
    points: 0,
    clawTracker: [],
    drinks: () => {
      return GAME.USER.clawTracker.length;
    },
    interval: 0,
    timer: 5000,


  ///////METHODS////////

    //use to reset the object method currently being called (thank you xandercoded on StackOverflow https://stackoverflow.com/questions/9252839/simplest-way-to-remove-all-the-styles-in-a-page)
    reset() {
      this.timer = 5000;
      this.interval = 0;
    },
  
    //used to completely reset the object method being called after first clearing its interval (thank you xandercoded on StackOverflow https://stackoverflow.com/questions/9252839/simplest-way-to-remove-all-the-styles-in-a-page)
    clear() {
      clearInterval(this.interval);
      this.reset();
    },

    getDrunk() {
      console.log(GAME.USER.name + ' gets a little drunker...')
      /*
        - There's gotta be a better way to do this part below
      < < <
>     if (this.drinks > 30) {  
        //removeStyles(document.body); //not sure how to do this yet
      } else if (this.drinks() > 25) {
        console.log(GAME.USER.name + ' IS GETTING DRUNK!!!')
        document.getElementById("userSlamButton").style.position = "fixed";
        document.getElementById("userSlamButton").style.botton = "0";
        document.getElementById("userSlamButton").style.left = "0";
        document.getElementById("userSlamButton").style.width = "300px";
        document.getElementById("userSlamButton").style.height= "100px";
        document.getElementById("userSlamButton").style.border = "4px solid purple";
      } else if (this.drinks() > 15) {
        document.getElementById("userSlamButton").style.position = "fixed";
        document.getElementById("userSlamButton").style.top = "0";
        document.getElementById("userSlamButton").style.left = "0";
        document.getElementById("userSlamButton").style.width = "80px";
        document.getElementById("userSlamButton").style.height= "300px";
        document.getElementById("userSlamButton").style.border = "1px solid red";
      }
      */ //< < < < remove this to being this section back

    /* CHANGE LOG
      - 10/16/20
        added this method to begin implementing the various
        negative effects that will make it more difficult
        to slam claws the more "drunk" the players become
    */
    },
   

    soberUp() {
      GAME.CLAW_DATA.claw_point_multiplier = 2
      GAME.CLAW_DATA.boosted = true;
      setTimeout(function () { 
         GAME.CLAW_DATA.claw_point_multiplier = 1
         GAME.CLAW_DATA.boosted = false;
      }, this.timer);

      console.log("~ ~ ~" + GAME.USER.name + ' SOBERS UP')
    /* CHANGE LOG
      - 10/16/20
        Added a temporary boost inside the setTimeout function
    */
    },


  ////// SLAM METHOD //////

    slam (claw = new Claw()) {
      // check for boosts
      if (claw.boosted === true) {
        //do something
      }
      console.log(claw)

    /*  this first part is just a proof of concept
         I wanted to show that a method can be changed depending
         on certain events being triggered in the game.
    */

    if ((GAME.USER.points - GAME.COMPUTER.points) > 50) {   //  if (event in the game)
      GAME.COMPUTER.soberUp();      //  change (some part of the "slam()" function or COMPUTER object)
    } else if ((GAME.COMPUTER.points - GAME.USER.points) > 50 ) {
      GAME.USER.soberUp();
    }
 
    //  these are the actual mechanics of the USER "slam()"" function
      GAME.USER.getDrunk();
      GAME.USER.points += (claw.points * GAME.CLAW_DATA.claw_point_multiplier);
      GAME.USER.clawTracker.push(claw);
      document.getElementById("messageBox").innerHTML = "USER Slamms a " + claw.flavor + " Claw for " + claw.points + " Points!"
    },

    gameOver() {
      console.log('GameOver')
    }

    /*
    I don't understand getters and setters yet

    get points() {
      return this.points;
    },
    set newPoints(num) {
      this.points = num; 
    },
    */

  /* USER OBJECT CHANGE LOG 
  - 10/16/20
    I wanted to track more than just the flavor of the randomly generated
    Claw objects, so I updated the "slam" method on both objects to push
    the entire claw to the claw array stored in each team object.
    Also renamed "flavorTracker" to "clawTracker" because it makes more sense
  */
  },
  


  COMPUTER: {
    name: "BEETLE-B0rp", 
    points: 0,
    clawTracker: [],
    drinks: () => {
      return GAME.COMPUTER.clawTracker.length;
    },
    timer: 150, //default value is 150 for this version
    interval: 0,
    inebriate: 1.1, //the value by which the timer value will be multiplied inside the "getDrunk" function
    

  ///METHODS///
    
    //use to reset the object method currently being called (thank you xandercoded on StackOverflow https://stackoverflow.com/questions/9252839/simplest-way-to-remove-all-the-styles-in-a-page)
    reset() {
      this.timer = 500;
      this.interval = 0;
    },
  
    //used to completely reset the object method being called after first clearing its interval (thank you xandercoded on StackOverflow https://stackoverflow.com/questions/9252839/simplest-way-to-remove-all-the-styles-in-a-page)
    clear() {
      clearInterval(this.interval);
      this.reset();
    },

    getDrunk() {
      //simulates the sluggishness you feel when you start to get intoxicated
      GAME.COMPUTER.timer *= GAME.COMPUTER.inebriate
      console.log(this.timer) //for debugging

      //log messages
      console.log(GAME.COMPUTER.name + ' gets a little drunker...')
      if (GAME.COMPUTER.drinks() > 10) {
        document.getElementById("messageBox").innerHTML = GAME.COMPUTER.name + " is getting drunk!" + "\n" + GAME.COMPUTER.name + " Cooldown Timer: " + GAME.COMPUTER.timer; 
      }
    },

    soberUp() {
      GAME.COMPUTER.timer = 50;
      console.log(this.timer)

      //  THIS DOESN'T WORK BUT WHY DO I FEEL LIKE IT SHOULD
      /*  Here I wanted to illustrate that calling a method can change
          another method.
          The default "getDrunk()" function includes an if statement.
          When the "soberUp()" function is triggered by the user crossing
          the 100 point threshold, it also redefines getDrunk so that it 
          no longer indluces that if statement.

          This should WORK. But it doesn't seem to.
      //

      GAME.COMPUTER.getDrunk = function () {GAME.COMPUTER.timer *= GAME.COMPUTER.inebriate;console.log(this.timer)}

      console.log(GAME.COMPUTER.name + ' SOBERS UP')
      document.getElementById("messageBox").innerHTML = GAME.COMPUTER.name + ' SOBERS UP'
    */
    },
    

    slam() {

      /*  Here's where the real meat of the function lies.
          Everything happens in here.

          In the future, other methods will make use of the
          "this.interval" key on the GAME.COMPUTER object.
          The "clear()" and "reset()" functions both make
          use of the "interval" key on this object
      */

      this.interval = setTimeout(function (claw = new Claw()) {
        //first the computer drinks the clas
        GAME.COMPUTER.points += claw.points;
        GAME.COMPUTER.clawTracker.push(claw);

        //the the function logs the information
        console.log(GAME.COMPUTER.name + ' slams a ' + claw.flavor + ' Claw for ' + claw.points + ' points');
        document.getElementById("messageBox").innerHTML = GAME.COMPUTER.name + " Slamms a " + claw.flavor + " Claw for " + claw.points + " Points!";

        //then the computer gets drunk
        GAME.COMPUTER.getDrunk(); //this comes after because it has its own methods to update the "messageBox" div

        //finally the function calls itself but with a different timer value
        GAME.COMPUTER.slam()//recursive call

      }, this.timer); //this is where the timer value is applied

    // end of COMPUTER object  
    },

    /* CHANGE LOG
      - 10/16/2020
        HOLY SHIT I FIGURED IT OUT
        I was using a "setInterval" here and I was wondering why it wasn't
        operating on the delay I was expecting.
        Then I figured out that setInterval was adding a shitload of calls to
        GAME.COMPUTER.slam and then the call stack was dilligently executing them
        when what I really wanted was a recursive function.
        I've been saying to myself, "God, recursion is so weird, when will I 
        ever use that??"
        I just roasted myself. Damn. I figured it out tho it works now.
    },
    */

    gameOver() {
      this.clear();
    }

     /* 
    I don't yet understand how to use getters and setters

    get points() {
      return this.points;
    },
    set newPoints(num) {
      this.points = num; 
    },
    */


  /* COMPUTER OBJECT CHANGE LOG 
    - 10/16/20
      I wanted to track more than just the flavor of the randomly generated
      Claw objects, so I updated the "slam" method on both objects to push
      the entire claw to the claw array stored in each team object.
      Also renamed "flavorTracker" to "clawTracker" because it makes more sense
  */
  },
  

  
  CLAW_DATA: {
    //used to help generate random Claw objects
    flavors: [
      /*used for the "randomFlavorGen" function
        could be rewritten to be within the "randomFlavorGen" function 
        but for now, it lives here
      */
      "Mango",
      "Black Cherry",
      "Raspberry",
      "Lime",
      "Lemon",
      "Grapefruit",
      "Tangerine",
      "Watermelon",
      "Dave"
    ],

    boosted: false,
    claw_point_multiplier: 0 //used for boosts
  }

//end of GAME object
};


////// FUNCTIONS //////
/////
////
///
//


///CONSTRUCTORS
//
function Claw (points = getRandomInt(1, 10), flavor = randomFlavorGen()) {
  this.flavor = flavor;
  this.points = points;
  if (GAME.CLAW_DATA.boosted === true) {
    this.boosted = true;
  } else {
    this.boosted = false;
  };
}


///MISC
//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFlavorGen () {
  return GAME.CLAW_DATA.flavors[getRandomInt(0, GAME.CLAW_DATA.flavors.length - 1)]
}

function slamALotOfClaws (teamName, num) { 
  for(let i= 0; i<num; i++) {
    let claw = new Claw();
    teamName.points += claw.points;
    teamName.clawTracker.push(claw);
  }
  return teamName

/* CHANGE LOG
  - 10/16/20
    discovered a bug where this function was calling the "slam" method
    on the team objects it was referencing, but that caused the interval of
    the COMPUTER object to never be cleared
    rewrote this function to be independent of the team object methods
*/
}


//////THE GAME//////
/////
////
///
//
console.log("LET'S PLAY SLAMMIN' CLAWS!")
////////////////////

/* DEBUGGING

console.log(slamALotOfClaws(GAME.USER, 100))
console.log(slamALotOfClaws(GAME.COMPUTER, 100))
*/

function main () {
  console.log("Game Begin")

  //change the display message
  document.getElementById("messageBox").innerHTML = "SLAM THOSE CLAWS!"; 

  //change the display message
  document.getElementById("pointsTotals").innerHTML = ""; 
  
  //////CONTROL BUTTONS
  /////
  ////
  ///
  //
  document.getElementById("controls").innerHTML = '<button id="userSlamButton" onclick="GAME.USER.slam(new Claw())">' + GAME.USER.name + ': Slam A Claw!</button>';
  
  //call computer method that starts computer slamming automatically
  //trying to get setInterval to work here
  /*  either put setInterval inside
      COMPUTER.slam(new Claw()); or
      use setInterval here but HOW
    */

  GAME.COMPUTER.slam(); // works with this syntax, but doesn't work right

  //ends the game
  setTimeout(function () {
    // stop all game actions for all players
    GAME.COMPUTER.gameOver();
    GAME.USER.gameOver();

    // replace controls with a start over button
    document.getElementById("controls").innerHTML = '<button id="startOverButton" onclick="main()">Keep Going?</button>';

    // update the messageBox
    document.getElementById("messageBox").innerHTML = "GAME OVER"; 

    // display point totals
    document.getElementById("pointsTotals").innerHTML = GAME.USER.name + " Points: " + GAME.USER.points + "<br><br>" + GAME.COMPUTER.name + " Points: " + GAME.COMPUTER.points;
  
    // log player objects for debugging
    console.log(GAME.USER);
    console.log(GAME.COMPUTER);
  }, GAME.timelimit);

  /* CHANGE LOG:
    - 10/16/20 7:15 p.m.
      Rewrote the COMPUTER.slam function
      IT WORKS!
    - 1:01 a.m.
      What have I wrought.
  */
};