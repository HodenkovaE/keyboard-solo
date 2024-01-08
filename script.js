const randomStrings = [
  'трансформация',
  'метрополитен',
  'вприкуску',
  'горница',
  'сиреневенький',
  'тормоз',
  'благовидный',
  'косоглазие',
  'ежедневный',
  'великолепный',
  'мусоропровод',
  'пешеход',
  'машина',
  'космополитен',
   'бабушка',
   'шикарный',
   'устрица',
   'голубцы',
   'шумовка',
   'путешествие'
]


const word = document.querySelector('.word')
const correctCount = document.querySelector('.correct-count')
const mistakes = document.querySelector('.word-mistakes')
const wrongСount = document.querySelector('.wrong-count')
const timer = document.querySelector('#timer')


let wordElement = randomStrings[Math.floor(Math.random() * randomStrings.length)]  
let markup = wordElement.split('').map(item => `<span>${item}</span>`).join('');  //
word.innerHTML = markup;

let i = 0

function format(val) {
  if (val < 10) {
    return `0${val}`
  }
  return val;
}

let sec = 0
let min = 0
timer.textContent = `${format(min)}:${format(sec)}`


let timeId = setInterval(() => {
  if (sec > 58) {
    min++
    sec = 0;
  }
  sec++
  timer.textContent = `${format(min)}:${format(sec)}`
},
  1000);


document.addEventListener('keydown', function (event) {

  let table = word.children[i];

  if (event.key != wordElement[i]) {
    table.className = 'w'
    mistakes.textContent = ++mistakes.textContent;
  }

  if (event.key == wordElement[i]) {
    table.className = 'c'
    i = i + 1
  }

  if (i >= wordElement.length) {
    wordElement = randomStrings[Math.floor(Math.random() * randomStrings.length)]   
    markup = wordElement.split('').map(item => `<span>${item}</span>`).join('');  
    word.innerHTML = markup;
    i = 0

    if (mistakes.textContent == 0) {
     correctCount.textContent = ++correctCount.textContent
    }
    if (mistakes.textContent > 0) {
      wrongСount.textContent = ++wrongСount.textContent
      mistakes.textContent = 0
    }
  }

  if (correctCount.textContent == 5) {
    alert('Победа! Ваше время: ' + timer.textContent)
    sec = 0
    min = 0
    correctCount.textContent = 0
    wrongСount.textContent = 0

  }

  if (wrongСount.textContent == 5) {
    alert('Вы проиграли')
    sec = 0
    min = 0
    correctCount.textContent = 0
    wrongСount.textContent = 0
  }
})





