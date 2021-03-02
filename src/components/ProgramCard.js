import React from 'react'
import Button from './Button'
import './ProgramCard.css'

const ProgramCard = (props) => {
    return (
        <div className='programCardContainer'>
            <div className='cardPrice'>
                {props.price}
            </div>

            <div className='cardDuration'>
                {props.duration}
            </div>

            <div className='cardDiscription'>
                {props.desc}
            </div>
            
            <br></br>

            <Button  
            className='programCardButton'
            buttonColor='red'
            buttonStyle='btn--primary'
            buttonSize='btn--mobile'
            children='START'
            />
        </div>
    )
}

export default ProgramCard
