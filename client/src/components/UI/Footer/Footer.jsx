import React from 'react';

import cl from './Footer.module.css';

// Компонент подвала
const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__block}>
                <h3 className={cl.footer__heading}>Политика сайта</h3>
            </div>
            <div className={cl.footer__block}>
                <h3 className={cl.footer__heading}>Контакты</h3>
            </div>
            <div className={cl.footer__bottom}>
                <p>&copy; Copyright</p>
            </div>
        </footer>
    )
}

export default Footer;