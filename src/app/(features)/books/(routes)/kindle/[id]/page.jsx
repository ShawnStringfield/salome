import { BookDetailPage, getBookFromNotionDB } from '@/src/app/(features)/books';

export default async function Page({ searchParams }) {
  const book = await getBookFromNotionDB(searchParams.id);
  return <BookDetailPage datasource="notion" book={book} />;
}
