import { useEffect } from 'react'
import './filterStatistics.scss';
import Widget from '../../../components/Widget/Widget';
import { WidgetType } from '../../../dataTypes/WidgetType';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../api/apiRequest';
import { setFilterStatistics } from '../../../redux/features/FilterStatisticsReducer';

type Props = {}

const FilterStatistics = (props: Props) => {
    const dispatcher = useDispatch();

    useEffect(() => {
        apiRequest({ url: 'filter-statistics', method: 'GET' }).
            then((data: any) => {
                dispatcher(setFilterStatistics(data))
            })
    }, [])

    const widgetData: WidgetType[] = useSelector((state: any) => state.FilterStatisticsReducer.value);

    return (
        <div className='filterStatistics'>
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

export default FilterStatistics