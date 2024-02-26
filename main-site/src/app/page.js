import styles from "./page.module.css";
import "./globals.css";

/* 
I am not doing this right now because I don't have many components (yet), 
but eventually I may want to add a pages.js file in the /components directory 
so I can import these components more cleanly, like so:

import { Home, Contact, Login, SignUp } from '/pages';
*/
import Footer from "./components/Footer";
import Image from 'next/image';
import logo from '/public/naynayiskoot.png'

/* NOTES AND CONSIDERATIONS

  // STRUGGLES WITH NEXT/IMAGE
    I struggled VERY hard with Next.JS Next/Image component. 
    I spent like 3 days on this stupid issue. Initially, I was importing the logo 
    image directly user `src='img.png'` syntax. This was problematic because this 
    method requires explicit definition of width and height properties. Errors and 
    warnings are thrown in the console if you modify the width or height using CSS 
    with this method. 

    The solution took me way too long to find, but I just needed to import the image
    with `import logo from `/filepath/image.png` syntax to avoid explicitly defining 
    the image size. 

    Future optimization might involve research into the 'sizes' prop to adjust img size
    based on screen size. 

    TODO: Read https://nextjs.org/docs/app/api-reference/components/image. 
  
  // ANOTHER PROBLEM GOES HERE
*/

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.logo_container}>
          <Image
            src={logo}
            alt="nay nay is koot"
            priority
            className={styles.logo}
          />
        </div>
      </header>
      <main className={styles.main}>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="/quiz"
            rel="noopener noreferrer"
          >
            <h1>
              Quiz <span>-&gt;</span>
            </h1>
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
      </main>
      <Footer />
    </>
  );
}
