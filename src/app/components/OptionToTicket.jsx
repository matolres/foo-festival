
import styles from './styles/OptionToTicket.module.scss'
import Option from "./Option";

function OptionToTicket(props){
    let maxTent = props.twoPerTent+props.threePerTent;
   
return(
  
    <>
     
    <div className={styles.container}>
       <Option name={"Regular Ticket"} price={2495} tickets={10}  setNumber={props.setTickets} number={props.tickets}/>

       <p>Choose Tent(s)</p>
       {console.log(maxTent) }

       <Option name={"2 Person tent"} price={249} maxTent={maxTent} tickets={props.tickets} setNumber={props.setTwoPerTent}  number={props.twoPerTent}/>
       <Option name={"3 Person tent"} price={349} maxTent={maxTent} tickets={props.tickets}  setNumber={props.setThreeoPerTent}  number={props.threePerTent}/>
       
       <p></p>

        <button onClick={ ()=>  props.setCurrentStep(1)}>Forsæt</button>
    </div>
    
    </>
)

}

export default OptionToTicket;