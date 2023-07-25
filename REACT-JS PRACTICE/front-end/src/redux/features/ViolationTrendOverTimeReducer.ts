import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const ViolationTrendOverTimeSlice = createSlice({
    name: 'ViolationTrendOverTimeSlice',
    initialState: {value: initialValue},
    reducers: {
        setViolationTrendOverTime: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setViolationTrendOverTime} = ViolationTrendOverTimeSlice.actions;
export default ViolationTrendOverTimeSlice.reducer;