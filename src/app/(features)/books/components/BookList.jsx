import Link from 'next/link';
import { Container, Avatar, Flex, Box, Badge } from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';
import { getBookList } from '@/src/app/(features)/books/api/booksApi';
import { Bookmark } from '@/src/app/(features)/books';

export const BookList = async () => {
  const books = await getBookList();
  return (
    <Container maxW="4xl">
      {books.map((book) => {
        return (
          <Flex key={book.id} align="center" p={2} border="1px" borderColor="gray.100" my={5} borderRadius="xl">
            <Link href={`/books/kindle/${book.id}`}>
              <Avatar src={book.bookCover} size="md" mr={5} />
            </Link>

            <Box>
              <Box>{book.bookTitle}</Box>
              <Box>{book.author}</Box>
            </Box>

            <Box flex={8} align="right">
              <Badge colorScheme="green" borderRadius="sm">
                {book.tag}
              </Badge>
            </Box>
            <Flex flex={1} justify="flex-end">
              <Box mr={5}>
                <Link href={book.url} target="_blank">
                  <FaLink />
                </Link>
              </Box>
              <Box>
                <Bookmark book={book} />
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Container>
  );
};
