'use server';

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });

import { getBlock } from '../../../api/integrations/notion/blockHelpers';

const getBookProps = async (book) => {
  const props = book.properties;
  const title = props.Title.title[0].plain_text;
  const author = props.Author.rich_text.length ? props.Author.rich_text[0].plain_text : null;
  const lastHighlighted = props['Last Highlighted'].date ? props['Last Highlighted'].date.start : null;
  const lastSynced = props['Last Synced'].date ? props['Last Synced'].date.start : null;
  const highlightCount = props.Highlights ? props.Highlights.number : null;
  const bookCover = book.cover.external.url;
  const category = props.Tag.select ? props.Tag.select.name : null;

  return {
    id: book.id,
    title: title,
    author: author,
    lastHighlighted: lastHighlighted,
    highlightCount: highlightCount,
    lastSynced: lastSynced,
    bookmarked: props.Bookmark.checkbox,
    bookCover: bookCover,
    url: book.url,
    category: category,
  };
};

export const getAllBooksFromNotionDB = async () => {
  const booksFilter = { property: 'Category', select: { equals: 'Books' } };
  const booksSorts = [{ property: 'Title', direction: 'ascending' }];
  const queryOptions = {
    database_id: process.env.NOTION_BOOKS_DATABASE_ID,
    filter: booksFilter,
    sorts: booksSorts,
  };
  const books = await notion.databases.query(queryOptions);
  return await Promise.all(
    books.results.map(async (book) => {
      return getBookProps(book);
    })
  );
};

export const getBookFromNotionDB = async (id) => {
    const book = await notion.pages.retrieve({ page_id: id });
    const bookDetails = await getBookProps(book);
    bookDetails.highlights = await getBlock(id);
    return bookDetails;  
};

export const addBookmarkToNotionDB = async (book, flag) => {
  const response = await notion.pages.update({
    page_id: book.id,
    properties: {
      Bookmark: {
        checkbox: flag,
      },
    },
  });
  return response;
};
