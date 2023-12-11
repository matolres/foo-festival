import MyThree from '../components/Background'
import styles from "../components/styles/Artists.module.scss"
import Menu from "../components/Menu"
import Image from 'next/image'

export default function Artists(){
    return(
        <main className={styles.main}>
            <MyThree />
            <Menu/>
            <h1>FOO FEST</h1>
            <section className={styles.container}>
                <div className={styles.day1}>
                    <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                    <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                    <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                    <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                </div>
                <Image className={styles.day1}
                    src="/Designer.jpeg"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                />
                <div className={styles.day1}>
                    <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                    <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                    <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                    <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                </div>
                <Image className={styles.day1}
                    src="/Designer.jpeg"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                />
                <div className={styles.day1}>
                    <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                    <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                    <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                    <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                </div>
                <Image className={styles.day1}
                    src="/Designer.jpeg"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                />
            </section>

        </main>
    )
}