import { getAllBooksFromDB, BookList } from '../index';

export default async function Page() {
  const books = await getAllBooksFromDB();
  return <></>;
  // return <BookList datasource='supabase' books={books} />;
}
