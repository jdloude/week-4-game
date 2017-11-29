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

				$('.char2').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemies').css({'background-color' : 'white'});

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

				$('.char1').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemies').css({'background-color' : 'white'});

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
				$('.char1').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char2').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char4').appendTo('.enemies').css({'background-color' : 'white'});

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

				$('.char1').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char2').appendTo('.enemies').css({'background-color' : 'white'});
				$('.char3').appendTo('.enemies').css({'background-color' : 'white'});

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
			// If statement to evaluate if the defender box is empty
			if(defenderArea === false){

				$('.textContainer').html('<h3>' + 'You have not selected an enemy to attack. Please select a opponent to continue.' + '</h3>').css({'color' : 'yellow'});
				$('.attackBtn').off('click');

			}

	$('.attackBtn').click(function()

		{ 
			// If statement to evaluate if the defender box has an opponent
			if (defenderArea === true){

				// Gets the opponents name attribute
				var oppName = $('.opp').attr('characterName');

				//	Gets the player health attribute
				var playerHealth = $('.main').attr('health');

				// Gets the player attack attribute
				var playerAttack = $('.main').attr('attack');

				//	Gets the opponent health attribute
				var opponentHealth = $('.opp').attr('health');

				// Gets the opponents counter attack attribute
				var opponentCounterAttack = $('.opp').attr('counterAttack');

				// Makes the player health set to starting health - opponents counter attack
				var playerHealthAfter = playerHealth - opponentCounterAttack;

				// Makes opponents health set to starting health - player attack
				var opponentHealthAfter = opponentHealth - playerAttack;

				// Sets new value for player health in DOM
				var player1Health = $('.main').attr('health', playerHealthAfter);

				// Sets new value for opponent health in DOM
				var opponent1Health = $('.opp').attr('health', opponentHealthAfter);

				// Changes player health in DOM
				$('.main p').html($('.main').attr('health'));

				// Changes opponents health in DOM
				$('.opp p').html($('.opp').attr('health'));

				// Displays the damage information of the players
				$('.textContainer').html('<h3>' + 'You attacked ' + oppName + ' for ' + playerAttack + ' damage. '+ '<br>' + oppName + ' attacked you for ' + opponentCounterAttack + ' damage. ' + '</h3>').css({'color' : 'yellow'});
		
				// Increases the players attack power by some value
				playerAttack = playerAttack * 1.25;

				// Sets the variable newPlayerAttack to the attack attribute on selected character. rounded to the nearest whole number.
				var newPlayerAttack = $('.main').attr('attack', playerAttack.toFixed());


					if(opponentHealthAfter <= 75) {

						$('.opp').css({'background-color' : 'red'});

					}	

					if (playerHealthAfter <= 75) {

						$('.main').css({'background-color' : 'red'});

					}

					if (playerHealthAfter <= 0){

						var endGame = confirm ('You have lost please try again!');

						// Turns off the attack button so no more damage can be applied
						$('.attackBtn').off('click');

							// If statment to reload the page on a lose
							if (endGame === true){

								location.reload();

							}
					}

					if (opponentHealthAfter <= 0){

						// Removes opponent after health is at or below zero
						$('.opp').remove();

						// Shows you who you have defeated
						$('.textContainer').html('<h3>' + 'You defeated ' + oppName + '!' + '<br>' + 'Please select another opponent.' + '</h3>');
						
						// Increases the defeated variable so you can win
						enemiesDefeated++;

						// Resets the defender area so a new oponent can be selected
						defenderArea = false;

							// If statment to evaluate if you have defeated all enemies
							if(enemiesDefeated === 3){

								var endGame = confirm ('You have won!');

								// Turns off the attack button so no more damage can be applied
								$('.attackBtn').off('click');

									// If statment to reload the page on a win
									if (endGame === true){

										location.reload();

									}
							}

					}

			}

		});
	});
});	

	
