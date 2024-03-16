import { format } from 'date-fns';

export const formatShortDate = (date) => {
  return format(new Date(date), 'MMMM yyyy');
};