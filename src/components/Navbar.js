import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosFitness } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {

    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar'>
        
            <div  className='logo inline-block'>
                <Link to='/' className=''>
                    <IoIosFitness/>
                    OneStop Fitness
                </Link>    
            </div>

            <div className='handleClick' onClick={handleClick}>
                    { click ? <FaTimes /> : <FaBars /> }
            </div>

            <div className=' menuDiv inline-block '  >
                <ul className={click ? 'menuItemsActive' : 'menuItems'}>
                    <li onClick={closeMobileMenu}>
                        <Link to='/' > Home </Link>
                    </li>

                    <li onClick={closeMobileMenu}>
                        <Link to='/programs' > Programs </Link>
                    </li>

                    <li onClick={closeMobileMenu}>
                        <Link to='/howitworks' > How it works </Link>
                    </li>

                    <li onClick={closeMobileMenu}>
                        <Link to='/clientresults' > Transformations </Link>
                    </li>

                    <li onClick={closeMobileMenu} >
                        <Link to='/aboutus' > About Us </Link>
                    </li>

                    <li onClick={closeMobileMenu} >
                        <Link to='/contactus' > Contact Us </Link>
                    </li>

                </ul>
            </div>

        </div>
    )
}


export default Navbar
