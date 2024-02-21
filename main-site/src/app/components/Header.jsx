import styles from "./styles/Header.module.css"
import Image from 'next/image';

// TODO: acquire higher quality logo file. 
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="nay nay is koot. logo"
                    width={300}
                    height={360}
                    priority
                />
            </div>
        </header>
    );
}

/* CONSIDERATIONS AND NOTES

Taking inspiration from the design of https://neal.fun/, I think I just 
want the nav/header to display the site logo (aligned left when minigame 
is open, centered in large text on homepage otherwise). For now, just going 
to stick to this version until I have an actual minigame finished. 

I almost deleted this file... after some thought, I wondered if I even needed 
a header component file since there isn't any real site navigation needed and 
the content just appears on the homepage. In the future, I might need to modify 
this to accomodate navigation to different kinds of content on the site (such as 
quizzes, games, statistics, etc.)... but for now I'm going to keep it simple.

Making the Next/Image responsive was needlessly difficult. I'd probably have 
finished working on the css in half the time if Next/Image wasn't so finicky. 
The height and width props must be defined in the Image tag but they can be 
overriden in CSS-- but the constant console warnings are frustrating to debug. 
*/