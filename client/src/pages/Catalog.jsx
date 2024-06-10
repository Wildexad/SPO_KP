import React, { useState, useEffect, useContext } from 'react';

import '../styles/App.css';
import '../styles/Catalog.css';

import FlowerList from '../components/FlowerList';
import FlowerFilter from '../components/FlowerFilter';
import { useFlowers } from '../hooks/useFlowers';
import FlowerService from '../API/FlowerService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { AuthContext } from '../context/AuthContext';

// Страница каталога игр
const Catalog = () => {

  const {user} = useContext(AuthContext);
  const [flowers, setFlowers] = useState([]); // состояние списка цветов в каталоге
  const [filter, setFilter] = useState({sort: '', query: ''}); // состояние сортировки и поискового запроса

  // состояние итогового списка постов после фильтра и сортировки
  const sortedAndSearchedFlowers = useFlowers(flowers, filter.sort, filter.query);

  // метод получения игр в каталог
  const [fetchFlowers, isFlowersLoading, flowerError] = useFetching(async () => {
    const response = await FlowerService.GetAll(user.token);
    setFlowers(response.flowers);
  })

  // хук, используется при первой загрузке страницы
  useEffect(() => {
    fetchFlowers();
  }, [])

  return (
    <div className="mainContent">
      <h1 className="catalog__title">Каталог цветов</h1>
      <FlowerFilter
        filter={filter}
        setFilter={setFilter}
      />
      {flowerError && <div className="catalog__flowerError">{flowerError}!</div>}
      {isFlowersLoading
        ? <div className="loader__block"><Loader /></div>
        : <FlowerList flowers={sortedAndSearchedFlowers} title='Каталог цветов' />
      }
    </div>
  );
}

export default Catalog;