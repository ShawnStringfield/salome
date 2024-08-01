import React from 'react';
import { jsonImporter } from './lib/jsonImporter';
import { Landing } from './Landing';

export default async function Home() {
  const data = await jsonImporter('/public/landing.json');

  return (
    <div>
      <Landing landingData={data} />;
    </div>
  );
}
