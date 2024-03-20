import { getAllBooksFromDB, BookList } from '@/src/app/(features)/books';

export default async function Page() {
  const books = await getAllBooksFromDB();
  return <BookList datasource="supabase" books={books} />;
}
