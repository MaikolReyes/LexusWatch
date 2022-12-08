import React from "react";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </>
  )


}


// Exportando el componente para que pueda ser usado por otros componentes
export default App;
