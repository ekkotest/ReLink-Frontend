import { createContext, Dispatch, useContext, useReducer } from 'react';

import { DataAction, PdfPropData, PdfPropDataAction } from '@/lib/interfaces';

import {
  GetPropositionsResponse,
  Proposition,
  UploadFileResponse,
} from '@/api/response.interfaces';

// Contexts
export const DataContext = createContext({});
export const DataDispatchContext = createContext(
  (() => undefined) as Dispatch<any>
);

export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}

// Context Providers
export function DataProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, initialData);

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
      for (const p in output) {
        // {pdf_file_name: {pdf_id, propositions: [{proposition_id ,proposition_type, description}]}}
        data.pdfFileNames.push(p);
        data.pdfIdToFileNameMap.set(output[p].pdf_id, p);
        data.pdfIdToPropsMap.set(output[p].pdf_id, output[p].propositions);
        output[p].propositions.forEach((prop) => {
          data.propIdToIsSavedMap.set(prop.proposition_id, false);
        });
      }

      return new PdfPropData(data);
    }

    // Propositions
    case DataAction.GET_PDF_PROPOSITION: {
      const output: GetPropositionsResponse = action.response;
      const props: Proposition[] = [];
      output.propositions.forEach((p) => {
        data.propIdToIsSavedMap.set(p.proposition_id, p.is_saved);
        props.push({
          proposition_id: p.proposition_id,
          proposition_type: p.proposition_type,
          description: p.description,
        });
      });
      data.pdfIdToPropsMap.set(output.propositions[0].pdf_id, props);

      return new PdfPropData(data);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Initial Data
const initialData = new PdfPropData();
