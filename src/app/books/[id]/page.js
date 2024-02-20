import { Client } from '@notionhq/client';

export default async function Page({ params }) {
  const notion = new Client({ auth: 'secret_owczMRL3fHPG6gWRmfXuMTN7N8Tru6OAQEaFTTXkGJd' });

  let content;

  const highlights = notion.blocks.children.list({ block_id: params.id }).then((children) => {
    return children.results.map((child) => {
      if (child.paragraph) {
        if (child.paragraph.rich_text.length) {
          content = child.paragraph.rich_text[0].plain_text;
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
          <div className="mb-4" key={index}>
            <div>{highlight}</div>
          </div>
        );
      })}
    </div>
  );
}
