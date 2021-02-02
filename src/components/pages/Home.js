import React from 'react'
import './Home.css'
import Newsletter from '../Newsletter'
// import Button from '../Button'
import AboutSection from '../AboutSection'
import Cards from '../Cards'
import Hero from '../Hero'

function Home() {
    return (
    <>
    <Hero  />
        
    <Cards />       

    <AboutSection  />

    <Newsletter  />
    
    </>
    )
}

export default Home


// add scrolling photo effect in the hero section