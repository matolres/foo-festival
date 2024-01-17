"use client";
import styles from "../components/styles/Artists.module.scss"
import title from "../components/styles/title.module.scss"
import Menu from "../components/Menu"
import Image from 'next/image'
import Countdown from 'react-countdown';




export default function Artists(){
    
    const Completionist = () => <span>The countdown is complete!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
          <span className={styles.countdown}>
            {days} days - {hours} hours - {minutes} minutes - {seconds} seconds <br/> left to party
          </span>
        );
      }
    };
    
    const countdownDate = new Date('July 5, 2024 00:00:00').getTime();

    return(
        <main className={styles.main}>
            <Menu/>
            <h1 className={title.glitch} data-text="Daily Lineup">Daily Lineup</h1>
            <section className={styles.artists_container}>
                <div className={styles.linup}>
                    <h1 className={styles.day}>FRIDAY</h1>
                    <div>
                    <h2> The Beatles - Led Zeppelin - Pink Floyd</h2>
                        <h3> Tool - A Perfect Circle - Queen - Metallica</h3>
                        <h4>The Rolling Stones - Guns N Roses - Nirvana - AC/DC</h4>
                        <h5>Refused - Raised Fist - Black Sabbath - The Who</h5>
                    </div>
                </div>
                <div className={styles.linup}>
                    <h1 className={styles.day}>SATURDAY</h1>
                    <div>
                        <h2> The Beatles - Led Zeppelin - Pink Floyd</h2>
                        <h3> Tool - A Perfect Circle - Queen - Metallica</h3>
                        <h4>The Rolling Stones - Guns N Roses - Nirvana - AC/DC</h4>
                        <h5>Refused - Raised Fist - Black Sabbath - The Who</h5>
                    </div>
                </div>
                <div className={styles.linup}>
                <Countdown date={countdownDate} renderer={renderer} />
                </div>
                <div className={styles.linup}>
                <Image 
                    src="/Designer.jpeg"
                        width={170}
                        height={170}
                        layout="responsive"
                        alt="Picture of the author"
                />
                </div>
                <div className={styles.linup}>
                <h1 className={styles.day}>SUNDAY</h1>
                    <div>
                    <h2> The Beatles - Led Zeppelin - Pink Floyd</h2>
                        <h3> Tool - A Perfect Circle - Queen - Metallica</h3>
                        <h4>The Rolling Stones - Guns N Roses - Nirvana - AC/DC</h4>
                        <h5>Refused - Raised Fist - Black Sabbath - The Who</h5>
                    </div>
                </div>
                
            </section>

        </main>
    )
}