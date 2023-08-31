import axios from 'axios';
import { Dispatch } from 'redux';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DataActionTypes,
  DELETE_ROW,
  ADD_ROW,
  DataItem,
} from '../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

// Define Thunk type
type ThunkResult<R> = ThunkAction<R, RootState, undefined, DataActionTypes>;

export const fetchData =
  (): ThunkResult<void> => async (dispatch: Dispatch<DataActionTypes>) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = response.data.slice(0, 10);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: posts });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: 'An error occurred. Please, try again later.',
      });
    }
  };

export const deleteRow = (id: number): DataActionTypes => ({
  type: DELETE_ROW,
  payload: id,
});

export const addRow = (newRow: DataItem): DataActionTypes => ({
  type: ADD_ROW,
  payload: newRow,
});
