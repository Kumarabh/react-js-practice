import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const ModelWiseClaimChartSlice = createSlice({
    name: 'ModelWiseClaimChartSlice',
    initialState: {value: initialValue},
    reducers: {
        setModelWiseClaimChart: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setModelWiseClaimChart} = ModelWiseClaimChartSlice.actions;
export default ModelWiseClaimChartSlice.reducer;