import { BookDetailPage } from '@/src/app/(features)/books';

export default async function Page({ params }) {
  return <BookDetailPage params={params} />;
}
