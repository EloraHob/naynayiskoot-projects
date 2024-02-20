import "./globals.css";
import { Inter } from "next/font/google";

/* 
I am not doing this right now because I don't have many components (yet), 
but eventually I may want to add a pages.js file in the /components directory 
so I can import these components more cleanly, like so:

import { Home, Contact, Login, SignUp } from '/pages';
*/
import Footer from "./components/Footer"; 
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nay nay is koot.",
  description: "A collection of interactive games and activities for kids, featuring picture-of-the-day fun, playful quizzes, and creative music-making.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
