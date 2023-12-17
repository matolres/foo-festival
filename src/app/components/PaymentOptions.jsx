
import styles from './styles/PaymentOptions.module.scss'
import React from 'react';

import Countdown from 'react-countdown';


    function PaymentOptions(props){

      // laver en array ud af antallet af billetter
      const ticketNames = Array(props.tickets).fill('');

        //the countdownfunction 
        const renderer = ({ minutes, seconds, completed }) => {
            if (completed) {
                props.setCurrentStep(0)
              }
              
              return <span>{minutes}:{seconds}</span>;
          };




          // når onSubmit aktiveres 
           function sendPostRequest(event){
            event.preventDefault();

            //tomt object er det som skal sendes med så vi har navnene på billeter 
            const updatedTicketData = {};

           //   
            ticketNames.forEach((e,i)=>{
              console.log(event.target.elements[`ticket${i + 1}`].value);
              updatedTicketData[`billet-${i + 1}`] = event.target.elements[`ticket${i + 1}`].value;
            })
            
            console.log(updatedTicketData);
            sendInfo(event,updatedTicketData);

           }

            async function sendInfo(event,updatedTicketData) {
                
                
                  const response = await fetch(`https://bzhijbeuftyjosmsqsba.supabase.co/rest/v1/foo-table`, {
                    method: 'POST',
                    headers: {
                      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6aGlqYmV1ZnR5am9zbXNxc2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NDUwMTUsImV4cCI6MjAxODMyMTAxNX0.0RS_C54MUy2Wc2uyLOVWqbsPYljdCI1xF8xEihsWfJg",
                      'Content-Type': 'application/json',
                      "Prefer": "return=minimal",
                    },
                    body: JSON.stringify({
                      first_name: event.target.elements.fname.value,
                       last_name: event.target.elements.lname.value,
                       address: event.target.elements.adress.value,
                       country: event.target.elements.country.value,
                       city: event.target.elements.city.value,
                       email: event.target.elements.email.value,
                       phone: event.target.elements.tel.value?event.target.elements.tel.value:0,
                      ticketsName: updatedTicketData,
                    }),
                  });
                  console.log(response);
               
              
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }else{
                    reserveSpot();
                  }
              
              };


              
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
            

              
          

      
     let subtotal = props.tickets*2397+props.twoPerTent*249+props.threePerTent*349;
    return(
        <>
        <form onSubmit={sendPostRequest}>
        <div className={styles.container}>
        <div>
        <p>Contact info</p>
        <div className={styles.inputsection}>
        
            <div>
              
                <input type="text" id="fname" name="fname" placeholder='Firstname' required/>
                <input type="text" id="lname" name="lname" placeholder='Lastname' required/>
            </div>
            <div>
                <input type="text" id="adress" name="adress" placeholder='Adress' required/>
            </div>
            <div>
                <input type="text" id="Country" name="country" placeholder='Country' required/>
                <input type="text" id="city" name="city" placeholder='City' required/>
            </div>
            <div>
                <input type="email" id="email" name="email" placeholder='Email' required/>
            </div>
            <div>
                <input type="tel" id="tel" name="tel" placeholder='Phone number' required/>
            </div>
            <br />
            <hr />

            {/* laver ligså mange input som der er billetter  */}
            {ticketNames.map((ticketName, index) => (
              <div key={index}>
                <label>{`billet ${index + 1}:`}</label>
                <input name={`ticket${index + 1}`}
                  type="text"
                placeholder='Name'
                required
                />

              </div>
            ))}

              
           
            </div>
            

        </div>
    
        <div className={styles.prisContainer}>
            <p>Card summery</p>
                <div> <p>Time to order:</p>
                 <Countdown date={Date.now() + 900000 } renderer={renderer} >
                    
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

                    <div >
                  <label for="creditCard"> Credit card</label>
                  
                  <input id='creditCard'   type="radio"  name="pay" value="mobilepay"/> 
            </div>
            <div >
              <label for="mobilpay"> Mobilpay</label>
                  
                  <input id='mobilpay'   type="radio"  name="pay" value="mobilepay" required/> 
            </div>
            <button>Place order</button>
                   
                </div>
            
        </div>
        </div>
        </form>
        
        </>
    )
        
    
}

export default PaymentOptions;