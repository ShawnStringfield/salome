import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_SECRET });
const booksFilter = { property: 'Category', select: { equals: 'Books' } };
const booksSorts = [{ property: 'Title', direction: 'ascending' }];
const books = await notion.databases.query({ database_id: process.env.NOTION_BOOKS_DATABASE_ID, filter: booksFilter, sorts: booksSorts });

export async function GET() {
  const bookList = books.results.map((page) => {
    const props = page.properties;
    const pageTitle = props.Title.title[0].plain_text;
    const tags = props.Tags.multi_select.length ? props.Tags.multi_select : null;
    const author = props.Author.rich_text.length ? props.Author.rich_text[0].plain_text : null;
    const lastHighlighted = props['Last Highlighted'].date ? props['Last Highlighted'].date.start : null;
    const lastSynced = props['Last Synced'].date ? props['Last Synced'].date.start : null;
    const highlightCount = props.Highlights ? props.Highlights.number : null;

    return {
      id: page.id,
      pageTitle: pageTitle,
      tags: tags,
      author: author,
      lastHighlighted: lastHighlighted,
      highLightCount: highlightCount,
      lastSynced: lastSynced,
      bookmarked: props.Bookmark.checkbox,
    };
  });

  return Response.json(bookList);
}
