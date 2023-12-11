
import styles from './styles/PaymentOptions.module.scss'

    function PaymentOptions(){

    return(
        <>
        <div className={styles.container}>
        <div>
        <p>Contact info</p>
        <form action="#" method="get">
            <div>
                <input type="text" id="fname" name="fname" placeholder='Firstname'/>
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
           
            
            
            
            <input type="submit" value="Submit"/>
        </form>

        </div>
    
        <div className={styles.prisContainer}>
            <p>Card summery</p>
                <div>
                    <p>Time to order:10:00</p>
                </div>
                <div>
                    <p>Number of tickets:</p>
                </div>
            
        </div>
        </div>
        
        </>
    )
        
    
}

export default PaymentOptions;