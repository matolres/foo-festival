import Link from "next/link";
import Points from "../components/Background";
import Menu from "../components/Menu";
import styles from "../components/styles/Tickets.module.scss";
import title from "../components/styles/title.module.scss";

export default function tickets(){
    return(
        <main className={styles.main}>
        <Points/>
        <Menu />
        <h1 className={title.glitch} data-text="Tickets">Tickets</h1>
        <section className={styles.section}>
            <div className={styles.ticket}>
                <h1>VIP Ticket</h1>
                <p>The full 3 days of Foo Festival including the Peace camp + 1 free meal a day.</p>
                <div className={styles.price}>
                    <h1>1299 Dkk</h1>
                    <p>+ fee</p>
                </div>
                <Link href='/paystep'><button className={styles.buy_button}>Buy now</button></Link>

            </div>
            <div className={styles.ticket}>
                <h1>Regular Ticket</h1>
                <p>The full 3 days of Foo Festival including camping.</p>
                <div className={styles.price}>
                    <h1>799 Dkk</h1>
                    <p>+ fee</p>
                </div>
                
                <Link href='/paystep'><button className={styles.buy_button}>Buy now</button></Link>
                
            </div>
        </section>


        </main>
    )
}