'use client';

import { useEffect, useState } from 'react';
import { supabase } from "@/src/app/supabase";
import { Button } from '@nextui-org/react';

export const AddBookToDB = ({ book }) => {
  const [isBookInDB, setIsBookInDB] = useState(true);
  const [userID, setUserID] = useState(null);

  const setUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    setUserID(data.user.id);
    if (error) console.log('error from setUser function in AddBookToDB', error);
  };

  const setBookStatus = async ({book_id}) => {
    const { data, error } = await supabase.from('books').select().eq('book_id', book_id);
    const bookInDB = data.filter(book => book.book_id === book_id).length ? true : false;
    if (error) {
      console.log('error from setBookStatus', error);
    } else setIsBookInDB(bookInDB);
  };

  const saveBook = async (book) => {
    book.id = userID;
    const { error } = await supabase.from('books').insert(book);
    if (error) {
      console.log('error from saveBook', error);
    } else setIsBookInDB(true);
  };

  useEffect(() => {
    setUser();
    setBookStatus(book);
  });

  return (
    <Button isDisabled={isBookInDB} onClick={() => saveBook(book)} color="primary">
      Add to Database
    </Button>
  );
};
