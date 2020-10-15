function main () {
  console.log("Game Begin")

  //change the display message
  document.getElementById("messageBox").innerHTML = "SLAM THOSE CLAWS!"; 
  
  //add new buttons to slam claws
  document.getElementById("controls").innerHTML = '<button id="team1SlamButton" onclick="TEAM1.slam(new Claw())">Team 1: Slam A Claw!</button>' + '<br>' + '<button id="team2SlamButton" onclick="TEAM2.slam(new Claw())">Team 2 Slam a Claw!</button>'
  
  //ends the game
  setTimeout(function () {
    document.getElementById("controls").innerHTML = '';
    document.getElementById("messageBox").innerHTML = "GAME OVER"; 
    document.getElementById("pointsTotals").innerHTML = "Team 1 Points: " + TEAM1.points + "<br><br>" + "Team 2 Points: " + TEAM2.points;
  }, 5000);
}


// Team Objects


const TEAM1 = {
    name: "Team 1", 
    points: 0,
    flavorTracker: [],
    /*
    get points() {
      return this.points;
    },
    set newPoints(num) {
      this.points = num; 
    },
    */
    slam (claw) {
      this.points += claw.points;
      this.flavorTracker.push(claw.flavor);
    }
  };

const TEAM2 = {
    name: "Team 2", 
    points: 0,
    flavorTracker: [],
    /*
    get points() {
      return this.points;
    },
    set newPoints(num) {
      this.points = num; 
    },
    */
    slam (claw) {
      this.points += claw.points;
      this.flavorTracker.push(claw.flavor);
    }
  };


// CLAWS

//claw data structure

const CLAW_DATA = {
  flavors: [
    "Mango",
    "Black Cherry",
    "Raspberry",
    "Lime",
    "Lemon",
    "Grapefruit",
    "Tangerine",
    "Watermelon"
  ]
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFlavorGen () {
  return CLAW_DATA.flavors[getRandomInt(0, CLAW_DATA.flavors.length - 1)]
}


// claw constructor


function Claw (points = getRandomInt(1, 10), flavor = randomFlavorGen()) {
  this.flavor = flavor;
  this.points = points;
}

function slamALotOfClaws (teamName, num) {
  for(let i= 0; i<num; i++) {
    teamName.slam(new Claw());
  }
  return teamName
}

console.log(slamALotOfClaws(TEAM1, 100))
console.log(slamALotOfClaws(TEAM2, 100))