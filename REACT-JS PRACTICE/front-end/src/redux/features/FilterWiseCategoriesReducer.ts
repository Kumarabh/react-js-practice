import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const FilterWiseCategoriesSlice = createSlice({
    name: 'FilterWiseCategoriesSlice',
    initialState: {value: initialValue},
    reducers: {
        setFilterWiseCategories: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setFilterWiseCategories} = FilterWiseCategoriesSlice.actions;
export default FilterWiseCategoriesSlice.reducer;