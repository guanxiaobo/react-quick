import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: {},
	authButtonMap: {}
};

const globalManagementSlice = createSlice({
	name: 'globalManagement',
	initialState,
	reducers: {
		updateAuthButtonList: (state, action) => {
			state.authButtonMap = action.payload;
		}
	}
});

export const { updateAuthButtonList } = globalManagementSlice.actions;
export default globalManagementSlice.reducer;
