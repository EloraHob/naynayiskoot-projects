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
            </main>
        </div>
    );
}