import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return ( 
        <header>
            <img src={logo} alt='Notedly Logo' height='40' />
        </header>
    );
}
 
export default Header;