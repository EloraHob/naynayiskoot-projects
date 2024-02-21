import styles from "./styles/Footer.module.css"

// Basic for now, considering adding social media buttons in the right-hand corner.  
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Made with <span aria-label="love" aria-hidden="true">&#128150;</span> by <a href="https://www.elora.codes">Your Big Sister</a></p>
            <p>&copy; 2024 Nay Nay is Koot. All rights reserved.</p>
        </footer>
    );
}