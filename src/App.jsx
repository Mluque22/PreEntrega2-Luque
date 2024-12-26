import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"


function App() {

  return (
    <><NavBar /><ItemListContainer 
    greeting="Bienvenidos a la Store de NBA"
    texto="Encontra la indumentaria oficial de mejor calidad"/></>
  )
}

export default App
