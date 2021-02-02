import React from 'react'
import CardItems from './CardItems';
import './Cards.css'


const Cards = () => {
    return (
        
    <div className='cardHolderContainer'>
        <h3 className='welcomeTo'>
            Welcome To 
        </h3>
        <h1 className='onestopCoaching'>
            OneStop Coaching
        </h1>

        <CardItems 
            src='https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='how it works'
            title='HOW IT WORKS'
            destination='/howitworks'
            
        />  

        <CardItems 
            src='https://images.unsplash.com/photo-1543975200-8e313fb04fc7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='transformation programs'
            title='TRANSFORMATION PROGRAMS'
            destination='/programs' 
        />

        <CardItems 
            src='https://images.unsplash.com/photo-1576511420003-e33641629f94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='clients results'
            title='CLIENTS RESULT'
            destination='/clientresults'
        />
    </div> 
         
    )
}

export default Cards
