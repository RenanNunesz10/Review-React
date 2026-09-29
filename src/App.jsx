import './App.css'
import city from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'

const cars = [
          { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
          { id: 2, brand: "KIA", color: "Branco", km: 200000 },
          { id: 3, brand: "Renault", color: "Azul", km: 32000 },
        ];

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
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Renan" />

        <CarDetails brand="Ford" color="Azul" km={10000} />
        <CarDetails brand="VW" color="Vermelho" km={535} />
        <CarDetails brand="Fiat" color="Branco" km={0} />

        {/* loop com array de obj */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}

        <Fragment />
      </div>
    </>
  )
}

export default App
