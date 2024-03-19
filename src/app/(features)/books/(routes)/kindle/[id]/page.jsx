import { BookDetailPage } from '@/src/app/(features)/books';
import { getBookList } from '@/src/app/(features)/books';

export default async function Page({ params }) {
  return <BookDetailPage getBookList={getBookList} params={params} />;
}
