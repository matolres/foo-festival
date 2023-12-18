"use client"

import { useState } from 'react';
import OptionToTicket from '../components/OptionToTicket';
import PaymentOptions from '../components/PaymentOptions';
import ChooseTicket from '../components/ChooseTicket';
import Menu from "../components/Menu";
import styles from "../components/styles/PaySteps.module.scss";
import Image from 'next/image'
import OrderConfirmation from "../components/OrderConfirmation";


function PaySteps(){
const [currentStep, setCurrentStep] = useState(0);

const [ticketType, setTicketType] = useState("");
const [ticketPris, setTicketPris] = useState(0);


const [tickets, setTickets] = useState(1);
const [twoPerTent, setTwoPerTent] = useState(0);
const [threePerTent, setThreeoPerTent] = useState(0);
const [camp, setCamp]=useState("");
const [postId, setPostId] = useState(1);
const [userinfo, setUserinfo] = useState("");




const steps =[
{
    id:0,
    content: <ChooseTicket setCurrentStep={setCurrentStep} setTicketType={setTicketType} setTicketPris={setTicketPris} />

},
{
    id:1,
    content:<div className={styles.optiontoticket}>
       <OptionToTicket ticketPris={ticketPris} ticketType={ticketType} setPostId={setPostId} setCamp={setCamp} threePerTent={threePerTent} setThreeoPerTent={setThreeoPerTent}  setTwoPerTent={setTwoPerTent} twoPerTent={twoPerTent} tickets={tickets} setTickets={setTickets} setCurrentStep={setCurrentStep}/>
        
    </div>
},
{
    id:2,
    content:<div className={styles.paymentoption}>
        <PaymentOptions ticketType={ticketType} ticketPris={ticketPris} postId={postId} threePerTent={threePerTent} twoPerTent={twoPerTent} tickets={tickets} setCurrentStep={setCurrentStep}/>
    </div>

},
{
    id:3,

    content: <div className={styles.orderconfirmation}>
        <OrderConfirmation />

    </div>
}
]


   
    return(
        <main className={styles.main}>
            
            <div className={styles.image}>
            <Image 
                src="/festival-4401107_1920.jpg"
                layout='fill'
                objectFit='cover'
                alt="festival scene background"
                />
            </div>
        <Menu />
        {steps[currentStep].content}
        </main>
    )
}

export default PaySteps;