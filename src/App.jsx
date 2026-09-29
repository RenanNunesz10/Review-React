import './App.css'
import city from './assets/city.jpg'
import ManageData from './components/ManageData'

function App() {
  return (
    <>
      <div className="App">
        <h1> Section 03</h1>
        <div>
          <img src="/img1.jpg" alt="Paisagem" />

          <img src={city} alt="Cidade Futurista" />
        </div>
        <ManageData />
      </div>
    </>
  )
}

export default App
