import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_SECRET });

const book = await notion.pages.retrieve({ page_id: '69882482-6a3f-4751-b0ab-9b1d6e28343e' });
const props = book.properties;
const bookTitle = props.Title.title[0].plain_text;
const bookCover = book.cover.external.url;
const lastHighlighted = props['Last Highlighted'].date ? props['Last Highlighted'].date.start : null;
const lastSynced = props['Last Synced'].date ? props['Last Synced'].date.start : null;
const author = props.Author.rich_text.length ? props.Author.rich_text[0].plain_text : null;

export async function GET(request, {params}) {
  let content;
  const highlights = notion.blocks.children.list({ block_id: params.id }).then((children) => {
    return children.results.map((child) => {
      if (child.paragraph) {
        if (child.paragraph.rich_text.length) {
          if (child.paragraph.rich_text[0].plain_text.includes('Tags:')) return;
            content = child.paragraph.rich_text[0].plain_text.slice(0, -1);
        }
      }
      return content;
    });
  });

  return Response.json({
    bookTitle: bookTitle, 
    bookCover: bookCover,
    author: author,
    highlights: await highlights,
    lastHighlighted: lastHighlighted,
    lastSynced: lastSynced,
    bookmarked: props.Bookmark.checkbox,
    url: book.url
  });
}
