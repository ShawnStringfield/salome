import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AddBookToDB } from '@/src/app/(features)/books';
import { getBook } from '@/src/app/(features)/books';

export default async function Page({ params }) {
  const book = await getBook(params.id);
  const { highlights, bookTitle, author, lastHighlighted, lastSynced, bookmarked, bookCover, url, highlightCount } = book;

  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <Link href={url} target="_blank">
              book cover here
            </Link>
          </div>

          <div className="">
            <h1 className="">{bookTitle}</h1>
            <h2 className="">{author}</h2>
            <div className="">
              <FaHeart />
              <FaRegHeart />
              <AddBookToDB
                book={{
                  title: bookTitle,
                  author: author,
                  book_cover: bookCover,
                  bookmarked: bookmarked,
                  url: url,
                  book_id: params.id,
                }}
              >
                Add
              </AddBookToDB>
            </div>
          </div>
        </div>
        <div className="">
          <p className="">Last highlighted {lastHighlighted}</p>
          <p className="">Last synced {lastSynced}</p>
        </div>
      </div>

      {highlights.map((highlight, index) => {
        return (
          <div className="" key={index}>
            <div>{highlight}</div>
          </div>
        );
      })}
    </div>
  );
}
