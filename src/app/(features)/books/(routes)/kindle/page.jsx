import { BookList, getAllBooksFromNotionDB } from '@/src/app/(features)/books';

export default async function Page() {
  const books = await getAllBooksFromNotionDB();
  return <BookList datasource={'notion'} books={books} />;
}
