import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './selectComponent.scss'
type Props = {
    componentName: string
}
const SelectComponent = (props: Props) => {

    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={"demo-simple-select-helper-label" + props.componentName}>{props.componentName}</InputLabel>
        <Select
          className='select'
          labelId={"demo-simple-select-helper-label" + props.componentName}
          id={"demo-simple-select-helper" + props.componentName}
          value={age}
          label={props.componentName}
          onChange={handleChange}
          placeholder={'Make'}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectComponent