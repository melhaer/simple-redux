import {
  DataActionTypes,
  DataState,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DELETE_ROW,
  ADD_ROW,
} from '../types';

const initialState: DataState = {
  data: [],
  error: '', // Initialize error as an empty string
};

const dataReducer = (
  state = initialState,
  action: DataActionTypes
): DataState => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload }; // Set the error message
    case DELETE_ROW:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case ADD_ROW:
      return { ...state, data: [...state.data, action.payload] }; // Append the new row
    default:
      return state;
  }
};

export default dataReducer;
