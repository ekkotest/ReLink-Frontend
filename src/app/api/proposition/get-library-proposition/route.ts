import { getLibraryPropositions } from '@/app/api/proposition/endpoints';

export async function GET(request) {
  const res = await getLibraryPropositions('uid');
  return Response.json(res);
}
