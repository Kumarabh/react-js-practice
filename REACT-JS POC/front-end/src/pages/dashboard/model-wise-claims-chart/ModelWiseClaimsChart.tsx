import './modelWiseClaimsChart.scss'
import BarChartColored from '../../../components/BarChartColored/BarChartColored';
import { BarChartType } from '../../../dataTypes/BarChartType';
import { useDispatch, useSelector } from 'react-redux';
import { setModelWiseClaimChart } from '../../../redux/features/ModelWiseClaimChartReducer';
import { useEffect } from 'react';
import { apiRequest } from '../../../api/apiRequest';
import { ColorType } from '../../../dataTypes/ColorType';
type Props = {}

const ModelWiseClaimsChart = (props: Props) => {
  const dispatcher = useDispatch();

  useEffect(() => {
    apiRequest({ url: 'model-wise-claim-chart', method: 'GET' }).
      then((data: any) => {
        dispatcher(setModelWiseClaimChart(data))
      })
  }, [])

  const data: BarChartType[] = useSelector((state: any) => state.ModelWiseClaimChartReducer.value);


  const colors: ColorType[] = [
    { color: '#FF8042', info: 'Accelerating' },
    { color: '#0088FE', info: 'Slipping' },
    { color: '#FFBB28', info: 'Noise' },
    { color: '#00C49F', info: 'Others' }
  ]

  return (
    <div className='modelWiseChart'>
      <BarChartColored chartHeader={'Model-wise Claims'} chartData={data} showColorInfo={true} colors={colors} chartWidth={300} chartHeight={325} />
    </div>
  )
}

export default ModelWiseClaimsChart