'use client';

import { useEffect, useState } from 'react';
import { setBookStatus } from '@/src/app/(features)/books';
import { setUser } from '@/src/app/(features)/auth';

export const AddBookToDB = ({ book, children }) => {
  const [isBookInDB, setIsBookInDB] = useState(true);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    setUser().then(({ user }) => setUserID(user.id));
    setBookStatus(book);
  });

  return (
    <div onClick={() => saveBook(book, userID)} color="primary">
      {children}
    </div>
  );
};
