import React from 'react';

import cl from './MySelect.module.css';

// Компонент стилизованного селекта
const MySelect = ({options, value, onChange}) => {
    return ( 
        <select
            className={cl.select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
}

export default MySelect;