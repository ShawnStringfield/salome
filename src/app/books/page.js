import axios from 'axios';
import Link from 'next/link';
import { Card, CardBody, CardFooter, Avatar, Badge } from '@nextui-org/react';

export default async function Page() {
  // TODO:: Next.js api calls strips the id from the response. Find out why. Until then, use Axios
  // const books = await fetch('http://localhost:3000/api/integrations/notion').then((res) => res.json());
  const books = await axios.get('http://localhost:3000/api/integrations/notion/booklist').then((res) => res.data);

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
