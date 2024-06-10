import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import '../styles/App.css';
import '../styles/FlowerIdPage.css';

import { useFetching } from '../hooks/useFetching';
import FlowerService from '../API/FlowerService';
import Loader from '../components/UI/Loader/Loader';
import { AuthContext } from '../context/AuthContext';

// Страница определенной игры из каталога
const FlowerIdPage = () => {
    const {user} = useContext(AuthContext);
    const params = useParams(); // параметры из адресной строки
    const [flower, setFlower] = useState({}); // состояние объекта цветка

    // метод для получения данных игры
    const [fetchFlowerById, isLoading, error] = useFetching(async (id) => {
        const response = await FlowerService.GetById(id, user.token);
        setFlower(response.data);
    })

    // хук, активирующийся при загрузке страницы
    useEffect(() => {
        fetchFlowerById(params.id);
    }, [])

    return (
        <div className="mainContent">
            <h1 className="flowerIdPage__title">{flower.name}</h1>

            {isLoading
                ?
                <Loader />
                :
                <div className="flower">
                    {flower.id}<br/>
                    {flower.name}<br/>
                    {flower.view}<br/>
                    {flower.country}<br/>
                    {flower.season}<br/>
                    {flower.variety}<br/>
                    {flower.price}<br/>
                    {flower.provider_id}<br/>
                    {flower.vendor_id}
                </div>
            }
            
        </div>
    )
}

export default FlowerIdPage;