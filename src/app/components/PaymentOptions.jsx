
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

           function sendPostRequest(event){
            event.preventDefault();
            // console.log(props.postId);
            // fetch(`${process.env.NEXT_PUBLIC_URL}fullfill-reservation`, {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         id: props.postId,
            //       }),
            //   })
            //     .then(response => console.log(response))
            //     .catch(err => console.error(err));
            //reserveSpot();
            sendInfo();
           }

            async function reserveSpot(){
                console.log("kør");
                try {
                  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}fullfill-reservation`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: props.postId,
                    }),
                  });
          
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }

                const result = await response.json();
                console.log(result);
          
                  
                } catch (error) {
                  console.error('Fejl ved POST-anmodning:', error);
                  
                }
              };

              // -- 
            //   async function sendInfo(){
            //     console.log("sendInfo");
            //     // try {
            //       const response = await fetch(`https://bzhijbeuftyjosmsqsba.supabase.co/rest/v1/foo-table`, {
            //         method: 'POST',
            //         headers: {
            //          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6aGlqYmV1ZnR5am9zbXNxc2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NDUwMTUsImV4cCI6MjAxODMyMTAxNX0.0RS_C54MUy2Wc2uyLOVWqbsPYljdCI1xF8xEihsWfJg",
            //           'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({
            //             first_name: "casper",
            //             last_name: "bisgaard",
            //             address:"sdf",
            //             country:"sdfdsf",
            //             city:"sdfdsf",
            //             email:"sdfsdf",
            //             phone:28228,
            //             ticketsName:{}
            //         }),
            //       });
          
            //       if (!response.ok) {
            //         throw new Error('Network response was not ok');
            //       }

            //     let result = await response.text();
            //     console.log(result);
          
                  
            //     // } catch (error) {
            //     //   console.error('Fejl ved POST-anmodning:', error);
            //     //   console.log(result);
                  
            //     // }
            //   };
            async function sendInfo() {
                console.log("sendInfo");
               // try {
                  const response = await fetch(`https://bzhijbeuftyjosmsqsba.supabase.co/rest/v1/foo-table`, {
                    method: 'POST',
                    headers: {
                      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6aGlqYmV1ZnR5am9zbXNxc2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NDUwMTUsImV4cCI6MjAxODMyMTAxNX0.0RS_C54MUy2Wc2uyLOVWqbsPYljdCI1xF8xEihsWfJg",
                      'Content-Type': 'application/json',
                      "Prefer": "return=minimal",
                    },
                    body: JSON.stringify({
                      first_name: "nu",
                      last_name: "bisgaard",
                      address: "sdf",
                      country: "sdfdsf",
                      city: "sdfdsf",
                      email: "sdfsdf",
                      phone: 28228,
                      ticketsName: {}
                    }),
                  });
                  console.log(response);
               
              
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
              
              };


              
          

      
     let subtotal = props.tickets*2397+props.twoPerTent*249+props.threePerTent*349;
    return(
        <>
        <div className={styles.container}>
        <div>
        <p>Contact info</p>
         <form onSubmit={sendPostRequest}> 
            <div>
                <input type="text" id="fname" name="fname" placeholder='Firstname'required/>
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
           
            <button>click</button>
     </form> 

        </div>
    
        <div className={styles.prisContainer}>
            <p>Card summery</p>
                <div> <p>Time to order:</p>
                 <Countdown date={Date.now() + 300000 } renderer={renderer} >
                    
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