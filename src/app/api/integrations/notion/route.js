import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_owczMRL3fHPG6gWRmfXuMTN7N8Tru6OAQEaFTTXkGJd' });
const booksFilter = { property: 'Category', select: { equals: 'Books' } };
const booksSorts = [{ property: 'Title', direction: 'ascending' }];
const books = await notion.databases.query({ database_id: '7486254ca5e447519c22de8557ad5f91', filter: booksFilter, sorts: booksSorts });
const booksCount = 0;
const block = await notion.blocks.retrieve({ block_id: 'd72ba4d9-be21-43bd-9c8a-3263a1b3980b' });
const page = await notion.pages.retrieve({ page_id: 'd72ba4d9-be21-43bd-9c8a-3263a1b3980b' });

export async function GET() {
  const bookList = books.results.map((page, index) => {
    const props = page.properties;
    const pageTitle = props.Title.title[0].plain_text;
    const tags = props.Tags.multi_select.length ? props.Tags.multi_select : null;
    const author = props.Author.rich_text.length ? props.Author.rich_text[0].plain_text : null;
    const lastHighlighted = props['Last Highlighted'].date ? props['Last Highlighted'].date.start : null;
    const lastSynced = props['Last Synced'].date ? props['Last Synced'].date.start : null;
    const highlightCount = props.Highlights ? props.Highlights.number : null;

    // we need the block id to get the children
    // const blockId = 'd72ba4d9-be21-43bd-9c8a-3263a1b3980b';
    // notion.blocks.children.list({ block_id: blockId }).then((children) => {
    //   children.results.forEach((child) => {
    //     if (child.paragraph) {
    //       if (child.paragraph.rich_text.length) console.log('child', child.paragraph.rich_text[0].plain_text);
    //     }
    //   });
    // });

    return {
      id: page.id,
      pageTitle: pageTitle,
      tags: tags,
      author: author,
      lastHighlighted: lastHighlighted,
      highLightCount: highlightCount,
      lastSynced: lastSynced,
    };
  });

  return Response.json(bookList);
}
