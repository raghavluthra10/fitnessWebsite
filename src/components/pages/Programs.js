import React from 'react'
import { useEffect } from 'react'
import './Programs.css'
import Newsletter from '../Newsletter'
import ProgramCard from '../ProgramCard'

const Programs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div className='programsContainer'>

            <div className='programsIntro'> Programs for those who are willing to achieve their fitness goals </div>

            <div className='cardsContainer'>

                <ProgramCard  
                price='$ 1K'
                duration='4 weeks'
                desc='
                PERSONALIZED NUTRITION PLANS: YOU CHOOSE THE FOODS
                CUSTOM WORKOUT PROGRAMS
                
                REGIMENTED CARDIO PLANS
                
                ABDOMINAL ROUTINES
                
                24/7 SUPPORT
                
                WEEKLY CHECKINS
                
                TIPS, ADVICE AND MOTIVATION
                '
                />

                <ProgramCard  
                price='$ 2K'
                duration='8 weeks'
                desc='
                PERSONALIZED NUTRITION PLANS: YOU CHOOSE THE FOODS

                CUSTOM WORKOUT PROGRAMS

                REGIMENTED CARDIO PLANS

                ABDOMINAL ROUTINES

                24/7 SUPPORT

                WEEKLY CHECKINS

                TIPS, ADVICE AND MOTIVATION
                '
                />

                <ProgramCard  
                price='$ 3K'
                duration='12 weeks'
                desc='
                PERSONALIZED NUTRITION PLANS: YOU CHOOSE THE FOODS
                CUSTOM WORKOUT PROGRAMS
                
                REGIMENTED CARDIO PLANS
                
                ABDOMINAL ROUTINES
                
                24/7 SUPPORT
                
                WEEKLY CHECKINS
                
                TIPS, ADVICE AND MOTIVATION
                '
                />

            </div>

            

        </div>



        <Newsletter  />
        </>
    )
}

export default Programs
