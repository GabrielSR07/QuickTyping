window.addEventListener('load', init);

// Variables globales

const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
}

//Para cambiar de nivel
let currentLevel = levels.easy;

  function setEasy(){

      currentLevel = levels.easy;
      seconds.innerHTML = currentLevel;
      isPlaying = false;

  }

  function setMedium(){
      currentLevel = levels.medium;
      seconds.innerHTML = currentLevel;
      isPlaying = false;
  }

  function setHard(){
      currentLevel = levels.hard;
      seconds.innerHTML = currentLevel;
      isPlaying = false;
  }

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'saucepan',
    'racoon',
    'spaceship',
    'laptop',
    'travel',
    'airplane',
    'mask',
    'module',
    'negative',
    'facebook',
    'instagram',
    'framework',
    'rhythm',
    'telegram',
    'misunderstood',
    'alphabet',
    'football',
    'baseball',
    'basketball',
    'national',
    'league',
    'equipment',
    'crew',
    'understanding',
    'ambulance',
    'screenshot',
    'pyramid',
    'graveyard',
    'pantheon',
    'apocalypse',
    'responsability',
    'amusement',
    'vaccination',
    'entertainment',
    'awareness',
    'conscience',
    'boxing',
    'unboxing',
    'influencer',
    'accomplishment',
    'management',
    'thunderstruck',
    'stunned',
    'paralized',
    'decoration',
    'surveillance',

  ];


  function init() {
    // seconds.innerHTML = currentLevel;
      showWord(words);
      wordInput.addEventListener('input', startMatch);
      //Para contar el tiempo
      setInterval(countdown,1000);

      setInterval(checkStatus, 50);
  }

  

  function startMatch(){
      if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
      }

      if (score === -1){
          scoreDisplay.innerHTML = 0;
      } else{ 
        scoreDisplay.innerHTML = score;
      }
  }

  //Compara la palabra escrita con la que esta en pantalla

  function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
  }
      //Para mostrar una palabra aleatoria del array
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
 }

 function countdown(){
     if (time > 0) {
        time--;
     } else if (time === 0){
        isPlaying = false;
     }
     timeDisplay.innerHTML =time;
 }

 function checkStatus() {
     if(!isPlaying && time===0){
         message.innerHTML = 'Game Over!!';
         score = -1;
     }
     easy.addEventListener('click',setEasy);
     medium.addEventListener('click',setMedium);
     hard.addEventListener('click',setHard);
 }

