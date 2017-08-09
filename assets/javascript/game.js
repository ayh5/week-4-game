		

$(document).ready(function() {

	var targetNumber = Math.floor(Math.random()* 120)+19;
	$('#target-number').text(targetNumber);


	var btn1 = Math.floor(Math.random() * 12)+ 1;
	var btn2 = Math.floor(Math.random() * 12)+ 1;
	var btn3= Math.floor(Math.random() * 12)+ 1;
	var btn4 = Math.floor(Math.random() * 12)+ 1;

	var wins = 0;
	var losses = 0;
	var totalScore = 0;

	$('#winTally').text(wins);
	$('#lossTally').text(losses);

	function reset(){
		var targetNumber = Math.floor(Math.random() * 120)+19;
		var btn1 = Math.floor(Math.random() * 12)+ 1;
		var btn2 = Math.floor(Math.random() * 12)+ 1;
		var btn3 = Math.floor(Math.random() * 12)+ 1;
		var btn4 = Math.floor(Math.random() * 12)+ 1;
		totalScore = 0;
	$('#target-number').text(targetNumber);
	$('#totalScore').text(totalScore);
	}


	function addwin(){
		wins++;
		$('#winTally').text(wins);
		reset();
	}


	function addloss(){
		losses++;
		$('#lossTally').text(losses);
		reset()
	}
	$('#greenCrystal').on('click', function(){
		 totalScore = totalScore + btn1;
		console.log("Updated totalScore is " + totalScore);
		$('#totalScore').text(totalScore);
		   if (totalScore ===targetNumber){
		   	addwin();
		   }
		   else if (totalScore > targetNumber){
		   	addloss();
		   }

	});

$('#pinkCrystal').on('click', function(){
		totalScore = totalScore + btn2;
		console.log("Updated totalScore is " + totalScore);
		$('#totalScore').text(totalScore);
		   if (totalScore ===targetNumber){
		   	addwin();
		   }
		   else if(totalScore > targetNumber){
		   	addloss();
		   }

	});

$('#whiteCrystal').on('click', function(){
		totalScore = totalScore + btn3;
		console.log("Updated totalScore is " + totalScore);
		$('#totalScore').text(totalScore);
		   if (totalScore ===targetNumber){
		   	addwin();
		   }
		   else if(totalScore > targetNumber){
		   	addloss();
		   }

	});

$('#yellowCrystal').on('click', function(){
		totalScore = totalScore + btn4;
		console.log("Updated totalScore is " + totalScore);
		$('#totalScore').text(totalScore);
		   if (totalScore ===targetNumber){
		   	addwin();
		   }
		   else if (totalScore > targetNumber){
		   	addloss();
		   }

	});
}); 
