//Dom elements
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')
const resultEl = document.getElementById('result')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


//generate functions
function getRandomLower() {
  return String.fromCharCode(math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '?:><""()-+-*][{}~';
  return String.fromCharCode[math.floor(Math.random() * symbols.length)];
}

