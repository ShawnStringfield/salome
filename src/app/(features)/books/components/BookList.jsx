'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Flex, Box, Text } from '@chakra-ui/react';
import { BookMark, getBookList } from '@/src/app/(features)/books';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookList().then((books) => setBooks(books));
  }, [books.length]);

  return (
    <Container maxW="4xl">
      {books.map((book) => {
        return (
          <Flex key={book.id} align="center" p={2} border="1px" borderColor="gray.100" my={5} borderRadius="md">
            <Box>
              <Link href={`/books/kindle/${book.id}`}>
                <Text fontWeight={'bold'}>{book.bookTitle}</Text>
                <Text>{book.author}</Text>
              </Link>
            </Box>

            <Box flex={8} align="right">
              <Text fontSize={'sm'} color={'gray.600'}>
                {book.category}
              </Text>
            </Box>
            <Flex flex={1} justify="flex-end">
              <Box>
                <BookMark book={book} />
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Container>
  );
};
