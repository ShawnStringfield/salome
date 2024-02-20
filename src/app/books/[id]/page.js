import axios from 'axios';
import Image from 'next/image';

export default async function Page({ params }) {
  const { highlights, bookTitle, author, lastHighlighted, lastSynced, bookmarked, bookCover, url } = await axios.get(`http://localhost:3000/api/integrations/notion/highlights/${params.id}`).then((res) => res.data);

  return (
    <div>
      <h2>{bookTitle}</h2>
      <h2>{author}</h2>
      <div>lastHighlighted {lastHighlighted}</div>
      <div>lastSynced {lastSynced}</div>
      <div>bookmarked {bookmarked}</div>
      <div>
        <a href={url} target="_blank">
          Link back to notion
        </a>
      </div>
      {/* TODO:: Replace with Image component */}
      <img src={bookCover} alt={bookTitle} width="100" height="100" />
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
