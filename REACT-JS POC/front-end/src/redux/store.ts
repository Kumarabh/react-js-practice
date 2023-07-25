import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './features/UserReducer';
import SideBarReducer from './features/SideBarReducer';
import DealerWiseClaimChartReducer from './features/DealerWiseClaimChartReducer';
import FilterStatisticsReducer from './features/FilterStatisticsReducer';
import FilterWiseCategoriesReducer from './features/FilterWiseCategoriesReducer';
import ModelWiseClaimChartReducer from './features/ModelWiseClaimChartReducer';
import UserGridReducer from './features/UserGridReducer';
import ViolationCategoriesCountReducer from './features/ViolationCategoriesCountReducer';
import ViolationTrendOverTimeReducer from './features/ViolationTrendOverTimeReducer';


const store = configureStore({
    reducer: {
        UserReducer, 
        SideBarReducer, 
        DealerWiseClaimChartReducer,
        FilterStatisticsReducer,
        FilterWiseCategoriesReducer,
        ModelWiseClaimChartReducer,
        UserGridReducer,
        ViolationCategoriesCountReducer,
        ViolationTrendOverTimeReducer

    }
})

export default store;