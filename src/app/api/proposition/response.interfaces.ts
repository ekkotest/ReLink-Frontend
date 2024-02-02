export interface PropositionResponse {
  proposition_id: string;
  proposition_type: string;
  description: string;
}
export interface LibraryPropositionResponse extends PropositionResponse {
  is_saved: boolean;
}
export interface PdfPropositionResponse extends LibraryPropositionResponse {
  pdf_id: string;
}
export interface PdfDataResponse {
  pdf_id: string;
  propositions: PropositionResponse[];
}

export type UploadFileResponse = {
  [key: string]: PdfDataResponse;
};

export type GetLibraryPropositionsResponse = {
  propositions: LibraryPropositionResponse[];
};

export type GetPropositionsResponse = {
  propositions: PdfPropositionResponse[];
};
