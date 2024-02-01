import { getPropositionsByUserAndPdf } from '@/app/api/proposition/endpoints';

export async function GET(request) {
  const res = await getPropositionsByUserAndPdf('uid', 'pdf_id_1');
  return Response.json(res);
}
