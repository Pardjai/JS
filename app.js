const hourFirst = document.getElementById('hourFirst')
const hourSecond = document.getElementById('hourSecond')
const minuteFirst = document.getElementById('minuteFirst')
const minuteSecond = document.getElementById('minuteSecond')
const secondFirst = document.getElementById('secondFirst')
const secondSecond = document.getElementById('secondSecond')
setInterval(() => {
   const time = new Date()
   const hours = time.getHours().toString().padStart(2, '0')
   const minutes = time.getMinutes().toString().padStart(2, '0')
   const seconds = time.getSeconds().toString().padStart(2, '0')
   hourFirst.textContent = hours[0]
   hourSecond.textContent = hours[1]
   minuteFirst.textContent = minutes[0]
   minuteSecond.textContent = minutes[1]
   secondFirst.textContent = seconds[0]
   secondSecond.textContent = seconds[1]
}, 100)

const stopwatchScreen = document.querySelector('.stopwatchScreen')
const stopwatchButton = stopwatchScreen.querySelector('.stopwatch-toggle')
const stopwatch_hourFirst = stopwatchScreen.querySelector('#hourFirst')
const stopwatch_hourSecond = stopwatchScreen.querySelector('#hourSecond')
const stopwatch_minuteFirst = stopwatchScreen.querySelector('#minuteFirst')
const stopwatch_minuteSecond = stopwatchScreen.querySelector('#minuteSecond')
const stopwatch_secondFirst = stopwatchScreen.querySelector('#secondFirst')
const stopwatch_secondSecond = stopwatchScreen.querySelector('#secondSecond')
const stopwatch_millisecondFirst =
   stopwatchScreen.querySelector('#millisecondFirst')
const stopwatch_millisecondSecond =
   stopwatchScreen.querySelector('#millisecondSecond')
const stopwatchScreenNums = stopwatchScreen.querySelectorAll(
   '.stopwatchScreen__num'
)
const reverseButton = stopwatchScreen.querySelector('.reverse-button')

let milliseconds = 0
let seconds = 1
let minutes = 1
let hours = 1
let stopwatchMillisecondsInterval
let stopwatchSecondsInterval
let stopwatchMinutesInterval
let stopwatchHoursInterval
async function stopwatchMilliseconds() {
   stopwatchMillisecondsInterval = setInterval(() => {
      stopwatch_millisecondSecond.textContent = milliseconds
         .toString()
         .padStart(2, '0')[1]
      stopwatch_millisecondFirst.textContent = milliseconds
         .toString()
         .padStart(2, '0')[0]
      if (milliseconds != 99) {
         milliseconds += 1
      } else {
         milliseconds = 0
      }
   }, 10)
}

async function stopwatchSeconds() {
   stopwatchSecondsInterval = setInterval(() => {
      stopwatch_secondSecond.textContent = seconds
         .toString()
         .padStart(2, '0')[1]
      stopwatch_secondFirst.textContent = seconds.toString().padStart(2, '0')[0]
      if (seconds != 59) {
         seconds += 1
      } else {
         seconds = 0
      }
   }, 1000)
}

async function stopwatchMinutes() {
   stopwatchMinutesInterval = setInterval(() => {
      stopwatch_minuteSecond.textContent = minutes
         .toString()
         .padStart(2, '0')[1]
      stopwatch_minuteFirst.textContent = minutes.toString().padStart(2, '0')[0]
      if (minutes != 59) {
         minutes += 1
      } else {
         minutes = 0
      }
   }, 60000)
}

async function stopwatchHours() {
   stopwatchHoursInterval = setInterval(() => {
      stopwatch_hourSecond.textContent = hours.toString().padStart(2, '0')[1]
      stopwatch_hourFirst.textContent = hours.toString().padStart(2, '0')[0]
      if (hours != 59) {
         hours += 1
      } else {
         hours = 0
      }
   }, 3600000)
}

stopwatchButton.textContent = 'START'
let stopwatchIsWorking = false
stopwatchButton.addEventListener('click', (e) => {
   if (!stopwatchIsWorking) {
      stopwatchMilliseconds()
         .then(stopwatchSeconds())
         .then(stopwatchMinutes())
         .then(stopwatchHours())
      stopwatchScreen.classList.add('stopwatch--active')
      stopwatchButton.textContent = 'STOP'
      reverseButton.removeAttribute('disabled')
   } else {
      clearInterval(stopwatchMillisecondsInterval)
      clearInterval(stopwatchSecondsInterval)
      clearInterval(stopwatchMinutesInterval)
      clearInterval(stopwatchHoursInterval)
      stopwatchScreen.classList.remove('stopwatch--active')
      stopwatchButton.textContent = 'START'
   }
   stopwatchIsWorking = !stopwatchIsWorking
})

reverseButton.addEventListener('click', (e) => {
   for (let i of stopwatchScreenNums) {
      i.textContent = '0'
   }
   milliseconds = 0
   seconds = 1
   minutes = 1
   hours = 1
   if (!stopwatchIsWorking) {
      reverseButton.setAttribute('disabled', 'disabled')
   }
})
