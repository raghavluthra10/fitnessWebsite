import React from 'react'
import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <div className='heroHomeImage'>
            <div className='heroIntro' >
                WE CAN TRANSFORM YOUR LIFE, WITH JUST ONE CLICK.
            </div> 

            <div className='heroIntroBtn'>
            <Button  
                className='introBtn'
                buttonStyle='btn--primary'
                buttonColor='red'
                buttonSize='btn--wide'
                children='STAR NOW'
                destination='/programs'
                />
            </div>
        </div>
    )
}

export default Hero
