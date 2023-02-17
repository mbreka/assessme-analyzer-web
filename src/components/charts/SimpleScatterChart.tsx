import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [...makeData(100)];

function * makeData(i: number) {
  let [x, y, z] = [1, 1, 1];
  for(;i>=0;i--) {
    yield {
      x: x+=1,
      y: y*=1.05,
      z: z*=1.1,
    }
  }
}

const SimpleScatterChart = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid /> */}
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#f76707" />
        </ScatterChart>
      </ResponsiveContainer>
    );
}

export default SimpleScatterChart;