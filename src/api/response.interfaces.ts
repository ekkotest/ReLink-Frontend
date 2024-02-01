export interface PropositionResponse {
  proposition_id: string;
  proposition_type: string;
  description: string;
}
export interface PdfPropositionResponse extends PropositionResponse {
  pdf_id: string;
  is_saved: boolean;
}
export interface PdfDataResponse {
  pdf_id: string;
  propositions: PropositionResponse[];
}

export type UploadFileResponse = {
  [key: string]: PdfDataResponse;
};

export type GetPropositionsResponse = {
  propositions: PdfPropositionResponse[];
};
