'use server';

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });

export const AddBookmarkToDB = async (book, flag) => {
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
