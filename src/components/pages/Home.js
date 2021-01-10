import React from 'react'
import './Home.css'
import CardItems from '../CardItems'
import Newsletter from '../Newsletter'
import Button from '../Button'

function Home() {
    return (
        <> 
        <div className='homeImage'>
            <h1 className='intro' >
                YOUR ONE STOP FOR TRAVEL EXPERIENCES
            </h1> 

            <div className='introBtn'>
            <Button  
                className='introBtn'
                buttonStyle='btn--primary'
                buttonColor='green'
                buttonSize='btn--wide'
                children='click here'
                />
            </div>
        </div>
       
        <div className='textimageContainer'>
            <div className='textToLeft'>
                <h1> Where does it come from? </h1>

                <br></br>
               
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of 
                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                the cites of the word in classical literature, discovered the undoubtable source. 
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on 
                the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>

            <div className='imageToRight'>

            </div>
        </div>

        <div className='cardHolder'>

            <CardItems 
                src='https://images.unsplash.com/photo-1493713838217-28e23b41b798?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt='Water Fall'
                title='Water Fall' 
            />  

            <CardItems 
                src='https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg'
                alt='Desert'
                title='Desert'
            />

        </div> 

        <div className='cardHolder'>

            <CardItems 
                src='https://cdn.cdnparenting.com/articles/2018/08/602444213-H.jpg'
                alt='Mountains'
                title='Mountains'
            />

            
            <CardItems 
                src='https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'
                alt='beach'
                title='Beach'
            />
            
        </div>
        



        <Newsletter  />
            
   

            
        </>
    )
}

export default Home
