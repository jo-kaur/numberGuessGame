'use strict';

//get a secret random number between 1 and 20 and save it to secretNumber
let secretNumber= Math.trunc(Math.random()*20)+1;
//create a variable score and set it to 20
let score=20;
//create a variable highscore and set it to 0
let highscore=0;

//create a message function and save it's output into a const display message
const displayMessage= function(message){
    //the DOM query selector updates the .message's textContent to message
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess){
        //document.querySelector('.message).textContent='No Number!';
        displayMessage('⛔️ No Number!');
    }

    //when the player wins
    else if(guess===secretNumber){
        //document.querySelector('.message).textContent='Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#507543';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }

    //when guess is wrong
    else if(guess!==secretNumber){
        if(score>1){
            //document.querySelector('.message).textContent=
            //guess>secretNumber? 'Too high!':'To low!'
            displayMessage(guess>secretNumber? '📈 Too high!':'📉 Too low!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            //document.querySelector('.message).textContent='You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    
    //document.querySelector('.message).textContent= 'Start guessing..';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='rgba(78, 32, 70, 0.863)';
    document.querySelector('.number').style.width='15rem';

});
