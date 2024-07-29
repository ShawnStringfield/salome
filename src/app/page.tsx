import React from 'react';
import { jsonImporter } from './lib/jsonImporter';
import { Navigation } from './components/nav/Navigation';
import { Landing } from './Landing';

export default async function Home() {
  const data = await jsonImporter('/public/landing.json');

  return (
    <div>
      <Navigation />
      <Landing landingData={data} />;
    </div>
  );
}
