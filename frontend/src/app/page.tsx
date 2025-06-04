
import ClientHome from './components/nested/ClientHome';


import { getPageMeta } from './utils/getPageMeta';

// ✅ Server-side metadata function
export async function generateMetadata() {
  return await getPageMeta("Home");
}

export default function HomePage() {
  return <ClientHome />;
}
