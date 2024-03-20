import Link from 'next/link';
import { Container, Box, Flex } from '@chakra-ui/react';
import { AddBookToDB, saveBookToDB, setBookStatus } from '@/src/app/(features)/books';
import { BookMark } from '@/src/app/(features)/books';

export const BookDetailPage = async ({ book, datasource }) => {
  console.log('datasource', datasource);
  const { highlights = [], title, author, bookmarked, bookCover, url, category, id } = book;

  return (
    <Container maxW="6xl">
      <Flex align="center" mb={20} w={'full'}>
        <Box w={'full'}>
          <Flex fontSize={'lg'} fontWeight={'bold '}>
            <Box mr={2}>
              <Link href={url} target="_blank">
                {title}
              </Link>
            </Box>
            <Box alignSelf={'center'} lineHeight={0}>
              <BookMark datasource={datasource} book={book} />
            </Box>
          </Flex>
          <Box>
            {author} {category ? '•' : ''} {category}
          </Box>
        </Box>
        {datasource === 'notion' && (
          <Box w="full" align="end" lineHeight={3}>
            <AddBookToDB
              saveBookToDB={saveBookToDB}
              setBookStatus={setBookStatus}
              book={{
                category: category,
                title: title,
                author: author,
                book_cover: bookCover,
                bookmarked: bookmarked,
                url: url,
                id: id,
              }}
            >
              Add Book
            </AddBookToDB>
          </Box>
        )}
      </Flex>

      {highlights.map((highlight, index) => {
        return (
          <Box my={7} key={index}>
            {highlight}
          </Box>
        );
      })}
    </Container>
  );
};
