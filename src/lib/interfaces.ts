import {
  GetPropositionsResponse,
  PdfPropositionResponse,
  UploadFileResponse,
} from '@/api/response.interfaces';

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
  response: UploadFileResponse | GetPropositionsResponse | any;
}

export class PdfPropData {
  pdfIdToFileNameMap: Map<string, string>;
  pdfIdToPropIdsMap: Map<string, Set<string>>;
  propIdToPropMap: Map<string, PdfPropositionResponse>;
  loading: boolean;

  constructor(data?: PdfPropData) {
    if (data instanceof PdfPropData) {
      this.pdfIdToFileNameMap = data.pdfIdToFileNameMap;
      this.pdfIdToPropIdsMap = data.pdfIdToPropIdsMap;
      this.propIdToPropMap = data.propIdToPropMap;
      this.loading = data.loading;
    } else {
      this.pdfIdToFileNameMap = new Map<string, string>();
      this.pdfIdToPropIdsMap = new Map<string, Set<string>>();
      this.propIdToPropMap = new Map<string, PdfPropositionResponse>();
      this.loading = false;
    }
  }
}
