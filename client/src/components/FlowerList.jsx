import React from "react";

import FlowerItem from './FlowerItem';

// Компонент списка постов
const FlowerList = ({flowers, title}) => {
    if (!flowers.length) {
        return (
            <h2 className="flowerList__title">
                Цветы не найдены...
            </h2>
        )
    }

    return (
        <div className="flowerList">
            <h2 className="flowerList__title">
                {title}
            </h2>
            <div className="flowerList__list">
                {flowers.map((flower) => 
                    <FlowerItem key={flower.id} flower={flower} />
                )}
            </div>
        </div>
    )
}

export default FlowerList;