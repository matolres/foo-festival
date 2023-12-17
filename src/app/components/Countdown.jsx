"use client";

import styles from "../components/styles/countdown.module.scss"
import { useState, useEffect } from "react";


export default function Countdown() {
    const COUNTDOWN_TARGET = new Date("2024-07-05T23:59:59");
useEffect(() => {

    const timer = setInterval(() => {
        setTimeLeft(getTimeLeft())
    }, 1000);

    return () => {
        clearInterval(timer)
    }
}, []);
    const getTimeLeft = () => {
        const totalTimeLeft = COUNTDOWN_TARGET - new Date();
        const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60) % 24);
        const minutes = Math.floor(totalTimeLeft / (1000*60) % 60);
        const seconds = Math.floor((totalTimeLeft / 1000) % 60);
        return { days, hours, minutes, seconds}
    }
    const [timeLeft, setTimeLeft] = useState(()=> getTimeLeft());


    return(
        <div className={styles.container}>
            <h2>
                {timeLeft.days} D
            </h2>
            <h2 >
                {timeLeft.hours} H 
            </h2>
            <h2 > 
                {timeLeft.minutes} M 
            </h2>
            <h2>
                {timeLeft.seconds} S 
            </h2>
        </div>
  );
    
}