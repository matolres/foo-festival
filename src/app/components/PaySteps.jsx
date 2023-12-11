"use client"
import styles from './styles/PaySteps.module.scss'
import { useState } from 'react';
import OptionToTicket from "./OptionToTicket"


function PaySteps(){
const [currentStep, setCurrentStep] = useState(0)

const [tickets, setTickets] = useState(1);
const [twoPerTent, setTwoPerTent] = useState(0);
const [threePerTent, setThreeoPerTent] = useState(0);


const steps =[
{
    id:1,
    content:<div>
       <OptionToTicket threePerTent={threePerTent} setThreeoPerTent={setThreeoPerTent}  setTwoPerTent={setTwoPerTent} twoPerTent={twoPerTent} tickets={tickets} setTickets={setTickets} setCurrentStep={setCurrentStep}/>
        
    </div>
},
{
    id:2,
    content:<div>
        <p>Step 2</p>
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