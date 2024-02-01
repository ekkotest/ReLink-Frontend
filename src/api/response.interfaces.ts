export interface Proposition {
  proposition_id: string;
  proposition_type: string;
  description: string;
}
export interface PdfProposition extends Proposition {
  pdf_id: string;
  is_saved: boolean;
}
export interface PdfData {
  pdf_id: string;
  propositions: Proposition[];
}

export type UploadFileResponse = {
  [key: string]: PdfData;
};

export type GetPropositionsResponse = {
  propositions: PdfProposition[];
};
