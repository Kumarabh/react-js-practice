import {createSlice} from '@reduxjs/toolkit';

const initialValue: any = []

const DealerWiseClaimChartSlice = createSlice({
    name: 'DealerWiseClaimChartSlice',
    initialState: {value: initialValue},
    reducers: {
        setDealerWiseClaimChart: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {setDealerWiseClaimChart} = DealerWiseClaimChartSlice.actions;
export default DealerWiseClaimChartSlice.reducer;