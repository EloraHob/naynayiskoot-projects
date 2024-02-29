import Image from 'next/image';
import styles from "./page.module.css";
import Footer from "./components/Footer";
import logo from '/public/naynayiskoot.png';

/* 
I am not doing this right now because I don't have many components (yet), 
but eventually I may want to add a pages.js file in the /components directory 
so I can import these components more cleanly, like so:

import { Home, Contact, Login, SignUp } from '/pages';
*/

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
  
  // LEARNING ABOUT HTML <a> TAG ATTRIBUTES
    target - specifies where to open the linked document.
      <a target="_blank" href=""> //open doc in new window

    rel - defines the relationship between a linked resource and the current document.
      <a rel="noopener noreferrer"> //prevents a link from changing OG page-- needed for security"
    
*/

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.logo_container}>
          <Image
            src={logo}
            alt="Nay Nay Is Koot logo"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Nay of the Day</h2>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Dress-Up</h2>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Fart Rat Music</h2>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Quiz</h2>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Ice Cream Scramble</h2>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
