import { useState } from 'react';
import styles from './styles/OptionToTicket.module.scss'
import Option from "./Option";

function OptionToTicket(props){
    const [errorTent, setErrorTent] = useState(false)
    const [errorCamp, setErrorCamp] = useState(false)
   
    let maxTent = props.twoPerTent+props.threePerTent;
   function checkErrorFun(){

    let camp = !document.querySelector('input[type=radio][name=camp]:checked');

    console.log(maxTent>props.tickets)
    if(maxTent>props.tickets){
        setErrorTent(true);
    } else if (camp) {
        setErrorTent(false);
        setErrorCamp(true)
    }else{
        props.setCurrentStep(1)
    }
        
      
    
   }
return(
  
    <>
     
    <div className={styles.container}>
        <div>
            <Option name={"Regular Ticket"} price={2495} tickets={10}  setNumber={props.setTickets} number={props.tickets}/>    
        </div>
       

        <div>
            <p className={styles.headline}>Choose Tent(s)</p>
            <Option name={"2 Person tent"} price={249} maxTent={maxTent} tickets={props.tickets} setNumber={props.setTwoPerTent}  number={props.twoPerTent}/>
            <Option name={"3 Person tent"} price={349} maxTent={maxTent} tickets={props.tickets}  setNumber={props.setThreeoPerTent}  number={props.threePerTent}/>

        </div>
      
       
       <div className={styles.campContainer}>
            <p className={styles.headline}>Choose a Camp</p>
            
            <div>
                <label for="Svartheim">Svartheim</label> 
                <input type="radio" id="Svartheim" name="camp" value="Svartheim"/>
            </div>

            <div>
                <label for="Helfheim">Helfheim</label>
                <input type="radio" id="Helfheim" name="camp" value="Helfheim"/>
            </div>
                
            <div>
                <label for="Nilheim">Nilheim</label>
                <input type="radio" id="Nilheim" name="camp" value="Nilheim"/>
            </div>
            <div>
                <label for="Bruheim">Bruheimm</label>
                <input type="radio" id="Bruheim" name="camp" value="Bruheim"/>
            </div>
            <div>
                <label for="Kwneuheim">Kwneuheim</label>
                <input type="radio" id="Kwneuheim" name="camp" value="Kwneuheim"/>
            </div>
            

       </div>
       <p className={styles.error}>{errorTent?"-You can't buy more tents than tickets-":""}</p>
       <p className={styles.error}>{errorCamp?"-You need to choose a camp-":""}</p>
        
        {/* <button onClick={ ()=> maxTent>props.tickets?setErrorTent(true): props.setCurrentStep(1)}>Continue</button> */}
        <button onClick={checkErrorFun}>Continue</button>
    </div>
    
    </>
)

}

export default OptionToTicket;