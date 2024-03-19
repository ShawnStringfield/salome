import { BookList, getBookList } from '@/src/app/(features)/books';

export default async function Page() {
  return <BookList getBookList={getBookList} />;
}
