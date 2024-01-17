import Points from './components/Background';
import styles from "../app/components/styles/LandingPage.module.scss"
import title from "../app/components/styles/title.module.scss"
import background from "../app/components/styles/Background.module.scss"
import Menu from "./components/Menu";
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export default function Home() {

  return (
    <>
    <Canvas className={background.anim}>
       <directionalLight
                color={"white"} // Set the color of the light
                intensity={3}   // Set the intensity of the light
                position={[5, 3, 0]} // Position of the light
                // The direction is implied by the position
            />
      <Suspense fallback={null}>
      <Points />
      </Suspense>
    </Canvas>
    
    <main className={styles.main}>
    <Menu />
  
          <section className={styles.section_container}>
          <div className={styles.container}>
                <h1 className={title.glitch} data-text="Foo Festival">Foo Festival</h1>
                <p>- EDM for the people- </p>
              <div>
              <Link href='/paystep'><button className={styles.ticket_button}>TICKETS</button></Link>
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
