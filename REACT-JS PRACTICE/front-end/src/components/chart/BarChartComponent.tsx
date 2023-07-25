import { BarChartType } from '../../dataTypes/BarChartType';
import './barChartComponent.scss'
import { BarChart, Bar,XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
  chartHeader: string,
  chartData: BarChartType[]
}

const BarChartComponent = (props: Props) => {

  return (
    <div className='chart'>
        <div className="title">{props.chartHeader}</div>
        <ResponsiveContainer width="100%" height={100} aspect={2 / 1} className='chardGrid'>
        <BarChart
          data={props.chartData}
          margin={{
            top: 0,
            right: 15,
            left: 15,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis dataKey="xAxis" scale="point" padding={{ left: 100, right: 100 }} />
          <YAxis dataKey="yAxis"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="data" fill="skyblue" background={{ fill: 'white' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent