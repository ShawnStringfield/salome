import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { AvatarWithBadge } from '../../components/avatar/AvatarWithBadge';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

dayjs.extend(relativeTime);

export default async function Page({ params }) {
  const { highlights, bookTitle, author, lastHighlighted, lastSynced, bookmarked, bookCover, url, highlightCount } = await axios.get(`http://localhost:3000/api/integrations/notion/highlights/${params.id}`).then((res) => res.data);

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
            <FaHeart />
            <FaRegHeart />
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
