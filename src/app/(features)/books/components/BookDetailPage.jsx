import Link from 'next/link';
import { format } from 'date-fns';
import { Image, Container, Box, Flex, Stack, Text } from '@chakra-ui/react';
import { getBook } from '@/src/app/(features)/books';
import { Bookmark } from '@/src/app/(features)/books';

export const BookDetailPage = async ({ params }) => {
  const book = await getBook(params.id);
  const { highlights, bookTitle, author, lastHighlighted, lastSynced, bookmarked, bookCover, url, category } = book;

  return (
    <Container maxW="6xl">
      <Flex align="center" mb={20} w={'full'}>
        <Box mr={5}>
          <Link href={url} target="_blank">
            <Image borderRadius="lg" htmlWidth={300} src={bookCover} alt={bookTitle} />
          </Link>
        </Box>
        <Box w={'full'}>
          <Flex fontSize={'lg'} fontWeight={'bold '}>
            <Box mr={2}>{bookTitle}</Box>
            <Box alignSelf={'center'} lineHeight={0}>
              <Bookmark book={book} />
            </Box>
          </Flex>
          <Box>{author}</Box>
          <Flex my={2} align="center">
            {/* <AddBookToDB
              book={{
                category: category || '',
                title: bookTitle,
                author: author,
                book_cover: bookCover,
                bookmarked: bookmarked,
                url: url,
                id: params.id,
              }}
            >
              Add Book
            </AddBookToDB> */}
          </Flex>
        </Box>
        <Stack w="full" align="end" lineHeight={3}>
          <Text fontSize={'small'}>Last highlighted {format(new Date(lastHighlighted), 'MMMM dd, yyyy')}</Text>
          <Text fontSize={'small'}>Last synced {format(new Date(lastSynced), 'MMMM dd, yyyy')}</Text>
          <Text fontSize={'small'}>{category}</Text>
        </Stack>
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
