'use client';

import { supabase } from '@/src/app/supabase';
import axios from 'axios';
import { Button } from '@nextui-org/react';

const add = (book) => {
  axios.post('http://localhost:3000/api/booksread', book);
};

export const AddBookToDB = async ({book}) => {
  const {
    data: { user, error },
  } = await supabase.auth.getUser();

  if (user) console.log('book page user', user);
  if (error) console.log('book page error', error);
  
  return (
    <Button onClick={() => add(book)} color="primary">Add to Database</Button>
  );
};
