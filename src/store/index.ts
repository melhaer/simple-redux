import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
