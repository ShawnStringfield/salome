'use server';

import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { getUser } from '../../auth';

export const getBookFromDB = async ({ id }) => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabaseServer.from('books').select().eq('id', id);
  if (error) {
    return { error: error };
  } else return data[0];
};

export const getAllBooksFromDB = async () => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const user = await getUser();
  if (!user) return { error: 'User not authenticated' };

  const { data, error } = await supabaseServer.from('books').select().eq('user_id', user.id);

  if (error) {
    return { error: error };
  } else return data;
};

export const saveBookToDB = async (book) => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const user = await getUser();
  if (!user) return { error: 'User not authenticated' };

  book.user_id = user.id;
  const { error } = await supabaseServer.from('books').insert(book);
  if (error) {
    return { error: error };
  } else return true;
};

export const addBookmarkToDB = async (book, flag) => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const user = await getUser();
  if (!user) return { error: 'User not authenticated' };
  const {data, error} = await supabaseServer.from('books').update({bookmarked: flag}).eq('id', book.id);
  if (error) {
    return { error: error };
  } else return data;

};

export const setBookStatus = async ({ id }) => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabaseServer.from('books').select().eq('id', id);
  const bookInDB = data.filter((book) => book.id === id).length ? true : false;
  if (error) {
    console.log('error from setBookStatus', error);
 } else return bookInDB;
};
