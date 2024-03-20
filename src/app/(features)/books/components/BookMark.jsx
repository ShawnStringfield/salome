'use client';

import { useState, useEffect } from 'react';
import { Icon, Box } from '@chakra-ui/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { addBookmarkToDB, addBookmarkToNotionDB } from '@/src/app/(features)/books';

export const BookMark = ({ book, datasource }) => {
  const [bookmarked, setBookmarked] = useState(book.bookmarked);

  useEffect(() => {
    setBookmarked(book.bookmarked);
  }, [book]);

  const handleBookUpdate = (book) => {
    setBookmarked((book.bookmarked = !book.bookmarked));
    switch (datasource) {
      case 'supabase':
        addBookmarkToDB(book, book.bookmarked).then(() => {
          setBookmarked(book.bookmarked);
        });
        break;
      case 'notion':
        addBookmarkToNotionDB(book, book.bookmarked).then((res) => {
          setBookmarked(res.properties.Bookmark.checkbox);
        });
        break;
    }
  };
  return <Box onClick={() => handleBookUpdate(book)}>{bookmarked ? <Icon as={FaBookmark} color={'blue.400'} /> : <Icon as={FaRegBookmark} color={'blue.400'} />}</Box>;
};
