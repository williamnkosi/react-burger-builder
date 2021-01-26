import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';
import Classes from './Logo.css';


const Logo = () => {
    return (
        <div className={Classes.Logo}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default Logo
