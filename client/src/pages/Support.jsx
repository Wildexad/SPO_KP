import React, { useState } from 'react';

import '../styles/App.css';
import '../styles/Support.css';

import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

// Страница поддержки
const Support = () => {
    const [modalSupport, setModalSupport] = useState(false); // состояние модального окна
    const [textArea, setTextArea] = useState(""); // состояние поля ввода в форму обратной связи

    const textareaChange = (event) => {
        setTextArea(event.target.value);
    }

    const feedbackformSubmit = (event) => {
        event.preventDefault();
        alert('Отправленное сообщение:\n' + textArea);
        setModalSupport(false);
        setTextArea("Опишите суть проблемы");
    }

    return (
        <div className="mainContent">
            <h1 className="supportPage__title">
                Добро пожаловать в раздел поддержки!<br/>
                Чем мы можем Вам помочь?
            </h1>
            <div className="popularQuestions">
                <h1 className="popularQuestions__title">
                    Популярные вопросы
                </h1>
                <div className="popularQuestions__list">
                    <div className="popularQuestions__item">
                        <div className="popularQuestions__item__content">
                            Если мне не понравится игра, могу ли я вернуть свои деньги?
                        </div>
                        <button className="popularQuestions__item__button">
                            Развернуть
                        </button>
                    </div>
                    <div className="popularQuestions__item">
                        <div className="popularQuestions__item__content">
                            Какими способами я могу оплатить товар?
                        </div>
                        <button className="popularQuestions__item__button">
                            Развернуть
                        </button>
                    </div>
                    <div className="popularQuestions__item">
                        <div className="popularQuestions__item__content">
                            Как активировать купленный ключ?
                        </div>
                        <button className="popularQuestions__item__button">
                            Развернуть
                        </button>
                    </div>
                </div>
            </div>
            <div className="anyQuestions">
                <MyButton onClick={() => setModalSupport(true)}>
                    Напишите нам
                </MyButton>
                <MyModal visible={modalSupport} setVisible={setModalSupport}>
                    <form onSubmit={feedbackformSubmit} className="feedbackform">
                        <label>
                            Опишите суть проблемы:
                            <textarea
                                className="feedbackform__textarea"
                                value={textArea}
                                onChange={textareaChange}
                            />
                        </label>
                        <MyButton>Отправить</MyButton>
                    </form>
                </MyModal>
            </div>
        </div>
    )
}

export default Support;