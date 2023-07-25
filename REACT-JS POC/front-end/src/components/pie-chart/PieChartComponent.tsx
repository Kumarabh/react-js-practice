import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './pieChartComponent.scss';
import { PieChartType } from '../../dataTypes/PieChartType';
import { ColorType } from '../../dataTypes/ColorType';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';

type Props = {
  chartHeader: string,
  chartValue: string | number | any,
  data02: PieChartType[]
  colors: ColorType[]
}

const PieChartComponent = (props: Props) => {
  const COLORS = [...props.colors];

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
    <div className="pieChart" style={{ height: '300px' }}>
      <div className="title">
        {props.chartHeader}
        {/* popover start */}
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
        {/* popover ends */}
      </div>
      <ResponsiveContainer width="100%" height="72%" >
        <PieChart width={200} height={200}>

          <Pie
            data={props.data02}
            cx={120}
            cy={120}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label

          >
            {props.data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]['color']} />
            ))}
          </Pie>

          <Pie
            data={props.data02}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {props.data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]['color']} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="color-info-container">

        {COLORS.map((element: ColorType, index: number) => {
          return (
            <div className='color-info'>
              <div className='info-c' style={{ background: element.color }}>

              </div>
              <div className='info-p'>
                {element.info}
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default PieChartComponent