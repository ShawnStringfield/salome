'use client';

import { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';

export const AddBookToDB = ({ children, saveBookToDB, setBookStatus, book }) => {
  const [isBookInDB, setIsBookInDB] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setBookStatus(book).then((resp) => setIsBookInDB(resp));
  });

  const handleSaveBook = () => {
    saveBookToDB(book).then((resp) => {
      if (resp.error) setError(resp.error);
    });
  };

  return (
    <Button isDisabled={isBookInDB} bg={'blue.400'} textColor={'white'} size="sm" onClick={handleSaveBook}>
      {children}
    </Button>
  );
};
