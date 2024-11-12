import styles from "../page.module.css";
import ContactHero from '../components/ContactHero';
import Inclusions from "../components/Inclusions";
import {pageMeta, PAGE_META_DATA} from '../utils/page-meta';
import type { Metadata } from 'next';
import './contact.css';

export async function generateMetadata(): Promise<Metadata> {
    return await pageMeta({query : PAGE_META_DATA, pageName : "Contact"})
}
  
export default async function Page() { 
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ContactHero />
                <Inclusions />
            </main>
        </div>

    );
}