<<<<<<< Updated upstream
import Head from 'next/head';
import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nay Nay is Koot</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
        <meta name="description" content="A playful and quirky website with a Honk font theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>Nay Nay is Koot</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <h2>Welcome to Our Fun World!</h2>
          <p>Explore the playful and whimsical side of life with our unique activities and games.</p>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCard}>
            <Image src="/icons/game-icon.png" alt="Game Icon" width={100} height={100} />
            <h3>Exciting Games</h3>
            <p>Engage in fun and interactive games that will keep you entertained for hours.</p>
          </div>
          <div className={styles.featureCard}>
            <Image src="/icons/activity-icon.png" alt="Activity Icon" width={100} height={100} />
            <h3>Creative Activities</h3>
            <p>Unleash your creativity with our range of activities designed to spark your imagination.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Nay Nay is Koot. All rights reserved.</p>
      </footer>
    </div>
  );
}
=======
import styles from "./page.module.css";

export default function NayOfTheDay() {
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
                    
                </section>

                <section className={styles.gamesSection}>
                    
                </section>

            </main>
        </div>
    );
}
>>>>>>> Stashed changes
