import styles from "./page.module.css";
import Image from "next/image";
import Head from 'next/head';

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
                    <div className={styles.pictureHeading}>
                        <h2>Picture of the Day</h2>
                    </div>
                    <div className={styles.pictureContainer}>
                        <Image
                            src="/naynay-pics/20.jpg"
                            alt="Nay Nay Picture of the Day"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </section>

                <section className={styles.gamesSection}>
                    <h2>Mini Games</h2>
                    <div className={styles.gamesContainer}>
                        <div className={styles.gameCard}>
                            <div className={styles.gameImage}>
                                <Image src="/naynay-pics/1.jpg" alt="Farting Rat Music" layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.gameTitle}>Fart Rat Music (coming soon)</div>
                        </div>
                        <div className={styles.gameCard}>
                            <div className={styles.gameImage}>
                                <Image src="/naynay-pics/1.jpg" alt="Doggy Dress-Up Game" layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.gameTitle}>Doggy Dress-Up Game (coming soon)</div>
                        </div>
                        <div className={styles.gameCard}>
                            <div className={styles.gameImage}>
                                <Image src="/naynay-pics/1.jpg" alt="Spy x Family personality quiz" layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.gameTitle}>Which Spy x Family Character Are You? (coming soon)</div>
                        </div>
                        <div className={styles.gameCard}>
                            <div className={styles.gameImage}>
                                <Image src="/naynay-pics/1.jpg" alt="Sundae Scoop Game" layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.gameTitle}>Sundae Scoop (coming soon)</div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 NayNayIsKoot. All rights reserved.</p>
            </footer>
        </div>
    );
}