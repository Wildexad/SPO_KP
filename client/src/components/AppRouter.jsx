import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context/AuthContext';
import Loader from './UI/Loader/Loader';

// Компонент, реализующий роутинг
const AppRouter = () => {
    const {user, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return ( 
        user
            ?
            <main className="app_private_routes">
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            element={route.element}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Routes>
            </main>
            :
            <main className="app_public_routes">
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            element={route.element}
                            path={route.path}
                            key={route.path}
                        />
                    )}
                </Routes>
            </main>
        
    );
}

export default AppRouter;