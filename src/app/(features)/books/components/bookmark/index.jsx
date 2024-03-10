'use client';

import { useState } from 'react';
import { useBoolean } from '@chakra-ui/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export const Bookmark = ({ book, updateBook }) => {
  const [bookMarked, setBookMarked] = useState(book.bookmarked);
  const [flag, setFlag] = useBoolean();
  const handleBookUpdate = (book) => {
    setFlag.toggle();
    updateBook(book, flag).then((res) => {
      setBookMarked(res.properties.Bookmark.checkbox);
    });
  };
  return <div onClick={(e) => handleBookUpdate(book)}>{bookMarked ? <FaBookmark /> : <FaRegBookmark />}</div>;
};
