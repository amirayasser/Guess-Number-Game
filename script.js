// Get the DOM elements and initialize the game
const input = document.getElementsByTagName('input')[0],
    guess = document.getElementsByClassName('guess')[0],
    btn = document.getElementById('btn'),
    remainingChances = document.querySelector('.chances')

// Set the focus on input field
input.focus();

let chance = 10;
let randomNum = Math.floor(Math.random()*100);
console.log(randomNum)


// Listen for the click event on the check button
btn.onclick = () => {

    chance--;

    if (randomNum == input.value){
        guess.classList.add('win');
        guess.textContent = `congrats🥳 \nyou guessed it correctly`
        remainingChances.textContent = chance
        input.disabled = true;
        btn.textContent = 'play again'

    } 
    else if (randomNum != input.value){
        if(input.value >= 100 || input.value <=0){
            guess.style.color = "#f00";
            guess.textContent = "Your number is invalid"
            remainingChances.textContent = chance
            input.addEventListener('click', () => guess.textContent = '') 

        }
        else if ( input.value >= randomNum - 5  &&  input.value <= randomNum +5 ){
            guess.style.color = "#b3ffb6";
            guess.textContent = "you're about to get it"
            remainingChances.textContent = chance

        input.addEventListener('change' , ()=> guess.textContent = '') 

            console.log(remainingChances.textContent , chance)
        }  else {
            guess.style.color = "#ff338a";
            guess.textContent = 'ur guess s so far'
            remainingChances.textContent = chance

        input.addEventListener('click' , () => guess.textContent = '') 

            console.log(remainingChances.textContent, chance)

        }
    }
    // Check if the chance is zero
   if(chance == 0){
    guess.classList.add = 'fail'
    guess.textContent = 'game over'
    input.disabled = true;
    btn.textContent = 'play again'
    btn.onclick = function(){
        window.location.reload()
    }
  }
}



