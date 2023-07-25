import React, { useEffect } from 'react'
import './violationCategoriesCountChart.scss'
import PieChartComponent from '../../../components/pie-chart/PieChartComponent';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../api/apiRequest';
import { setModelWiseClaimChart } from '../../../redux/features/ModelWiseClaimChartReducer';
import { setViolationCategoriesCount } from '../../../redux/features/ViolationCategoriesCountReducer';
import { ColorType } from '../../../dataTypes/ColorType';
type Props = {}

const ViolationCategoriesCountChart = (props: Props) => {

  const dispatcher = useDispatch();

  useEffect(() => {
    apiRequest({ url: 'violation-categories-count', method: 'GET' }).
      then((data: any) => {
        dispatcher(setViolationCategoriesCount(data))
      })
  }, [])

  const data: any = useSelector((state: any) => state.ViolationCategoriesCountReducer.value);


  const colors: ColorType[] = [
    { color: '#0088FE', info: 'Control Direction/path' },
    { color: '#00C49F', info: 'Color Speed' },
    { color: '#FFBB28', info: 'Loss of propulsion' },
    { color: '#FF8042', info: 'Others' }]

  return (
    <PieChartComponent chartHeader={'Violation Categories - count'} data02={data} chartValue={'200'} colors={colors} />
  )
}

export default ViolationCategoriesCountChart