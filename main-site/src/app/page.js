import styles from "./page.module.css";

/* 
I am not doing this right now because I don't have many components (yet), 
but eventually I may want to add a pages.js file in the /components directory 
so I can import these components more cleanly, like so:

import { Home, Contact, Login, SignUp } from '/pages';
*/
import Footer from "./components/Footer"; 
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          target="/quiz"
          rel="noopener noreferrer"
        >
          <h2>
            Quiz <span>-&gt;</span>
          </h2>
          <p>Which Spy x Family Character Are You?</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dress-Up <span>-&gt;</span>
          </h2>
          <p>Click and drag to dress Chanel up in some wacky outfits!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Fart <span>-&gt;</span>
          </h2>
          <p>Got gas? Make music with it.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}
