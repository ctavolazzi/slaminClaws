function main () {
  console.log("Game Begin")
  document.getElementById("messageBox").innerHTML = "SLAM THOSE CLAWS!"; 
  // add a new button to slam claws
  document.getElementById("controls").innerHTML = '<button id="team1SlamButton" onclick="TEAM1.slam(MANGO_CLAW)">Team 1: Slam A Claw!</button>' + '<br>' + '<button id="team2SlamButton" onclick="TEAM2.slam(MANGO_CLAW)">Team 2 Slam a Claw!</button>'
  setTimeout(function () {
    document.getElementById("controls").innerHTML = '';
    document.getElementById("messageBox").innerHTML = "GAME OVER"; 
    document.getElementById("pointsTotals").innerHTML = "Team 1 Points: " + TEAM1.points + "<br><br>" + "Team 2 Points: " + TEAM2.points;
  }, 3000);
    // disable game buttons
}


// Team Objects


const TEAM1 = {
    name: "Team 1", 
    points: 0,
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
      console.log(this.points);
    }
  };

const TEAM2 = {
    name: "Team 2", 
    points: 0,
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
      console.log(this.points);
    }
  };


// claw constructor

function Claw (flavor, points) {
  this.flavor = flavor;
  this.points = points;
}

const MANGO_CLAW = new Claw("Mango", 5);

