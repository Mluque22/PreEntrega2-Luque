import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda NBA" texto="Encuentra productos oficiales de tu equipo favorito" />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
