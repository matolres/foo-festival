"use client";
import styles from "./styles/Menu.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Turn as Hamburger } from 'hamburger-react'
import Image from "next/image";

export default function NavMenu() {
    const [isOpen, setisOpen] = useState(false);


    const toggleOpen = () => {
        setisOpen(!isOpen);
    }



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
                    <Link href='/'><li>HOME</li></Link>
                    <Link href='/artists'><li>PROGRAM</li></Link>
                    <Link href='/paystep'><li>TICKETS</li></Link>
                </ul>
            </div>
        </nav>
    );
}