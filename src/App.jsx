import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simula 2 segundos de carga
  }, []);

  return (
    <CartProvider>
      <Router>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
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
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
