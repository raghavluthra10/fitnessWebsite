import React from 'react'
import './CardItems.css'
import { Link } from 'react-router-dom';

const CardItems = (props) => {
    return (
    <divs>
        <Link>
            <div className='cardsContainer'>
                <Link to={props.destination}>
                    <img className='cardImage' src={props.src} alt={props.alt} className='cardImage' />
                    <div className='cardTitle'> {props.title} </div>  
                </Link>
          
            </div>        
        </Link>
    </divs>

    )}

export default CardItems
