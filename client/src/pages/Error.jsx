import React from 'react';

import '../styles/App.css';
import '../styles/Error.css';

// Страница уведомления об ошибке
const Error = () => {
    return (
        <div className="mainContent">
            <h1 className="errorMessage">
                Error 404<br/>
                Page Not Found!
            </h1>
        </div>
    )
}

export default Error;