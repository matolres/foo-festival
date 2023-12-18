// import Image from 'next/image'
// import styles from './page.module.css'


import MyThree from './components/Background';
import styles from "../app/components/styles/LandingPage.module.scss"
import title from "../app/components/styles/title.module.scss"
import Menu from "./components/Menu";
import Marquee from "react-fast-marquee";
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <Menu />
    <main className={styles.main}>
          <MyThree/>
  
          <section className={styles.section_container}>
          <div className={styles.container}>
                <h1 className={title.glitch} data-text="Foo Festival">Foo Festival</h1>
                <p>- EDM for the people- </p>
              <div>
              <Link href='/paystep'><button className={styles.ticket_button}>TICKET</button></Link>
              <Link href='/artists'><button className={styles.artists_button}>ARTISTS</button></Link>
                
              </div>
          </div>
          <div>
          <Marquee className={styles.Marquee}>
            Avicii - DJ Steen - Dj Bryan - DJ tailwind - Skrillex
            </Marquee>
            </div>
          </section>
          </main>
          </>
  )
}
