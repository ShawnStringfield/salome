import Link from 'next/link';
import { Card, CardBody } from '@nextui-org/react';
import { getBookList } from '../api/integrations/notion/booksFromReadWise';

export default async function Page() {
  const books = await getBookList();

  return (
    <div className="grid grid-cols-2 grid-cols-5">
      {books.map((book) => {
        return (
          <Link href={`/books/${book.id}`} key={book.id}>
            <Card className="my-5 w-48" isPressable isFooterBlurred radius="md">
              <CardBody className="overflow-visible p-0">
                <img src={book.bookCover} alt={book.bookTitle} width={100} height={300} className="w-full object-cover h-[275px]" />
              </CardBody>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
