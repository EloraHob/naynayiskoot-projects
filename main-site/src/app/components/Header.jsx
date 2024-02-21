import styles from "../globals.css"
import Image from 'next/image';

// TODO: acquire higher quality logo file and make responsive. 
export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image
                    src="/logo.png"
                    alt="nay nay is koot. logo"
                    width={200}
                    height={230}
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
to stick to this version across the whole site. 

I almost deleted this file... after some thought, I wondered if I even needed 
a header component file since there isn't any real site navigation needed and 
the content just appears on the homepage. In the future, I might need to modify 
this to accomodate navigation to different kinds of content on the site (such as 
quizzes, games, statistics, etc.)... but for now I'm going to keep it simple.
*/