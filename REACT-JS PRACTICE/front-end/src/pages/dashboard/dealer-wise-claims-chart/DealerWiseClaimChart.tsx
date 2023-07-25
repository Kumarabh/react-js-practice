import './dealerWiseClaimChart.scss'
import { BarChartType } from '../../../dataTypes/BarChartType';
import BarChartColored from '../../../components/BarChartColored/BarChartColored';
import { setDealerWiseClaimChart } from '../../../redux/features/DealerWiseClaimChartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { apiRequest } from '../../../api/apiRequest';
import { ColorType } from '../../../dataTypes/ColorType';

const DealerWiseClaimChart = () => {

  const dispatcher = useDispatch();

  useEffect(() => {
    apiRequest({ url: 'dealer-wise-claim-chart', method: 'GET' }).
      then((data: any) => {
        console.log('dealer wise claim chart', data);
        dispatcher(setDealerWiseClaimChart(data))
      })
  }, [])

  const data: BarChartType[] = useSelector((state: any) => state.DealerWiseClaimChartReducer.value);

  const colors: ColorType[] = [
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' },
    { color: 'skyblue', info: '' }
  ]


  return (
    <div className='dealerWiseChart'>
      <BarChartColored chartHeader={'Dealer-wise claims'} chartData={data} showColorInfo={false} colors={colors} chartWidth={450} chartHeight={325} />
    </div>
  )
}

export default DealerWiseClaimChart