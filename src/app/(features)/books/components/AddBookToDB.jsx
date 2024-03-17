'use client';

import { useEffect, useState } from 'react';
import { setBookStatus, saveBook } from '@/src/app/(features)/books';
import { Button } from '@chakra-ui/react';

export const AddBookToDB = ({ book, children }) => {
  const [isBookInDB, setIsBookInDB] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setBookStatus(book).then((resp) => setIsBookInDB(resp));
  });

  const handleSaveBook = () => {
    saveBook(book).then((resp) => {
      if (resp.error) setError(resp.error);
    });
  };

  return (
    <Button isDisabled={isBookInDB} bg={'blue.400'} textColor={'white'} size="sm" onClick={handleSaveBook}>
      {children}
    </Button>
  );
};
