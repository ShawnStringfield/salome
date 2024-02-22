import axios from 'axios';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { AvatarWithBadge } from '../../components/avatar/AvatarWithBadge';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { AddBookToDB } from '../addBookToDB';

dayjs.extend(relativeTime);

export default async function Page({ params }) {
  const { highlights, bookTitle, author, lastHighlighted, lastSynced, bookmarked, bookCover, url, highlightCount } = await axios.get(`http://localhost:3000/api/integrations/notion/highlights/${params.id}`).then((res) => res.data);

  // Necessary for getting user from supabase on BE
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('user from book page', user);

  return (
    <div>
      <div className="header mb-10 columns-2">
        <div className="flex">
          <div className="mr-5">
            <Link href={url} target="_blank">
              <AvatarWithBadge src={bookCover} alt={bookTitle} content={highlightCount} />
            </Link>
          </div>

          <div className="">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight">{bookTitle}</h1>
            <h2 className="text-2xl">{author}</h2>
            <div className="my-3 flex">
              <FaHeart />
              <FaRegHeart />
              <AddBookToDB
                book={{
                  title: bookTitle,
                  author: author,
                  book_cover: bookCover,
                  bookmarked: bookmarked,
                  url: url,
                  id: params.id,
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs">Last highlighted {dayjs(lastHighlighted).fromNow()}</p>
          <p className="text-xs">Last synced {dayjs(lastSynced).fromNow()}</p>
        </div>
      </div>

      {highlights.map((highlight, index) => {
        return (
          <div className="mb-10" key={index}>
            <div>{highlight}</div>
          </div>
        );
      })}
    </div>
  );
}
