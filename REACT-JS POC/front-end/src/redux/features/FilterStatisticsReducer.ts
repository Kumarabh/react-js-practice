import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const FilterStatisticsSlice = createSlice({
    name: 'FilterStatisticsSlice',
    initialState: {value: initialValue},
    reducers: {
        setFilterStatistics: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setFilterStatistics} = FilterStatisticsSlice.actions;
export default FilterStatisticsSlice.reducer;