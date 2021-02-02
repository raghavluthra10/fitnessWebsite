import React, { useEffect } from 'react'
import './HowItWorks.css'
import { BsListCheck } from 'react-icons/bs'
import {  GiWeightLiftingUp} from 'react-icons/gi'
import { MdEventNote } from 'react-icons/md'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BsArrowLeftRight } from 'react-icons/bs'
import Newsletter from '../Newsletter'

const HowItWorks = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
    <>
    <div className='howItWorksContainer'>
        <div className='howItWorksRow1'>
            <div className='fitnessAssessment' id='firstChildHowItWorks'>
                
                <div className='fitnessAssessmentHeading'>
                <BsListCheck className='howItWorksIcons' />
                FITNESS ASSESSMENT
                </div>

                <div className='fitnessAssessmentDesc'>
                    Within 24 hours you will be emailed a questionnaire
                    form from me. Answer honestly and provide as much 
                    detail as you can. Your answers will help me build 
                    the best custom plan for your goals and your body’s needs.
                </div>
            </div>

            <div className='gettingStarted' >
                <div className='gettingStartedHeading'>
                    <GiWeightLiftingUp className='howItWorksIcons' />
                    GETTING STARTED
                </div>
                <div className='gettingStartedDesc'>
                    Once you receive your program, it is expected 
                    that you will begin within 48 hours. If you have any 
                    questions or need help or assistance getting started, 
                    support is always available via email. You will also get 
                    my phone number to have 24*7 communication with me.
                </div>
            </div>
        </div>
            
        <div className='howItWorksRow2'>
            <div className='customProgram' id='firstChildHowItWorks'>
                <div className='customProgramHeading'>
                        <MdEventNote className='howItWorksIcons'  />
                        CUSTOM PROGRAM
                </div>

                <div className='customProgramDesc'>
                    The information from the questionnaire will be used to gather all 
                    information needed to create your custom program including: physique 
                    stats, health history, current health status, injuries you may have (if any), 
                    your current eating/exercise habits, any food allergies and your goals.
                </div>
            </div>

            <div className='weeklyCheckins'>
                <div className='weeklyCheckinsHeading' >
                    <MdPlaylistAddCheck  className='howItWorksIcons'  />
                    WEEKLY CHEK-INS
                </div>

                <div className='weeklyCheckinsDesc'>
                Check-ins are to be made weekly on the day stated in your program.
                </div>
            </div>
        </div>
            
        <div className='howItWorksRow3'>
            <div className='photoAssessment'  id='firstChildHowItWorks'>
                <div className='photoAssessmentHeading' >
                    <FaUserAlt className='howItWorksIcons'  />
                    PHOTO ASSESSMENT
                </div>

                <div className='photoAssessmentDesc'>
                    You will also be required to submit current pictures of 
                    yourself. Once the questionnaire is completed and returned, 
                    your program will then be prepared and delivered to you via 
                    email within 6 business days (usually sooner).
                </div>
            </div>

            <div className='adjustments'>
                <div className='adjustmentsHeading'>
                    <BsArrowLeftRight className='howItWorksIcons'/>
                    ADJUSTMENTS
                </div>

                <div className='adjustmentsDesc'>
                    Your custom program will be changed/adjusted at least bi-weekly 
                    depending on your progress and goals.
                </div>
            </div>
        </div>
    </div>

        <Newsletter />
    </>
    )
}

export default HowItWorks
