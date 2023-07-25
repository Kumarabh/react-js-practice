import React from 'react'
import '../../dataTypes/WidgetType'
import './widget.scss';
import { WidgetType } from '../../dataTypes/WidgetType';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Widget = (props: WidgetType) => {

    const data = {
        headerText: props.headerText,
        value: props.value,
        upPercentage: props.upPercentage,
        downPercentage: props.downPercentage,
        upText: props.upText,
        downText: props.downText
    }

    return (
        <div className="widget">
            <div className="widget-header">
                {data.headerText}
            </div>
            <div className="widget-body">
                <div className="widget-l">
                    {data.value}
                </div>
                <div className="widget-m ">
                    <p className='percentage positive'><span style={{ color: 'black' }}>{data.upPercentage}%</span> <ArrowDropUpIcon /></p>
                    <p className='faded-text'>({data.upText})</p>


                </div>
                <div className="widget-r ">
                    <p className='percentage negative'><span style={{ color: 'black' }}>{data.downPercentage}%</span><ArrowDropDownIcon /></p>
                    <p className='faded-text'>({data.downText})</p>

                </div>
            </div>

        </div>
    )
}

export default Widget