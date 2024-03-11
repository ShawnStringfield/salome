'use client';

import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { addBookmarkToNotionDB } from '@/src/app/(features)/books';

export const Bookmark = ({ book }) => {
  const [bookmarked, setBookmarked] = useState(book.bookmarked);
  const handleBookUpdate = (book) => {
    setBookmarked((book.bookmarked = !book.bookmarked));
    addBookmarkToNotionDB(book, book.bookmarked).then((res) => {
      setBookmarked(res.properties.Bookmark.checkbox);
    });
  };
  return <div onClick={() => handleBookUpdate(book)}>{bookmarked ? <FaBookmark /> : <FaRegBookmark />}</div>;
};
