import React, { useEffect } from 'react'
import Newsletter from '../Newsletter'
import './AboutUs.css'


const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div className='aboutContainer'>    
            <h1 className='aboutHeader'>
                    ABOUT
            </h1> 

            <div className='aboutInfo'>
                Our goal is to make health and fitness attainable, affordable and approachable.
            </div>
                
            <div className='aboutInfo'>
                We believe fitness should be accessible to everyone, everywhere,
                regardless of income level or access to a gym. That's why we offer 
                hundreds of free, full-length workout videos, the most affordable and 
                effective workout programs on the web, meal plans, and helpful health, 
                nutrition and fitness inform
            </div>

            <br/>

            <h2 className='aboutInfo'>
                We believe in unbiased, gimmick-free, research-backed information
            </h2>

            <div className='aboutInfo'>
                The only thing we endorse is eating unprocessed, whole foods, and 
                working out for a strong, healthy body. As a business, we believe 
                good things happen when you put people before profit.

            </div>   
        </div>

        <Newsletter  />

        </>
    )
}

export default AboutUs
