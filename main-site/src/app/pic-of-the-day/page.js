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
