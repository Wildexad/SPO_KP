import React from "react";
import classes from './MyButton.module.css';

// Компонент стилизованной кнопки
const MyButton = ({children, ...props}) => {
    return (
        <button className={classes.myButton} {...props} >
            {children}
        </button>
    )
}

export default MyButton;