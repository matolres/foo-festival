import MyThree from '../components/Background'
import styles from "../components/styles/Artists.module.scss"
import title from "../components/styles/title.module.scss"
import Menu from "../components/Menu"
import Image from 'next/image'
import Countdown from '../components/Countdown'

export default function Artists(){
    return(
        <main className={styles.main}>
            <MyThree />
            <Menu/>
            <h1 className={title.glitch} data-text="Daily Lineup">Daily Lineup</h1>
            <section className={styles.artists_container}>
                <div className={styles.linup}>
                    <h1 className={styles.day}>FRIDAY</h1>
                    <div>
                        <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                        <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                        <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                        <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                    </div>
                </div>
                <div className={styles.linup}>
                    <h1 className={styles.day}>SATURDAY</h1>
                    <div>
                        <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                        <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                        <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                        <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                    </div>
                </div>
                <div className={styles.linup}>
                    <Countdown />
                </div>
                <div className={styles.linup}>
                <Image 
                    src="/Designer.jpeg"
                        width={150}
                        height={170}
                        layout="responsive"
                        alt="Picture of the author"
                />
                </div>
                <div className={styles.linup}>
                <h1 className={styles.day}>SUNDAY</h1>
                    <div>
                        <h2>ARTIST 1 - ARTIST 2 - ARTIST 3</h2>
                        <h3>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h3>
                        <h4>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h4>
                        <h5>ARTIST 1 - ARTIST 2 - ARTIST 3 - ARTIST 4</h5>
                    </div>
                </div>
                
            </section>

        </main>
    )
}