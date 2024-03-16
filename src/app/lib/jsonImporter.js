import { promises as fs } from 'fs'; 

export const jsonImporter = async (path) => {
    return JSON.parse(await fs.readFile(process.cwd() + path, 'utf8'));
};
