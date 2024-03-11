import { BookDetails } from '@/src/app/(features)/books';

export default async function Page({ params }) {
  return <BookDetails params={params} />;
}
