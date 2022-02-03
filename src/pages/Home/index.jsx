import React from 'react';
import './style.css';
import Logo from "../../components/Logo";
import HeaderCart from "../../components/HeaderCart";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";

const Home = () => {
  return (
    <>

            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
              <PizzaBlock/>
            </div>
    </>
  );
};

export default Home;