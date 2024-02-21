import {getBookList} from '../apiMethods';

export async function GET() {
  return Response.json(await getBookList());
}
