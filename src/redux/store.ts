import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice';

export default configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});
