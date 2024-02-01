// 'use server';

import {
  LibraryPropositionResponse,
  PdfPropositionResponse,
} from '@/app/api/proposition/response.interfaces';

export async function getPropositionsByUserAndPdf(
  uid: string,
  pdfId: string
): Promise<{ propositions: PdfPropositionResponse[] }> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        propositions: [
          {
            proposition_id: '1',
            pdf_id: pdfId,
            proposition_type: 'Hypothesis',
            description: 'Lorem ipsum',
            is_saved: true,
          },
        ],
      });
    }, 3000);
  });
}

export async function getLibraryPropositions(
  uid: string
): Promise<{ propositions: LibraryPropositionResponse[] }> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        propositions: [
          {
            proposition_id: 'prop_1',
            proposition_type: 'Hypothesis',
            description:
              'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
            is_saved: true,
          },
          {
            proposition_id: 'prop_2',
            proposition_type: 'Observation',
            description:
              'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
            is_saved: true,
          },
          {
            proposition_id: 'prop_3',
            proposition_type: 'Case Study',
            description:
              'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
            is_saved: true,
          },
          {
            proposition_id: 'prop_4',
            proposition_type: 'Experiment',
            description:
              'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
            is_saved: true,
          },
          {
            proposition_id: 'prop_5',
            proposition_type: 'Experiment',
            description:
              'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
            is_saved: true,
          },
        ],
      });
    }, 3000);
  });
}
