import React from 'react'
import { Dashboard } from './Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA,  faHome,  faLock,  faPhone } from '@fortawesome/free-solid-svg-icons';
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">

                <ul className="nav  nav-fill d">
                    <li className="nav-item"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><samp></samp>
                        Home
                    </li>
                    <li className='nav-item'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <samp></samp>ContactUs</li>
                    <li className='nav-item'><FontAwesomeIcon icon={faA}></FontAwesomeIcon> <samp></samp> Aboutus</li>
                    <li className='nav-item'> <FontAwesomeIcon icon={faLock}></FontAwesomeIcon><samp></samp> Login</li>
                </ul>

            </nav>
            <Dashboard />
        </div>
    )
}
