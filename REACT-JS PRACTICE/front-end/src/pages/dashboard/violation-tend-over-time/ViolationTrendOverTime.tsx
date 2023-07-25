import React, { useEffect } from 'react'
import './violationTrendOverTime.scss'
import MultiSeriesLineChart from '../../../components/multi-series-line-chart/MultiSeriesLineChart'
import { MultilineSeriesType } from '../../../dataTypes/MultilineSeriesType'
import { useDispatch, useSelector } from 'react-redux'
import { apiRequest } from '../../../api/apiRequest'
import { setViolationTrendOverTime } from '../../../redux/features/ViolationTrendOverTimeReducer'

type Props = {}

const ViolationTrendOverTime = (props: Props) => {

  const dispatcher = useDispatch();

  useEffect(() => {
    apiRequest({ url: 'violation-trend-over-time', method: 'GET' }).
      then((data: any) => {
        dispatcher(setViolationTrendOverTime(data))
      })
  }, [])

  const data: MultilineSeriesType[] = useSelector((state: any) => state.ViolationTrendOverTimeReducer.value);


  return (
    <div className='violationTrendOverTime'>
      <MultiSeriesLineChart chartData={data} chartHeader={'Violations Trend Over Time'} colors={[]} chartWidth={500} chartHeight={300} />
    </div>
  )
}

export default ViolationTrendOverTime