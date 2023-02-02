import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>{
        props.dataPoints.map(dataPoint => 
        <ChartBar 
            key={dataPoint.label}
            maxValue={totalMaximum}
            label={dataPoint.label}
            value={dataPoint.value}/>)
    }</div>
  )
}

export default Chart