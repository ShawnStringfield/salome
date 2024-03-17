import Link from 'next/link';
import { getBooks } from '@/src/app/(features)/books';

export default async function Page() {
  const books = await getBooks();

  return (
    <div className="px-6">
      {books.map(({ id, title, book_cover, url, bookmarked }) => {
        return (
          <div key={id}>
            <div>{<img src={book_cover} width="50" height="150" />}</div>
            <div>{title}</div>
            <div>Number of highlights</div>
            <div>
              <Link href={url} target="_blank">
                url
              </Link>
            </div>
            <div>Bookmarked: {bookmarked}</div>
          </div>
        );
      })}
    </div>
  );
}
