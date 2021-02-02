import React, { useEffect, useState } from 'react'
import './ClientResults.css'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Newsletter from '../Newsletter'


const images = [
    'https://i.ytimg.com/vi/c0fZuUCLcMI/maxresdefault.jpg',
    'https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/transformation/noah-ellis.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/716yDgSzSZL.jpg',
    'https://i.ytimg.com/vi/IU9kB0SXh5g/maxresdefault.jpg',
    'https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000558112702.jpg',
    'https://www.thesun.co.uk/wp-content/uploads/2019/11/NINTCHDBPICT000537489419-e1573079997288.jpg'
]

const ClientResults = () => {

    // const [ click, setClick ] = useState(false)
    // const [ openIt, setOpenIt ] = useState({ photoIndex:0, isOpen: false })

  

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div className='clientResultsContainer'>
        
            <div className='bodyTransformationHeading'>
                BODY TRANSFORMATIONS
            </div>

            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className='testimonialGroup1'>
                        <img src={images[0]} alt='client 1' className='testimonials'  id='firstChild1' /> 
                        <img src={images[1]} alt='client 2' className='testimonials'  />
                    </div>

                    <div className='testimonialGroup2'>
                        <img src={images[2]} alt='client 3' className='testimonials'  id='firstChild2'/>
                        <img src={images[3]} alt='client 4' className='testimonials'  />
                    </div>

                    <div className='testimonialGroup3'>
                        <img src={images[4]} alt='client 5' className='testimonials'  id='firstChild3' />
                        <img src={images[5]} alt='client 6' className='testimonials'  />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
            


        </div>

        <Newsletter  />

        </>
    )
}

export default ClientResults
