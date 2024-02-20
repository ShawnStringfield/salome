import { Client } from '@notionhq/client';

export default async function Page({ params }) {
  const notion = new Client({ auth: process.env.NOTION_SECRET });

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

  const h = await highlights;

  return (
    <div>
      {h.map((highlight, index) => {
        return (
          <div className="mb-10" key={index}>
            <div>{highlight}</div>
          </div>
        );
      })}
    </div>
  );
}
