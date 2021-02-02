import React from 'react'
import './ContactUs.css'
import Button from '../Button'
import Newsletter from '../Newsletter'
import emailjs from 'emailjs-com'

const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9an8mtr', 'template_1mv6ei7', e.target, 'user_RFS2ES1jZUv0hOVFvo27Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (

        <>
        <div className='contactUsContainer'>
            <div className='introContactUs'>
                Contact Us
            </div>

            <form onSubmit={sendEmail} className='contactUsForm'>
                  
                <input type='text' id='fname' placeholder='First Name' name='fname' className='formName'></input>

                <br></br>
                
                <input type='text' id='email' placeholder='example@email.com' name='email' className='formEmail'></input>

                <br></br>
                
                <input type='text' id='subject' placeholder='Your Subject' name='subject' className='formSubject'></input>

                <br></br>

                <textarea type='text' id='message' placeholder='Write Your Message Here...' name='message' className='formMessage'></textarea>

                <br></br>

                <Button 
                className='contactSubmit'
                children='Submit'
                buttonColor='red'
                buttonSize='btn--wide'
                buttonStyle='btn--primary'
                />
            </form>
        </div>

        <Newsletter  />

        </>
    )
}

export default ContactUs
