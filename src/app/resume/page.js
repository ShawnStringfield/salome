import React from 'react';
import { jsonImporter } from '@/lib/jsonImporter';

const Page = async () => {
    const resume = await jsonImporter('/src/api/resume.json');
    return (
        <div>
            <h1>{resume.firstName} {resume.lastName}</h1>
        </div>
    );
};

export default Page;
