import styles from "../page.module.css";
import ContactHero from '../components/ContactHero';
import Inclusions from "../components/Inclusions";
import { getPageMeta } from '../utils/getPageMeta';
import './contact.css';

export async function generateMetadata() {
  return await getPageMeta("Home");
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