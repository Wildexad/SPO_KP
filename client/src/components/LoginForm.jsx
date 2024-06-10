import React, { useState, useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { useFetching } from "../hooks/useFetching";
import UserService from "../API/UserService";
import Loader from "./UI/Loader/Loader";
import { useNavigate } from "react-router-dom";

// Компонент формы авторизации
const LoginForm = () => {
    const {setUser} = useContext(AuthContext); // Подтягиваем состояние из контекста
    
    const navigate = useNavigate();

    const transitToCatalog = () => {
        navigate(`/flowers`, {replace: false});
    }
    
    // Состояния формы авторизации
    const [logFormStep, setLogFormStep] = useState(0);
    const [logFormData, setLogFormData] = useState({login: '', password: ''});

    // Обращение к стороннему апи логина через сервис с помощью обертки
    const [fetchUser, isLoginLoading, loginError] = useFetching(async () => {
        const response = await UserService.Login(logFormData.login, logFormData.password);
        setUser(response.user);
        //console.log(response);
    })

    // Функция отправки формы
    const Login = async (event) => {
        event.preventDefault();
        if (logFormStep === 1) {
            fetchUser();
            setLogFormData({login: '', password: ''});
            transitToCatalog();
        }
        else {
            setLogFormStep(1);
        }
    };

    return (
        <div className="login_block">
            <form onSubmit={Login}>
                {logFormStep === 0
                ? 
                    (
                        <button className="login_button" type="submit">
                            Авторизация
                        </button>
                    )
                :
                    (
                        <>
                            {loginError && <div className="login_error">{loginError}!</div>}
                            
                            {isLoginLoading
                            ?
                            <div className="loader_block"><Loader /></div>
                            :
                            <>
                                <label>
                                    Вход в аккаунт Flower Heaven
                                </label>
                                <input
                                    value={logFormData.login}
                                    onChange={e => setLogFormData({...logFormData, login: e.target.value})}
                                    required={true}
                                    type="text"
                                    placeholder="Введите логин"
                                    className="login_input"
                                />
                                <input
                                    value={logFormData.password}
                                    onChange={e => setLogFormData({...logFormData, password: e.target.value})}
                                    required={true}
                                    type="password"
                                    placeholder="Введите пароль"
                                    className="login_input"
                                />
                                <button className="login_button" type="submit">
                                    Войти
                                </button>
                            </>
                            }
                        </>
                    )}
            </form>
        </div>
    )
}

export default LoginForm;