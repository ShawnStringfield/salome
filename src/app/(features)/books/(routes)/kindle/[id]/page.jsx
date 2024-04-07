import { BookDetailPage, getBookFromNotionDB } from '../../../';

export default async function Page({ searchParams }) {
  const book = await getBookFromNotionDB(searchParams.id);
  return <BookDetailPage datasource="notion" book={book} />;
}
