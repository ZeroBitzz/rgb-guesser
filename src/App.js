import './App.css'

let correctNum = Math.floor(Math.random() * 3)
let correctCount = 0
let correct_rgb
let dot_rgb_1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
let dot_rgb_2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
let dot_rgb_3 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

function checkCorrectandReset(x){
  if(x === correctNum){
    correctCount++
    document.getElementById('correct-in-row').innerHTML = `CORRECT IN A ROW: ${correctCount}`
  }else{
    correctCount = 0
    document.getElementById('correct-in-row').innerHTML = `CORRECT IN A ROW: ${correctCount}`
  }
  dot_rgb_1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  dot_rgb_2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  dot_rgb_3 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  document.getElementById('dot1').style.backgroundColor = dot_rgb_1
  document.getElementById('dot2').style.backgroundColor = dot_rgb_2
  document.getElementById('dot3').style.backgroundColor = dot_rgb_3
  correctNum = Math.floor(Math.random() * 3)
  if(correctNum === 0){
    correct_rgb = dot_rgb_1
  }else if(correctNum === 1){
    correct_rgb = dot_rgb_2
  }else{
    correct_rgb = dot_rgb_3
  }
  console.log(correctNum)
  document.getElementById('correct-rgb').innerHTML = correct_rgb
}

function App() {
  if(correctNum === 0){
    correct_rgb = dot_rgb_1
  }else if(correctNum === 1){
    correct_rgb = dot_rgb_2
  }else{
    correct_rgb = dot_rgb_3
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='dot-container'>
          <span onClick={() => checkCorrectandReset(0)} className='dot' id='dot1' style={{ backgroundColor: dot_rgb_1 }}></span>
          <span onClick={() => checkCorrectandReset(1)} className='dot' id='dot2' style={{ backgroundColor: dot_rgb_2 }}></span>
          <span onClick={() => checkCorrectandReset(2)} className='dot' id='dot3' style={{ backgroundColor: dot_rgb_3 }}></span>
        </div>
        <p id='correct-rgb'>
          {correct_rgb}
        </p>
        <p id='correct-in-row'>
          CORRECT IN A ROW: {correctCount}
        </p>
        <p>
          GUESS THE RGB
        </p>
        <a
          className="App-link"
          href="https://papaya-kringle-fb67c6.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHECK OUT MY WEBSITE
        </a>
      </header>
    </div>
  )
}

export default App
