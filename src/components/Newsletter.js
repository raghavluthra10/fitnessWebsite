import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import Button from './Button';


const Newsletter = () => {

    
    let date = new Date();
    let currentYear = date.getFullYear()


    return (
        <div className='newsletterContainer'>
                <h3 className='newsletterHeading'>
                    SIgn-up for our newsletter to get regular updates.
                </h3>

            <form>
                <input className='newsletterInputText' type='text' placeholder='email@example.com' ></input>
                <Button 
                className='newsletterinputSubmit'
                buttonStyle='btn--primary'
                buttonSize='btn--newsletterSubmit'
                buttonColor='red'
                children='submit'
                />
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
