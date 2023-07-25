import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const SideBarSlice = createSlice({
    name: 'SideBarSlice',
    initialState: {value: initialValue},
    reducers: {
        setSideBar: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setSideBar} = SideBarSlice.actions;
export default SideBarSlice.reducer;