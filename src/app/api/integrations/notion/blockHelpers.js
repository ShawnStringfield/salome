import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_SECRET });

export const getBlock = async (id) => {
  const { results } = await notion.blocks.children.list({ block_id: id });

  return results
    .map((block) => {
      const richText = block[block.type].rich_text[0];

      if (richText) {
        // Formatting Section;
        if (richText.plain_text.includes('Tags:')) return null;
        if (richText.plain_text.includes('(')) return richText.plain_text.slice(0, -1).trim();

        return richText.plain_text;
      } else return null;
    })
    .filter((el) => el !== null);
};
