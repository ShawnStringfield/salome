import { supabase } from '@/src/app/supabase';

export const setBookStatus = async ({ book_id }) => {
  const { data, error } = await supabase.from('books').select().eq('book_id', book_id);
  const bookInDB = data.filter((book) => book.book_id === book_id).length ? true : false;
  if (error) {
    console.log('error from setBookStatus', error);
  } else return bookInDB; // setIsBookInDB(bookInDB);
};

export const saveBook = async (book, userID) => {
  book.id = userID;
  const { error } = await supabase.from('books').insert(book);
  if (error) {
    return error;
  } else return true; // setIsBookInDB(true);
};