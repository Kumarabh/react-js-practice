import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const ViolationCategoriesCountSlice = createSlice({
    name: 'ViolationCategoriesCountSlice',
    initialState: {value: initialValue},
    reducers: {
        setViolationCategoriesCount: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setViolationCategoriesCount} = ViolationCategoriesCountSlice.actions;
export default ViolationCategoriesCountSlice.reducer;