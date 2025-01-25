import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenidos a la tienda NBA"
              texto="Encuentra productos oficiales de tu equipo favorito"
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting="Productos por categoría"
              texto="Elige tu categoría de productos"
            />
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
