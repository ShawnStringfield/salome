import { getBook } from '../../apiMethods';

export async function GET(request, { params }) {
  return Response.json(await getBook(params.id));
}
