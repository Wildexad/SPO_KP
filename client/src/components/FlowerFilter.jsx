import React from 'react';

import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

// Компонент для фильтрации постов
const FlowerFilter = ({filter, setFilter}) => {
    return ( 
      <div className="flowerFilter">
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'id', name: 'Сортировка по id'},
            {value: 'name', name: "Сортировка по названию"}
          ]}
        />
      </div>
    );
}

export default FlowerFilter;