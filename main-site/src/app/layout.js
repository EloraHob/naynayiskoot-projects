import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nay nay is koot.",
  description: "A collection of interactive games and activities for kids, featuring picture-of-the-day fun, playful quizzes, and creative music-making.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
