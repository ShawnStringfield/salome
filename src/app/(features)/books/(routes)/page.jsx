import Link from 'next/link';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.from('books').select();

  return (
    <div className="px-6">
      {data.map(({ id, title, book_cover, url, bookmarked }) => {
        return (
          <div key={id}>
            <div>
              {
                <img
                  src={book_cover}
                  width="50"
                  height="150"
                />
              }
            </div>
            <div>{title}</div>
            <div>Number of highlights</div>
            <div>
              <Link
                href={url}
                target="_blank"
              >
                url
              </Link>
            </div>
            <div>Bookmarked: {bookmarked}</div>
          </div>
        );
      })}
    </div>
  );
}
