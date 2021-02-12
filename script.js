

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'We Love Programming'

let idx = 1
let speed = 225 / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if(idx > text.length) {
    idx = 1
  }

    setTimeout(writeText, speed)
}

function SpeedFunction(e){
    speed = 250 / e.target.value
    
}


speedEl.addEventListener('input',SpeedFunction )

