import React, { useContext } from 'react';

import '../styles/App.css';
import '../styles/Cart.css';

import { AuthContext } from "../context/AuthContext";
import MyButton from '../components/UI/button/MyButton';

// Страница корзины пользователя
const Cart = () => {
    // Состояние для хранения списка игр в корзине
    const { cartFlowers, setCartFlowers } = useContext(AuthContext);

    // Функция для удаления игры из корзины
    const removeFlower = (id) => {
        setCartFlowers(cartFlowers.filter(flower => flower.id !== id));
    };

    // Вычисление общей стоимости игр
    const total = cartFlowers.reduce((acc, flower) => acc + (typeof flower.price === 'number' ? flower.price : 0), 0);

    const purchaseFlowers = (event) => {
        event.preventDefault();
        alert("Покупка на сумму: " + total.toFixed(2));
    }

    return (
        <div className="mainContent">
            <h1 className="cart__title">Корзина</h1>
            {!cartFlowers.length
                ?
                <h2 className="cart__empty">Корзина пуста</h2>
                :
                <div className="cart__content">
                    {cartFlowers.map(flower => (
                        <div key={flower.id} className="flower">
                            <div className="flower__details">
                                <div className="flowerdetailsname">{flower.name}</div>
                                <div className="flowerdetailsprice">Стоимость: {typeof flower.price === 'number' ? flower.price.toFixed(2) : 'Н/Д'}</div>
                            </div>
                            <MyButton onClick={() => removeFlower(flower.id)}>Удалить из корзины</MyButton>
                        </div>
                    ))}
                    <div className="total">
                        Итого: <span>{total.toFixed(2)}</span>
                    </div>
                    <div className="buy">
                        <MyButton onClick={purchaseFlowers}>Перейти к оформлению заказа</MyButton>
                    </div>
                </div>
            }
        </div>
    );
};

export default Cart;