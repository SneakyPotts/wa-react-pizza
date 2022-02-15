import React, {useState} from 'react';
import './style.css';
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getData, getfilter} from "../../store/actions/home";
import DataService from "../../api/DataService";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.home);

  const [isLoading, setIsLoading] = useState(true);

  useEffect( async () => {
    const data = await DataService.fetchData();
    const tags = [
      ...new Set(
        data.map(i => i?.tags).flat()
      )
    ];

    dispatch(getData(data));
    dispatch(getfilter(tags));
    setIsLoading(false);
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoading
          ? (
            <p>Загрузка...</p>
          )
          : data?.map((i, index) => (
          <PizzaBlock
            key={index}
            data={i}
          />

        ))}
      </div>
    </>
  );
};

export default Home;