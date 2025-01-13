import { jsonImporter } from './lib/jsonImporter';
import { Landing } from './Landing';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function Home() {
  const data = await jsonImporter('/public/landing.json');

  return <Landing landingData={data} />;
}
