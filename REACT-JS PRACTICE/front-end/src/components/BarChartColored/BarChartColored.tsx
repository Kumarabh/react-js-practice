import { BarChartType } from '../../dataTypes/BarChartType';
import { ColorType } from '../../dataTypes/ColorType';
import './barChartColored.scss'
import { BarChart, Bar, Cell, XAxis, YAxis } from 'recharts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';

type Props = {
    chartHeader: string,
    chartData: BarChartType[],
    colors: ColorType[],
    chartWidth: number,
    chartHeight: number,
    showColorInfo: boolean
}

const BarChartColored = (props: Props) => {

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
    const colors = [...props.colors];

    return (
        <div className="chartColored">
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

            <BarChart
                width={props.chartWidth}
                height={props.chartHeight}
                data={props.chartData}
                barSize={20}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="xAxis" />
                <YAxis dataKey='yAxis' />
                <Bar dataKey="data" fill="#8884d8" label={{ position: 'top' }}>
                    {props.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]['color']} />
                    ))}
                </Bar>
            </BarChart>

            <div className="color-info-container">

                {props.showColorInfo && colors.map((element: ColorType, index: number) => {
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
    );
}

export default BarChartColored