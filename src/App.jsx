import { Fragment, useState } from "react";
import './App.css'
import city from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import MessageState from './components/MessageState'
import ChangeMessageState from './components/ChangeMessageState'

const cars = [
          { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
          { id: 2, brand: "KIA", color: "Branco", km: 200000 },
          { id: 3, brand: "Renault", color: "Azul", km: 32000 },
        ];

const handleMessage = (msg) => {
  setMessage(msg);
};

function App() {
  const [message, setMessage] = useState();

  function showMessage() {
    console.log("Evento do componente pai");
  }

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

        {/* children prop */}
        <Container>
          <p>Eu sou do componente superior</p>
        </Container>

        <Container>
          <div>
            <p>Eu também</p>
          </div>
        </Container>

        {/* event as prop */}
        <ExecuteFunction myFunction={showMessage} />

        {/* state lift */}
        <MessageState msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
        
      </div>
    </>
  )
}


export default App
