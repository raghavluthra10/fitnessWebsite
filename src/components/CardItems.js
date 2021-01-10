import React from 'react'
import './CardItems.css'

const CardItems = (props) => {
    return (
        <>
        <div className='cards'>
            <div className='cardItems'>
                <img src={props.src} alt={props.alt} className='cardImage' />
                <div className='cardInfo'>
                    <h3 className='cardTitle'> {props.title} </h3>
                    <button> Explore </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardItems
