import { Proposition, UploadPdfResponse } from '@/api/response.interfaces';

// Actions
export enum DataAction {
  UPLOAD_PDF = 'upload_pdf',
  GET_ALL_PDF = 'get_all_pdf',
  STICH_USER_PDF = 'stich_user_pdf',
  SAVE_PROPOSITION = 'save_proposition',
  GET_ALL_PROPOSITION = 'get_all_proposition',
  STICH_USER_PROPOSITION = 'stich_user_proposition',
  GET_PDF_PROPOSITION = 'get_pdf_proposition',
}

export interface PdfPropDataAction {
  type: DataAction;
  response: UploadPdfResponse | any;
}

export class PdfPropData {
  pdfFileNames: string[];
  pdfFileNameToIdMap: Map<string, string>;
  pdfIdToPropsMap: Map<string, Proposition[]>;
  loading: boolean;

  constructor(data?: PdfPropData) {
    if (data instanceof PdfPropData) {
      this.pdfFileNames = data.pdfFileNames;
      this.pdfFileNameToIdMap = data.pdfFileNameToIdMap;
      this.pdfIdToPropsMap = data.pdfIdToPropsMap;
      this.loading = data.loading;
    } else {
      this.pdfFileNames = [];
      this.pdfFileNameToIdMap = new Map<string, string>();
      this.pdfIdToPropsMap = new Map<string, Proposition[]>();
      this.loading = false;
    }
  }

  getPdfProps(pdfId: string) {
    return this.pdfIdToPropsMap.get(pdfId);
  }
}
