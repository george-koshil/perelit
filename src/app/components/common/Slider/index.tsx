"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30 год',
  },
];

function valuetext(value: number) {
  return `${value}`;
}


type SliderProps = {
  value: number
  onChange: (event: Event, value: number | Array<number>, activeThumb: number) => void
}

export default function DiscreteSliderMarks(props: SliderProps) {
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={props.value}
        onChange={props.onChange}
        aria-label="Transfer time"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={30}
      />
    </Box>
  );
}