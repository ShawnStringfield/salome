'use server';

import { supabase } from '@/src/app/lib/supabaseServer';

export const getBooks = async () => {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return { error: 'User not authenticated' };

  const { data, error } = await supabase.from('books').select().eq('user_id', user.id);

  if (error) {
    return { error: error };
  } else return data;
};

export const saveBook = async (book) => {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return { error: 'User not authenticated' };

  book.user_id = user.id;
  const { error } = await supabase.from('books').insert(book);
  if (error) {
    return { error: error };
  } else return true;
};

export const setBookStatus = async ({ id }) => {
  const { data, error } = await supabase.from('books').select().eq('id', id);
  const bookInDB = data.filter((book) => book.id === id).length ? true : false;
  if (error) {
    console.log('error from setBookStatus', error);
  } else return bookInDB;
};
