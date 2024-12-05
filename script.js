var scores,roundScore,activePlayer,GamePlaying; 

NewGame();
 
document.querySelector('.btn--roll').addEventListener('click',function() {
    if(GamePlaying) {

        //1. Random Number.
       var dice = Math.floor(Math.random() * 6) + 1;
        //2.Display the result.
        var  diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3. Update the round score If the rolled number was NOT a 1.
    if(dice !== 1) {
        //ADD score
        roundScore += dice;
        document.querySelector('#current--'+ activePlayer).textContent = roundScore;
    }else {
        nextPlayer();
    }
    }   
});

document.querySelector('.btn--hold').addEventListener('click', function() {
    if(GamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        
        // Update the UI
        document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if (scores[activePlayer] >= 50) {
            document.querySelector('#name--' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('winner');
            document.querySelector('.player--' + activePlayer).classList.remove('active');
            GamePlaying = false;
          }
          else{
              nextPlayer();
          }
    }
});

function nextPlayer() {
//next player.
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
roundScore = 0;

document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.querySelector('.player--0').classList.toggle('active');
document.querySelector('.player--1').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn--new').addEventListener('click', function(){
    NewGame();
});
 
function NewGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; 
    GamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('winner');
document.querySelector('.player--1').classList.remove('winner');
document.querySelector('.player--0').classList.remove('active');
document.querySelector('.player--1').classList.remove('active');
document.querySelector('.player--0').classList.add('active');

}






