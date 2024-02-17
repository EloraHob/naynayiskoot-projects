import styles from "./page.module.css";
import Image from "next/image";

export default function NaNayOTD() {
    return (
       <div>Text Here!
        <Image 
            src='/naynay-pics/1.jpg'
            width={600}
            height={300}
            alt="picture of Chanel"
            priority
        />
        <p>Date taken: date goes here</p>
       </div>
    );
}

// export async function getStaticProps() {

//     return {
//         props : {

//         },
//     }
// }