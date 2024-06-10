import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import MyButton from "./UI/button/MyButton";

// Компонент поста
const FlowerItem = (props) => {
    const {cartFlowers, setCartFlowers} = useContext(AuthContext);
    const navigate = useNavigate();

    // функция навигации к игре
    function transitToFlower(id) {
        navigate(`/flowers/${id}`, {replace: false})
    }

    // функция добавления товара в корзину
    const addOnCart = () => {
        const flower = props.flower;
        if (!cartFlowers.some(g => g.id === flower.id)) {
            setCartFlowers([...cartFlowers, flower]);
        }
    }

    return (
        <div className="flower">
            <div className="flower__content">
                <div className="flower__content__title">
                    {props.flower.name}
                </div>
                <div className="flower__content__details">
                    <div className="flower__content__details__item">
                        Id: {props.flower.id}
                    </div>
                    <div className="flower__content__details__item">
                        Вид: {props.flower.view}
                    </div>
                    <div className="flower__content__details__item">
                        Страна: {props.flower.country}
                    </div>
                    <div className="flower__content__details__item">
                        Сезон цветения: {props.flower.season}
                    </div>
                    <div className="flower__content__details__item">
                        Сорт: {props.flower.variety}
                    </div>
                    <div className="flower__content__details__item">
                        Цена: {props.flower.price}
                    </div>
                    <div className="flower__content__details__item">
                        Id поставщика: {props.flower.provider_id}
                    </div>
                    <div className="flower__content__details__item">
                        Id продавца: {props.flower.vendor_id}
                    </div>
                </div>
            </div>
            <div className="flower__buttons">
                <MyButton onClick={() => transitToFlower(props.flower.id)}>
                    Открыть страницу игры
                </MyButton>
                <MyButton onClick={addOnCart}>
                    Добавить в корзину
                </MyButton>
            </div>
        </div>
    )
}

export default FlowerItem;