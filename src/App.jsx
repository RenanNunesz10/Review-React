import './App.css'
import city from './assets/city.jpg'

function App() {
  return (
    <>
      <div>
        <h1> Section 03</h1>
        <div>
          <img src="/img1.jpg" alt="Paisagem" />

          <img src={city} alt="Cidade Futurista" />
        </div>
      </div>
    </>
  )
}

export default App
