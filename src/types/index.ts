export interface DataItem {
  id: number;
  title: string;
  body: string;
}

export interface DataState {
  data: DataItem[];
  error: string; // Include the error property
}

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: DataItem[];
}

export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string; // Error message
}

export const DELETE_ROW = 'DELETE_ROW';

interface DeleteRowAction {
  type: typeof DELETE_ROW;
  payload: number; // Assuming you use the row's ID as the payload
}

export const ADD_ROW = 'ADD_ROW';

interface AddRowAction {
  type: typeof ADD_ROW;
  payload: DataItem; // Assuming you use the row's ID as the payload
}

export type DataActionTypes =
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | DeleteRowAction
  | AddRowAction;
