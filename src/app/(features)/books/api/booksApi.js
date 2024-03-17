'use server';

import { supabase } from '@/src/app/lib/supabaseServer';

export const getBooks = async (userID) => {
  const { data, error } = await supabase.from('books').select().eq('user_id', userID);
  if (error) {
    return {error: error};
  } else return data;
};

export const saveBook = async (book, userID) => {
  book.user_id = userID;
  const { error } = await supabase.from('books').insert(book);
  if (error) {
    return {error: error};
  } else return true;
};

export const setBookStatus = async ({ id }) => {
  const { data, error } = await supabase.from('books').select().eq('id', id);
  const bookInDB = data.filter((book) => book.id === id).length ? true : false;
  if (error) {
    console.log('error from setBookStatus', error);
  } else return bookInDB;
};
