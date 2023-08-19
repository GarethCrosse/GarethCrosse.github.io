/* Variable List */
	/* Money Vars */
	var moneyChest = 0;

	/* Ore Vars */
	var ironHaul = 0;
	var silverHaul = 0;
	
	/* Acquisition Vars */
	var ironAcqS = 0;
	var silverAcqS = 0;

	/* Miner Vars */
	var ironMiners = 0;
	var silverMiners = 0;


/* Acquisition Mechanics */

	function acquireIron(number){
		ironHaul = ironHaul + number;
		document.getElementById("ironHaulD").innerHTML = ironHaul;
	};

	function acquireSilver(number){
		silverHaul = silverHaul + number;
		document.getElementById("silverHaulD").innerHTML = silverHaul;
	};


/* Selling Mechanics */

	function sellIron(number){
		if(ironHaul>= number){
			ironHaul = ironHaul - number;
			moneyChest = moneyChest + number;
		document.getElementById("ironHaulD").innerHTML = ironHaul;
		document.getElementById("moneyChestD").innerHTML = moneyChest;
		};
	};

	function sellSilver(number){
		if(silverHaul>= number){
			silverHaul = silverHaul - number;
			moneyChest = moneyChest + (number * 2);
		document.getElementById("silverHaulD").innerHTML = silverHaul;
		document.getElementById("moneyChestD").innerHTML = moneyChest;
		};
	};


/* Hiring Mechanics */
	function hireIronMiner(number){
		var ironMinersCost = Math.floor(10 * Math.pow(1.1,ironMiners));     
		if(moneyChest>= ironMinersCost){                           
			ironMiners = ironMiners + 1;
			ironAcqS = ironMiners; 			
			moneyChest = moneyChest - ironMinersCost;
			document.getElementById('ironMinersD').innerHTML = ironMiners; 			
			document.getElementById('moneyChestD').innerHTML = moneyChest;
			document.getElementById('ironAcqSD').innerHTML = ironAcqS;
		};
		var nextIronMinersCost = Math.floor(10 * Math.pow(1.1,ironMiners)); 
		document.getElementById('ironMinersCostD').innerHTML = nextIronMinersCost;
	};

	function hireSilverMiner(number){
		var silverMinersCost = Math.floor(25 * Math.pow(1.1,silverMiners));     
		if(moneyChest>= silverMinersCost){                           
			silverMiners = silverMiners + 1;
			silverAcqS = silverMiners; 			
			moneyChest = moneyChest - silverMinersCost;
			document.getElementById('silverMinersD').innerHTML = silverMiners; 		
			document.getElementById('moneyChestD').innerHTML = moneyChest;
			document.getElementById('silverAcqSD').innerHTML = silverAcqS;
		};
		var nextSilverMinersCost = Math.floor(25 * Math.pow(1.1,silverMiners)); 
		document.getElementById('silverMinersCostD').innerHTML = nextSilverMinersCost;
	};


/* Refresh Rate */
	window.setInterval(function(){
		acquireIron(ironMiners);
		acquireSilver(silverMiners);
	}, 1000);
