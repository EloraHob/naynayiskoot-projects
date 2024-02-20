import styles from "../page.module.css"
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <h1>nay nay is koot.</h1>
                <ul className={styles.navList}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

/* CONSIDERATIONS AND NOTES

Taking inspiration from the design of https://neal.fun/, I think I just want the nav/header to display 
the site logo (aligned left when minigame is open, centered in large text on homepage otherwise). For now, just going 
to stick to this version across the whole site. 
*/