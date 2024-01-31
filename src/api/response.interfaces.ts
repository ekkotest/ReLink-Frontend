export interface Proposition {
  proposition_id: string;
  proposition_type: string;
  description: string;
}

export interface PdfData {
  pdf_id: string;
  propositions: Proposition[];
}

export type UploadPdfResponse = {
  [key: string]: PdfData;
};
