import styles from "../page.module.css"

export default function Navbar() {
    return (
        <header className={styles.header}>
            <h1>nay nay is koot.</h1>
            <nav>
                <ul className={styles.navList}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}