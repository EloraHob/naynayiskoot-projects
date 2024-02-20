import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.pictureOfTheDay}>
                    <div className={styles.pictureContainer}>
                    </div>
                </section>
            </main>
        </div>
    );
}