
import styles from './styles/Option.module.scss'

function Option(props){
   
    return(
    <div className={styles.container}>
        <div>
            <p>{props.name} <span> - {props.price}kr.</span></p>
        </div>

        
        <div className={styles.priceContainer}>
        <button type='button' onClick={()=> props.tickets <= props.maxTent || props.number>=10?"":props.setNumber((old) => old+1)}>+</button>
                                                   
        <p>{props.number}</p>
        <button type='button' onClick={()=>props.number>0?props.setNumber(old => old-1):""}>-</button>
        </div>
         
        
    </div>

    )
}

export default Option;
