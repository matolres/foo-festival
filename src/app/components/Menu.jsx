import styles from "./styles/Menu.module.scss";
import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <ul>
            <Link href='/paystep'><li>CLICK</li></Link>
            <Link href='/paystep'><li>CLICK</li></Link>
            <Link href='/paystep'><li>CLICK</li></Link>
        </ul>
          </nav>
    )
}