import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DataService from "../../api/DataService";
import {getData} from "../../store/actions/home";
import classNames from "classnames";

const filterData = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
];

const Categories = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState('');
  const { filters } = useSelector(state => state.home)

  // const tags = [...new Set(data.map(i => i?.tags).flat())];

  // data.map(i => {
  //   i.tags.forEach(j => {
  //     if (!tags.includes(j)) {
  //       tags.push(j);
  //     }
  //   })
  // })

  const fetchFilter = async (value = '') => {
    const data = await DataService.filterData(value);
    dispatch(getData(data));
    setIsActive(value);
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={classNames({'active': isActive === ''})}
          onClick={() => fetchFilter()}
        >Все</li>
        {filters?.map((i, index) => (
          <li
            className={classNames({'active': isActive === i})}
          key={i}
          onClick={() => fetchFilter(i)}
          >{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;