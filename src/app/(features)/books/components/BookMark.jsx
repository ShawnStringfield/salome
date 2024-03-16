'use client';

import { useState } from 'react';
import { Icon, Box } from '@chakra-ui/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { addBookmarkToNotionDB } from '@/src/app/(features)/books';

export const BookMark = ({ book }) => {
  const [bookmarked, setBookmarked] = useState(book.bookmarked);
  const handleBookUpdate = (book) => {
    setBookmarked((book.bookmarked = !book.bookmarked));
    addBookmarkToNotionDB(book, book.bookmarked).then((res) => {
      setBookmarked(res.properties.Bookmark.checkbox);
    });
  };
  return <Box onClick={() => handleBookUpdate(book)}>{bookmarked ? <Icon as={FaBookmark} color={'blue.400'} /> : <Icon as={FaRegBookmark} color={'blue.400'} />}</Box>;
};
