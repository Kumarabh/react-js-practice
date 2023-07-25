import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const UserGridSlice = createSlice({
    name: 'UserGridSlice',
    initialState: {value: initialValue},
    reducers: {
        setUserGrid: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setUserGrid} = UserGridSlice.actions;
export default UserGridSlice.reducer;