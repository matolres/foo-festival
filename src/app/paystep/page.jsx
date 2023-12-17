"use client"

import { useState } from 'react';
import OptionToTicket from '../components/OptionToTicket';
import PaymentOptions from '../components/PaymentOptions';



function PaySteps(){
const [currentStep, setCurrentStep] = useState(0)

const [tickets, setTickets] = useState(1);
const [twoPerTent, setTwoPerTent] = useState(0);
const [threePerTent, setThreeoPerTent] = useState(0);
const [camp, setCamp]=useState("");
const [postId, setPostId] = useState(1);







    // let bodyContent = JSON.stringify({
    //     "area":"Nilfheim",
    //     "amount":200
    //   });
      

     
    //   fetch(process.env.NEXT_PUBLIC_URL + "reserve-spot", {
    //     "method": "PUT",
    //     "headers": {
    //       "Content-Type": "application/json"
    //     },
    //     "body": bodyContent
    //   })
    //   .then(response => response.json())
    //      .then(data => console.log(data));


const steps =[
{
    id:1,
    content:<div>
       <OptionToTicket setPostId={setPostId} setCamp={setCamp} threePerTent={threePerTent} setThreeoPerTent={setThreeoPerTent}  setTwoPerTent={setTwoPerTent} twoPerTent={twoPerTent} tickets={tickets} setTickets={setTickets} setCurrentStep={setCurrentStep}/>
        
    </div>
},
{
    id:2,
    content:<div>
        <PaymentOptions postId={postId} threePerTent={threePerTent} twoPerTent={twoPerTent} tickets={tickets} setCurrentStep={setCurrentStep}/>
    </div>

}
]


   
    return(
        <>
        {steps[currentStep].content}

      
        </>
    )
}

export default PaySteps;