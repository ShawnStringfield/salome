import Link from 'next/link';
import { Container, Text } from '@chakra-ui/react';
import { List, ListContainer, ListItem, ListColumn } from '../../../components/list';
import { BookMark } from '../components/BookMark';
import { slugify } from '../../../utils/strings';

// What is happening with this version of node and why can't I use the abosolute path?

export const BookList = ({ books, datasource }) => {
  return (
    <Container>
      {books.map((book) => {
        const booksURL = `/books/${slugify(book.title)}`;
        const kindleHightlightsURL = `/books/kindle/${slugify(book.title)}`;
        let path;

        switch (datasource) {
          case 'supabase':
            path = booksURL;
            break;
          case 'notion':
            path = kindleHightlightsURL;
            break;
        }
        return (
          <List key={book.id}>
            <ListContainer>
              <Link
                href={{
                  pathname: path,
                  query: { id: book.id },
                }}
              >
                <ListColumn>
                  <ListItem>
                    <Text fontWeight={'bold'}>{book.title}</Text>
                  </ListItem>
                  <ListItem type='text'>
                    {book.author} {book.category ? '•' : ''} {book.category}
                  </ListItem>
                </ListColumn>
              </Link>
              <ListColumn flexEnd={true}>
                <ListItem>
                  <BookMark datasource={datasource} book={book} />
                </ListItem>
              </ListColumn>
            </ListContainer>
          </List>
        );
      })}
    </Container>
  );
};
