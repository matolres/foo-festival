import styles from "../components/styles/OrderConfirmation.module.scss"
export default function OrderConfirmation() {
    return(
        <div className={styles.container}>
            <h1>Your order is now confirmed.</h1>
            <h2>Thanks for joining the Foo family!</h2>
            <h2>See you the 5th of july !!</h2>
            
        </div>
    )
}