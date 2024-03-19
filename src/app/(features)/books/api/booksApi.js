'use server';

import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { supabaseServer } from '@/src/app/lib/supabaseServer';
import { getUser } from '../../auth';

export const getBooks = async () => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const user = await getUser();
  if (!user) return { error: 'User not authenticated' };

  const { data, error } = await supabaseServer.from('books').select().eq('user_id', user.id);

  if (error) {
    return { error: error };
  } else return data;
};

export const saveBook = async (book) => {
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

export const setBookStatus = async ({ id }) => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabaseServer.from('books').select().eq('id', id);
  const bookInDB = data.filter((book) => book.id === id).length ? true : false;
  if (error) {
    console.log('error from setBookStatus', error);
 } else return bookInDB;
};
