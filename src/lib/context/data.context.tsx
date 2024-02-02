import { createContext, Dispatch, useContext, useReducer } from 'react';

import { DataAction, PdfPropData, PdfPropDataAction } from '@/lib/interfaces';

import {
  GetLibraryPropositionsResponse,
  GetPropositionsResponse,
  PdfPropositionResponse,
  UploadFileResponse,
} from '@/app/api/proposition/response.interfaces';

// Contexts
export const DataContext = createContext(new PdfPropData());
export const DataDispatchContext = createContext(
  (() => undefined) as Dispatch<PdfPropDataAction>
);

export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}

// Context Providers
export function DataProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, new PdfPropData());

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

// Reducer
function dataReducer(data: PdfPropData, action: PdfPropDataAction) {
  switch (action.type) {
    // PDF
    case DataAction.UPLOAD_PDF: {
      const output: UploadFileResponse = action.response;
      // {pdf_file_name: {pdf_id, propositions: [{proposition_id ,proposition_type, description}]}}
      for (const p in output) {
        data.pdfIdToFileNameMap.set(output[p].pdf_id, p);
        data.pdfIdToPropIdsMap.set(output[p].pdf_id, new Set());
        output[p].propositions.forEach((prop) => {
          const temp: PdfPropositionResponse = {
            ...prop,
            is_saved: false,
            pdf_id: output[p].pdf_id,
          };
          data.pdfIdToPropIdsMap
            .get(output[p].pdf_id)
            ?.add(prop.proposition_id);
          data.propIdToPropMap.set(prop.proposition_id, temp);
        });
      }

      return new PdfPropData(data);
    }

    // Propositions
    case DataAction.GET_LIB_PROPOSITION: {
      const output: GetLibraryPropositionsResponse = action.response;
      // propositions: [{proposition_id ,proposition_type, description, is_saved}]
      output.propositions.forEach((p) => {
        data.propIdToPropMap.set(p.proposition_id, p);
      });
      return new PdfPropData(data);
    }

    case DataAction.GET_PDF_PROPOSITION: {
      const output: GetPropositionsResponse = action.response;
      // {propositions: [{proposition_id , pdf_id, proposition_type, description, is_saved}]}
      const set = new Set<string>();
      output.propositions.forEach((p) => {
        set.add(p.proposition_id);
        data.propIdToPropMap.set(p.proposition_id, p);
      });
      data.pdfIdToPropIdsMap.set(output.propositions[0].pdf_id, set);

      return new PdfPropData(data);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
