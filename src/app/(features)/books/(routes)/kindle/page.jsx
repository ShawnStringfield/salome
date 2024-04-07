import { BookList, getAllBooksFromNotionDB } from '../../';

export default async function Page() {
  const books = await getAllBooksFromNotionDB();
  return <BookList datasource={'notion'} books={books} />;
}
