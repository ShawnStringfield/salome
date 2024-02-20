import axios from 'axios';

export default async function Page() {
  // TODO:: Next.js api calls strips the id from the response. Find out why. Until then, use Axios
  // const books = await fetch('http://localhost:3000/api/integrations/notion').then((res) => res.json());
  const books = await axios.get('http://localhost:3000/api/integrations/notion').then((res) => res.data);

  return (
    <>
      {books.map((book) => {
        return (
          <div className="book mb-4" key={book.id}>
            <h2>{book.pageTitle}</h2>
            <p>{book.author}</p>
            <p> {book.lastHighlighted}</p>
            <p>{book.lastSynced}</p>
            <p>{book.highLightCount}</p>
          </div>
        );
      })}
    </>
  );
}
