import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


const Newsletter = () => {

    
    let date = new Date();
    let currentYear = date.getFullYear()


    return (
        <div className='container'>
                <h3 className='newsletterHeading'>
                    Join us and we will help you tick off destinations from your travel bucket list.
                </h3>

            <form>
                <input className='inputText' type='text' placeholder='email@example.com' ></input>
                <input className='inputSubmit' type='submit' ></input>
            </form>

            <div className='socialMediaHandles'>
                <FaFacebookSquare size='40px' color='#4267B2' />
                <FaInstagramSquare size='40px' color='#4c68d7' />
                <FaTwitterSquare size='40px' color='#1DA1F2' />
                
            </div>

            <div className='termsCondition'>
                <Link to='/termsConditions' > Terms & Conditions   </Link>
                  |  
                 <Link to='privacyPolicy' >   Privacy Policy   </Link>
                  |  
                 <Link to='FAQs' > FAQ's </Link>
                
            </div>

            <div className='copyright' >
                Copyright © {currentYear}, OneStop. All Rights Reserved.    
            </div>

            
            
        </div>
    )
}

export default Newsletter
