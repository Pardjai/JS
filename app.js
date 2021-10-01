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
