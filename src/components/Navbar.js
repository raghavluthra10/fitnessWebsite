import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiNavigation } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button'

export const Navbar = () => {

    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);
    // const [ navTitle, setNavTitle ] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    


    window.addEventListener('resize', showButton);

    return (
        <div className='navbar'>
        
            <div  className='logo'>
                <Link to='/' className=''>
                    <BiNavigation/>
                    One Stop
                </Link>    
            </div>

            <div className='handleClick' onClick={handleClick}>
                    { click ? <FaTimes /> : <FaBars /> }
            </div>

            <div className=' menuDiv '  >
                <ul className={click ? 'menuItems active' : 'menuItems'}>
                    <li className=' slide ' onClick={closeMobileMenu}>
                        <Link to='/' > Home </Link>
                    </li>

                    <li className=' slide '  onClick={closeMobileMenu} >
                        <Link to='/aboutus' > About Us </Link>
                    </li>

                    <li className=' slide '  onClick={closeMobileMenu} >
                        <Link to='/contactus' > Contact Us </Link>
                    </li>

                    <li className=' slide '  onClick={closeMobileMenu}>
                        <Button >
                            <Link to='/signin' > Sign In </Link>
                        </Button>
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Navbar
