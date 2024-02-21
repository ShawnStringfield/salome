import axios from 'axios';
import Link from 'next/link';

export default async function Page() {
  // TODO:: Next.js api calls strips the id from the response. Find out why. Until then, use Axios
  // const books = await fetch('http://localhost:3000/api/integrations/notion').then((res) => res.json());
  const books = await axios.get('http://localhost:3000/api/integrations/notion/booklist').then((res) => res.data);

  return (
    <>
      {books.map((book) => {
        // console.log('books', book);
        return (
          <div className="book mb-4" key={book.id}>
            <Link href={`/books/${book.id}`}>
              <h1>
                {book.bookTitle} ({book.highLightCount})
              </h1>
              <p>Author {book.author}</p>
              <p> {book.lastHighlighted}</p>
              <p>{book.lastSynced}</p>
            </Link>
          </div>
        );
      })}
      books
    </>
  );
}
