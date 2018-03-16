

function play() {
    var startingBet = document.getElementById("startBet").value
    var bet = startingBet
    var betsTotal = [];
	if (startingBet <= 0){
		alert("Please bet more than $0.00");
		return;
	}
	
    while (bet > 0) {
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		var diceRoll = dice1 + dice2;
        if(diceRoll != 7) {
            bet -= 1
        } else { 
            bet += 4
        }
        betsTotal.push(bet)
    }

	var rollCount = betsTotal.length
	var highestAmount = Math.max.apply(Math, betsTotal)
	var rollCountHigh = betsTotal.indexOf(highestAmount)
	
	function results(){
	document.getElementById("Bet").innerHTML = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerHTML = rollCount + " " +  "rolls";
	document.getElementById("highestAmount").innerHTML = "$" + highestAmount + ".00";
	if (rollCount > 10){
	document.getElementById("rollCountHighest").innerHTML = rollCountHigh + " " + "rolls";
	}
	document.getElementById("playButton").innerHTML = "Play Again"+ "?" ;
	}
	results();
}