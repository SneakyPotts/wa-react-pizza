import './App.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Layout from "./hoc/Layout";
import {Provider} from "react-redux";
import store from "./store/reducers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
