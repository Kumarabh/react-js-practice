import React, { useEffect } from 'react'
import './filterCategories.scss';
import { WidgetType } from '../../../dataTypes/WidgetType';
import Widget from '../../../components/Widget/Widget';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../api/apiRequest';
import { setFilterWiseCategories } from '../../../redux/features/FilterWiseCategoriesReducer';

type Props = {}

const FilterCategories = (props: Props) => {
    const dispatcher = useDispatch();

    useEffect(() => {
        apiRequest({ url: 'filter-wise-categories', method: 'GET' }).
            then((data: any) => {
                dispatcher(setFilterWiseCategories(data))
            })
    }, [])

    const widgetData: WidgetType[] = useSelector((state: any) => state.FilterWiseCategoriesReducer.value);

    return (
        <div className='filterCategories'>
            <div className="widgets">
                {
                    widgetData.map((element: WidgetType, index: number) => {
                        return (
                            <Widget
                                key={index}
                                headerText={element.headerText}
                                value={element.value}
                                upPercentage={element.upPercentage}
                                downPercentage={element.downPercentage}
                                upText={element.upText}
                                downText={element.downText}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilterCategories