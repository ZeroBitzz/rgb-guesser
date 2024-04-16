import './App.css'

function App() {
  let dot_rgb_1 = "rgb(255,0,0)"
  let dot_rgb_2 = "rgb(0,255,0)"
  let dot_rgb_3 = "rgb(0,0,255)"
  return (
    <div className="App">
      <header className="App-header">
        <div className='dot-container'>
          <span className='dot' id='dot1' style={{ backgroundColor: dot_rgb_1 }}></span>
          <span className='dot' id='dot2' style={{ backgroundColor: dot_rgb_2 }}></span>
          <span className='dot' id='dot3' style={{ backgroundColor: dot_rgb_3 }}></span>
        </div>
        <p>
          COLOR GUESSER
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
