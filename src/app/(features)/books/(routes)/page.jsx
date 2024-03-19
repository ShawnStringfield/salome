import Link from 'next/link';
import { getBooks, BookMark } from '@/src/app/(features)/books';
import { Container, Text } from '@chakra-ui/react';
import { List, ListContainer, ListItem, ListColumn } from '@/src/app/components/List';

export default async function Page() {
  const books = await getBooks();

  console.log('books', books);

  return (
    <Container>
      {books.map((book) => {
        return (
          <List key={book.id}>
            <ListContainer>
              <ListColumn>
                <ListItem>
                  <Text fontWeight={'bold'}>{book.title}</Text>
                </ListItem>
                <ListItem type="text">
                  {book.author} {book.category ? '•' : ''} {book.category}
                </ListItem>
              </ListColumn>
              <ListColumn flexEnd={true}>
                <ListItem>
                  <BookMark dataSource="supabase" book={book} />
                </ListItem>
              </ListColumn>
            </ListContainer>
          </List>
        );
      })}
    </Container>
  );
}
