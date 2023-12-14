import { useState, useEffect } from 'react';
import styles from './styles/OptionToTicket.module.scss'
import Option from "./Option";

function OptionToTicket(props){
   
    const [errorTent, setErrorTent] = useState(false)
    const [errorCamp, setErrorCamp] = useState(false)
    const [errorSpots, setErrorSpots]= useState(false)

    const [data, setData] = useState(null);
   
    let maxTent = props.twoPerTent+props.threePerTent;
const checkErrorFun = ()=>{
    // event.preventDefault();
    

    let camp = document.querySelector('input[type=radio][name=camp]:checked');
    //console.log(props.tickets > camp.getAttribute('data-available'));
    //console.log(maxTent>props.tickets)
    if(maxTent>props.tickets){
        setErrorTent(true);
        setErrorCamp(false)
        setErrorSpots(false);
    } else if (!camp) {
        setErrorTent(false);
        setErrorCamp(true)
        setErrorSpots(false);
    }else if(props.tickets > camp.getAttribute('data-available')){
        setErrorSpots(true);
        setErrorTent(false);
        setErrorCamp(false)
    }else{
        props.setCurrentStep(1)
    }
}

    
  
    useEffect(() => {
      // Funktion for at hente data
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_URL + 'available-spots', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
  
          const result = await response.json();
  
          // Opdater state med den hentede data
          setData(result);
  
          
        } catch (error) {
          console.error('Fejl ved hentning af data:', error);
        }
      };
  
      // Kald fetchData-funktionen når komponenten er blevet monteret
      fetchData();
    }, []); // Tomt array som dependency for at sikre, at useEffect kun kører ved mount
  
    // Nu kan du bruge data variablen i din komponent
    const handleUpdate = async (id) => {
    fetch(process.env.NEXT_PUBLIC_URL +'reserve-spot', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          "area": "Alfheim",
          "amount": 2
        }
      })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    handleUpdate();

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
                    {
                        data?
                        data.map((single, any)=>(
                            <div data-number={any} key={single.area}>
                                <label for={single.area} >{single.area} <span>{" - available spots: "+single.available}</span> </label>
                                <input data-available={single.available}  type="radio" id={single.area} name="camp" value={single.area}/>
                            </div>
                        )):"Loading camps"
                    }

                    

            </div>
            <p className={styles.error}>{errorTent?"-You can't buy more tents than tickets-":""}</p>
            <p className={styles.error}>{errorCamp?"-You need to choose a camp-":""}</p>
            <p className={styles.error}>{errorSpots?"spot is shit":""}</p>   

            <button onClick={checkErrorFun}>Gem valg</button>
        
    </div>
    
    
    </>
)

}

export default OptionToTicket;