'use client';

import { useEffect, useState } from 'react';
import { setBookStatus, saveBook } from '@/src/app/(features)/books';
import { Button } from '@chakra-ui/react';
import { getUser } from '@/src/app/(features)/auth';

export const AddBookToDB = ({ book, children }) => {
  const [isBookInDB, setIsBookInDB] = useState(true);
  const [error, setError] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    getUser().then(({ user }) => setUserID(user.id));
    setBookStatus(book).then((resp) => setIsBookInDB(resp));
  });

  const handleSaveBook = () => {
    saveBook(book, userID).then((resp) => {
      if (resp.error) setError(resp.error);
    });
  };

  return (
    <Button isDisabled={isBookInDB} bg={'blue.400'} textColor={'white'} size="sm" onClick={handleSaveBook}>
      {children}
    </Button>
  );
};
