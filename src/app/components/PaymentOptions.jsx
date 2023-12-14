
import styles from './styles/PaymentOptions.module.scss'
import React from 'react';

import Countdown from 'react-countdown';


 
  

    function PaymentOptions(props){

        const renderer = ({ minutes, seconds, completed }) => {
            if (completed) {
                props.setCurrentStep(0)
              }
              
              return <span>{minutes}:{seconds}</span>;
          };

      
     let subtotal = props.tickets*2397+props.twoPerTent*249+props.threePerTent*349;
    return(
        <>
        <div className={styles.container}>
        <div>
        <p>Contact info</p>
        <form action="#" method="get">
            <div>
                <input type="text" id="fname" name="fname" placeholder='Firstname'/>
                <input type="text" id="lname" name="lname" placeholder='Lastname'/>
            </div>
            <div>
                <input type="text" id="adresse" name="adresse" placeholder='Adresse'/>
            </div>
            <div>
                <input type="text" id="Country" name="Country" placeholder='Country'/>
                <input type="text" id="city" name="city" placeholder='City'/>
            </div>
            <div>
                <input type="email" id="email" name="email" placeholder='Email'/>
            </div>
            <div>
                <input type="tel" id="tel" name="tel" placeholder='Phone number' />
            </div>
           
            
            
            
            <input type="submit" value="Submit"/>
        </form>

        </div>
    
        <div className={styles.prisContainer}>
            <p>Card summery</p>
                <div> <p>Time to order:</p>
                 <Countdown date={Date.now() + 9000 } renderer={renderer} >
                    
                </Countdown> 
                </div>
                <div className={styles.prisElement}>
                    <div>
                        <p>Number of tickets:</p>
                        <p><span>{props.tickets}x</span> Foo fest</p>
                        <p>Regular ticket</p>

                    </div>
                    <div>
                        <p>2-person tent: {props.twoPerTent}</p>
                        <p>3-person tent: {props.threePerTent}</p>

                    </div>
                    <div>
                        <p>Subtotal: {subtotal}kr.</p>
                    </div>
                    <div>
                        <p>Booking fee 99kr.</p>
                    </div>

                    <p>Total: {subtotal+99}</p>
                   
                </div>
            
        </div>
        </div>
        
        </>
    )
        
    
}

export default PaymentOptions;