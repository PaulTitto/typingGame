window.addEventListener('load', init);




const levels = {

    easy:4,
    medium: 3,
    hard: 2
}

// To change level
let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
let maxScore;


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highScoreElt = document.querySelector('#high-score');
const easyBtn = document.querySelector('#easy');
const mediumBtn = document.querySelector('#medium');
const hardBtn = document.querySelector('#hard');

const words = 
[
    'angular',
    'magic',
    'brew',
    'while',
    'throw',
    'css',
    'break',
    'swing',
    'echo',
    'let',
    'wall',
    'laughter',
    'hash',
    'spinner',
    'beer',
    'ninja',
    'javascript',
    'master',
    'program',
    'coding',
    'hero',
    'learning',
    'work',
    'case',
    'react',
    'dragon',
    'rush',
    'api',
    'init',
    'motion',
    'google',
    'float',
    'damn',
    'block',
    'ranking',
    'nice',
    'machine',
    'perfect',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'front',
    'grid',
    'stack',
    'mac',
    'console',
    'ajax',
    'heroku',
    'loop',
    'sql',
    'php',
    'data',
    'npm',
    'server',
    'bash'
];
//option
const settingOption = document.getElementById('optionBtn');
const menuSlideElt = document.getElementById('menuSlide');

settingOption.addEventListener('click', function(){
    menuSlideElt.classList.toggle("slideIn");
});


// Seclect level
function setlevel(e){
    if(e.target === easyBtn){
        currentLevel = levels.easy;
    }else if(e.target === mediumBtn){
        currentLevel = levels.medium;
    }else if(e.target === hardBtn){
        currentLevel = levels.hard;
    }
    console.log(currentLevel);
    init();
}


function init(){  
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
    maxScore = localStorage.getItem('highScore');
    highScoreElt.innerHTML = maxScore;
}

function startMatch(){
    wordInput.value = wordInput.value.toLowerCase();
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
        highScoreElt.innerHTML = score;
        
        if(score >= maxScore){
            localStorage.setItem('highScore',score);
        }
    }
    maxScore = localStorage.getItem('highScore');
    scoreDisplay.innerHTML = score;
    highScoreElt.innerHTML = maxScore;
}

function matchWords(){
    
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Great 👌';
            
            return true;
        }else{
            message.innerHTML = '🙄';
            return false;
        }
}


function showWord(word){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown(){

    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}


function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!🙅🏽';
        score = -1;
    }
}

easyBtn.addEventListener('click', setlevel);
mediumBtn.addEventListener('click', setlevel);
hardBtn.addEventListener('click', setlevel);