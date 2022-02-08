import React from 'react';
import './style.css';
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getData} from "../../store/actions/home";
import DataService from "../../api/DataService";

const Home = () => {
  const dispatch = useDispatch();

  useEffect( async () => {
    const data = await DataService.fetchData();
    dispatch(getData(data));
  }, [])

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