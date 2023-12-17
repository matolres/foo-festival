import { useState, useEffect } from 'react';
import styles from './styles/OptionToTicket.module.scss'
import Option from "./Option";

function OptionToTicket(props){
   
    const [errorDescription, setErrorDescription] = useState("")
    const [data, setData] = useState(null);
   
    let maxTent = props.twoPerTent+props.threePerTent;
const checkErrorFun = (event)=>{
    event.preventDefault();
    let camp = document.querySelector('input[type=radio][name=camp]:checked');
    
    if(maxTent>props.tickets){
       setErrorDescription("You can't buy more tents than tickets")
    } else if (!camp) {
        setErrorDescription("You need to choose a camp")
    }else if(props.tickets > camp.getAttribute('data-available')){
        setErrorDescription("spot is shit")
    }else{
        props.setCamp(camp.value);

       // const reserveSpot = async () => {
        async function reserveSpot(){
            try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_URL}reserve-spot`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  area: camp.value,
                  amount: props.tickets,
                }),
              });
      
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
      
              const result = await response.json();
              console.log('Data blev opdateret:', result.id);
              if(result.message == "Reserved"){
               console.log(result);
                props.setPostId(result.id);
                props.setCurrentStep(1)
              }
            } catch (error) {
              console.error('Fejl ved PUT-anmodning:', error);
              setErrorDescription("error try agian later");
            }
          };
          reserveSpot();
        
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
  
    

return(
  
    <>
     
    <div className={styles.container}>
        <form onSubmit={checkErrorFun}>
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
            <p className={styles.error}>{errorDescription}</p>
            <button >Gem valg</button>
        </form>
    </div>
    
    
    </>
)

}

export default OptionToTicket;