import React from 'react'
import './AboutSection.css'
import Button from './Button'

const AboutSection = () => {
    return (
        <div className='aboutSectionBody'>
            
            <div className='aboutSectionImage'>
                <img src='https://qph.fs.quoracdn.net/main-qimg-48f31ec83f9c73a4e1e75848e10e054f' 
                alt='My sample picture' 
                className='aboutSectionMyPhoto'
                />
            </div>

            <div className='AboutSectionText'>
                My name is Mr. Somebody and i am a certified fitness trainer who can help
                you achieve the body of your dreams.
                <br></br>
                I have been actively involved in the fitness industry for the last 10 years
                and have been training clients offline for the last 8 years. And now here I
                am to make my mark in the online training industry as well.
                <br></br>
                Through my programs and one-to-one coaching, my goal is to make you self-sufficient
                in terms of achieving your fitness goals and give you the knowledge that will not only
                give you the body of your dreams but also maintain it life long.


                <div className='aboutSectionButton'>
                    <Button 
                    buttonStyle='btn--outline' 
                    buttonColor='red'
                    buttonSize='btn--mobile'
                    children='READ MORE'
                    destination='/aboutus'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
