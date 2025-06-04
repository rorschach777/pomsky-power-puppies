import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import styles from "../page.module.css";
import ContactHero from '../components/ContactHero';
import { getPageMeta } from '../utils/getPageMeta';
import '../about/about.css';

// ✅ Server-side metadata function
export async function generateMetadata() {
  return await getPageMeta("About Us");
}


export default async function Page() { 
    return (
        <div className={styles.page}>
            <main className={styles.main}>
              <div className="container">
                <h1>About Us</h1>
              </div>
            </main>
        </div>
    );
}