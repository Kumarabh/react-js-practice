import React from 'react';
import './multiSeriesLineChart.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MultilineSeriesType } from '../../dataTypes/MultilineSeriesType';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  chartHeader: string,
  chartData: MultilineSeriesType[],
  colors: string[],
  chartWidth: number,
  chartHeight: number
}

const MultiSeriesLineChart = (props: Props) => {

  // popover start
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // popover ends

  return (
    <div className="multiSeriesLineChart">
      <div className="title">{props.chartHeader}
        <Button className='popover-btn' aria-describedby={id} variant="contained" onClick={handleClick} >
          <MoreVertIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2 }}>View in Fullscreen</Typography>
          <Typography sx={{ p: 2 }}>Print Chart</Typography>
          <hr />
          <Typography sx={{ p: 2 }}>View as Pie Chart</Typography>
          <Typography sx={{ p: 2 }}>View as Line Chart</Typography>
          <hr />
          <Typography sx={{ p: 2 }}>Download CSV</Typography>
          <Typography sx={{ p: 2 }}>Download XLS</Typography>
          <Typography sx={{ p: 2 }}>View Data Table</Typography>




        </Popover>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={props.chartWidth}
          height={props.chartHeight}
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="xAxis" />
          <YAxis dataKey='yAxis' />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="line1" stroke="#8884d8" />
          <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="line3" stroke="orange" />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default MultiSeriesLineChart