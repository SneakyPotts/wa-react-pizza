import './App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "./hoc/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
