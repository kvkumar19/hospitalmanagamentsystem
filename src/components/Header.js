import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHome,   faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div>

                <ul>
                    <li><a href="/"> <FontAwesomeIcon icon ={faHome}></FontAwesomeIcon>  Home</a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> AboutUs</a></li>
                    <li><a href="#contact">   <FontAwesomeIcon icon={faPhone} /> Contact</a></li>
                    <li><a href='#'> Login</a> </li>
                </ul>
              
            </div>
        </div>
    )
}

export default Header
