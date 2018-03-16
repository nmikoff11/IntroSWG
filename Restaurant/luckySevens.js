function play(){
	var startBet = document.getElementById("betStart").value;
	var cash = 0;
	var die1 = 0;
	var die2 = 0;
	var diceRoll = 0;
	var rollCounter = 0;
	var unluckyCounter = 0;
	var cash = betStart;
	var totalMoney = [cash]
	
	
	//win 
	do{
	die1 = Math.floor(Math.random() * 6) + 1;
	die2 = Math.floor(Math.random() * 6) + 1;
	diceRoll = die1 + die2
	rollCounter++;
			if( diceRoll == 7 ){
				cash = betStart + 4;
				var last_cash = cash[cash.length - 1];
				var last_updatedcash = last_cash + 4;
				cash.push(last_updatedcash);
			}
			else {
				cash--;
				var last_cash = cash[cash.length - 1];
				var last_updatedcash = last_cash - 1;
				cash.push(last_updatedcash);
			}
		while ( cash > 0 );
		var max = 0;
		
		totalMax = Math.max.apply(totalMoney);
		rollsMax = cash.indexOf(totalMax);
		
		if(rollsMax < 0){
			rollsMax = 0;
		}
		
	document.getElementById("roll").innerHTML=("
	<table align="center"><h2>Game Results</h2>
					<tr>
						<th>Starting bet</th>
						<th id="startBet"></th>
						</tr>
					<tr>
						<td>Total Rolls before going broke</td>
						<td id="rollCounter"></td>
					</tr>
					<tr>
						<td>Highest Amount Won</td>
						<td id="totalMax"></td>
					</tr>
					<tr>
						<td>Roll Count at Highest Amount Won</td>
						<td id="rollsMax"></td>
					</tr>
					");
			</table>
	}
		
		