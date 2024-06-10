import React, { useContext, useEffect, useState } from 'react';

import '../styles/App.css';
import '../styles/Profile.css';

import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import UserService from '../API/UserService';
import { AuthContext } from '../context/AuthContext';

// Страница профиля пользователя
const Profile = () => {
    const {user} = useContext(AuthContext); // пользователь из контекста

    return (
        <div className="mainContent">
            <h1 className="profilePage__title">Профиль:</h1>
            <div className="profilePage__content">
                <div className="profile">
                    <div className="profile__content">
                        <div className="profile__content__item">
                            Уникальный Id пользователя: {user.uid}
                        </div>
                        <div className="profile__content__item">
                            Email: {user.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;