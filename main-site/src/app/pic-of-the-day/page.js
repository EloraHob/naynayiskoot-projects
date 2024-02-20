import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
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

            <main className={styles.main}>
                <section className={styles.pictureOfTheDay}>
                    <div className={styles.pictureContainer}>
                    </div>
                </section>
            </main>
        </div>
    );
}