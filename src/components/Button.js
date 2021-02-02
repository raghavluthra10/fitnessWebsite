import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = [ 'btn--primary', 'btn--outline' ];

const SIZES = [ 'btn--medium', 'btn--large', 'btn--mobile', 'btn--wide', 'btn--newsletterSubmit' ];

const COLOR = [ 'primary', 'blue', 'red', 'green' ]

const Button = ({ 
    buttonStyle,
    buttonSize,
    buttonColor,
    type,
    onClick,
    children,
    destination
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

    return (
        <>
        <Link to={destination}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}
            ${checkButtonColor}`} onClick={onClick}
            type={type} children={children}
            >
                {children}
            </button>  
        </Link>
         
        </>
    )
}

export default Button
