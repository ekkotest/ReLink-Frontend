import { createContext, Dispatch, useContext, useReducer } from 'react';

import { DataAction, PdfPropData, PdfPropDataAction } from '@/lib/interfaces';

import { UploadPdfResponse } from '@/api/response.interfaces';

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
    case DataAction.UPLOAD_PDF: {
      const output: UploadPdfResponse = action.response;
      for (const p in output) {
        // {pdf_file_name: {pdf_id, propositions: [{proposition_id ,proposition_type, description}]}}
        data.pdfFileNames.push(p);
        data.pdfFileNameToIdMap.set(p, output[p].pdf_id);
        data.pdfIdToPropsMap.set(output[p].pdf_id, output[p].propositions);
      }
      return new PdfPropData(data);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Initial Data
const initialData = new PdfPropData();
