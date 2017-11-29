$(document).ready(function(){

	//variables for javascript function

	var enemiesDefeated = 0;
	var yodaCount = 0;
	var jarJarCount = 0;
	var darthMaulCount = 0;
	var bobaFettCount = 0;
	var defenderArea = false;
	var playerCount = true;

// moves clicked player to approprate zones.

	$('.char1').on('click', function(){

			if(playerCount === true){

				$(this).addClass("main");
				$('.player').html('Your Player is Yoda');

				yodaCount++;

				// makes sure you dont have the player go down to enemies box

				playerCount = false;

				// places the other players as enemies

				$('.char2').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemyBox').css({'background-color' : 'white'});

			}

			//places character 1 as a Opponent

			else if (playerCount === false && yodaCount === 0 && defenderArea === false){

				$('.char1').appendTo('.defenderBox').addClass("opp").css({'background-color' : 'black', 'color' : 'white'});
				$('.opponent').html('Your opponent is Yoda');
				defenderArea = true;

			}

	});

// moves clicked player to approprate zones.

	$('.char2').on('click', function(){

			if(playerCount === true){

				$(this).addClass("main");
				$('.player').html('Your Player is Jar Jar Binks');

				jarJarCount++;

				// makes sure you dont have the player go down to enemies box

				playerCount = false;

				// places the other players as enemies

				$('.char1').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemyBox').css({'background-color' : 'white'});

			}

			//places character 2 as a Opponent

			else if (playerCount === false && jarJarCount === 0 && defenderArea === false){

				$('.char2').appendTo('.defenderBox').addClass("opp").css({'background-color' : 'black', 'color' : 'white'});
				$('.opponent').html('Your opponent is Jar Jar Binks');
				defenderArea = true;

			}

	});

	// moves clicked player to approprate zones.
	$('.char3').on('click', function(){

			if(playerCount === true){

				$(this).addClass("main");
				$('.player').html('Your Player is Darth Maul');

				darthMaulCount++;

				// makes sure you dont have the player go down to enemies box
				playerCount = false;

				// places the other players as enemies
				$('.char1').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char2').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemyBox').css({'background-color' : 'white'});

			}

			//places character 3 as a Opponent
			else if (playerCount === false && darthMaulCount === 0 && defenderArea === false){

				$('.char3').appendTo('.defenderBox').addClass("opp").css({'background-color' : 'black', 'color' : 'white'});
				$('.opponent').html('Your opponent is Darth Maul');
				defenderArea = true;
			
			}

	});

// moves clicked player to approprate zones.

	$('.char4').on('click', function(){

			if(playerCount === true){

				$(this).addClass("main");
				$('.player').html('Your Player is Boba Fett');

				bobaFettCount++;

				// makes sure you dont have the player go down to enemies box

				playerCount = false;

				// places the other players as enemies

				$('.char1').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char2').appendTo('.enemyBox').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemyBox').css({'background-color' : 'white'});

			}

			//places character 4 as a Opponent

			else if (playerCount === false && bobaFettCount === 0 && defenderArea === false){

				$('.char4').appendTo('.defenderBox').addClass("opp").css({'background-color' : 'black', 'color' : 'white'});
				$('.opponent').html('Your opponent is Boba Fett');
				defenderArea = true;
			}	
			
	});

//================================================================

	// activates the attack button function on click
	$('.attackBtn').click(function()

	{

		if(defenderArea === false){

			$('.textContainer').html('<h3>' + 'You have not selected an enemy to attack. Please select a opponent to continue.' + '</h3>');
			$('.attackBtn').off('click');

		}

	$('.attackBtn').click(function()
		{ 
			if (defenderArea === true){

				// get opponents name attribute
				var oppName = $('.opp').attr('characterName');

				//	get player health attribute
				var playerHealth = $('.main').attr('health');

				// get player attack attribute
				var playerAttack = $('.main').attr('attack');

				//	get opponent health attribute
				var opponentHealth = $('.opp').attr('health');

				// get opponents counter attack attribute
				var opponentCounterAttack = $('.opp').attr('counterAttack');

				// makes player health set to starting health - opponents counter attack
				var playerHealthAfter = playerHealth - opponentCounterAttack;

				// makes opponents health set to starting health - player attack
				var opponentHealthAfter = opponentHealth - playerAttack;

				// sets new value for player health in DOM
				var player1Health = $('.main').attr('health', playerHealthAfter);

				// sets new value for opponent health in DOM
				var opponent1Health = $('.opp').attr('health', opponentHealthAfter);

				// changes player health in DOM
				$('.main p').html($('.main').attr('health'));

				// changes opponents health in DOM
				$('.opp p').html($('.opp').attr('health'));

				//displays the damage information of the players
				$('.textContainer').html('<h3>' + 'You attacked ' + oppName + ' for ' + playerAttack + ' damage. '+ '<br>' + oppName + ' attacked you for ' + opponentCounterAttack + ' damage. ' + '</h3>');
		
				// doubles the players attack power
				playerAttack = playerAttack * 1.5;

				var newPlayerAttack = $('.main').attr('attack', playerAttack.toFixed());

					if (playerHealthAfter <=0){

						var endGame = confirm ('You have lost please try again!');
						$('.attackBtn').off('click');

							if (endGame === true){

								location.reload();

							}
					}

					else if (opponentHealthAfter <=0){

						$('.opp').remove();
						$('.textContainer').html('<h3>' + 'You defeated ' + oppName + '!' + '<br>' + 'Please select another opponent.' + '</h3>');
						enemiesDefeated++;
						defenderArea = false;

							if(enemiesDefeated === 3){
								var endGame = confirm ('You have won!');
								$('.attackBtn').off('click');

									if (endGame === true){

										location.reload();

									}
							}

					}

			}

		});
	});
});	

	
