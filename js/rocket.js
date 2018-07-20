var timer = null;
var countdownNumber = 10;

var changeState= function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2){
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber > 5 && countdownNumber <= 8) {
				//say cant wait
				document.getElementById('wait').className = 'wait show';
			} else{
				document.getElementById('wait').className = 'wait';
			}

			// say yeah
			if(countdownNumber >= 3 && countdownNumber <=5) {
				document.getElementById('yeah').className = 'yeah show';
			} else{
				document.getElementById('yeah').className = 'yeah';
			};


			if (countdownNumber <=0) {
				changeState(3);
			};
		}, 1000);
	} else if (state == 3) {
		var succes = setTimeout(function () {
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:',randomNumber)

				//succes
				if (randomNumber >3){
					changeState(4);
				} else {
					changeState(5); // oh no! failure
				};
		}, 2000);
	};
}