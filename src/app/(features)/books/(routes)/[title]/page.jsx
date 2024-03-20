import { BookDetailPage } from '@/src/app/(features)/books';
import { getBookFromDB } from '@/src/app/(features)/books';

export default async function Page({ searchParams }) {
  const book = await getBookFromDB({ id: searchParams.id });
  return <BookDetailPage datasource="supabase" book={book} />;
}
