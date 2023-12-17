"use client";
import styles from "./styles/Menu.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import Image from "next/image";

export default function NavMenu() {
    const [isOpen, setisOpen] = useState(false);
    const [isTransitionAdded, setIsTransitionAdded] = useState(false);

    const toggleOpen = () => {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        setIsTransitionAdded(true);
    }, []);

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image
                src="/logo_white.png"
                height={60}
                width={60}
                alt="logo"
                />
                </Link>
            <button className={styles.toggle_button} onClick={toggleOpen}><Hamburger color="white" duration={0.3} easing="ease-in" size={25}/></button>
            <div className={isOpen ? styles.active : styles.menu}>
                <ul>
                    <Link href='/paystep'><li>PROGRAM</li></Link>
                    <Link href='/tickets'><li>TICKETS</li></Link>
                    <Link href='/paystep'><li>ABOUT</li></Link>
                </ul>
            </div>
        </nav>
    );
}