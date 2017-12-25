import React from "react";
import { View, Platform } from 'react-native';
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { LinearGradient, Stop } from 'react-native-svg'
import * as shape from "d3-shape";

class AreaChart extends React.PureComponent {

  render() {
    const data = [2200, 5200, 2700, 4000, 1500, 2600, 2000, 2400, 500];
    const dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const dataY = [5000, 2500, 0];

    return (
      <View style={{ flex: 1, marginHorizontal: 20, marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', height: Platform.OS === 'android' ? 125 : 150}}>
          <LineChart
            style={{ flex: 1 }}
            dataPoints={data}
            contentInset={{ top: 10, bottom: 5 }}
            curve={shape.curveNatural}
            renderGradient={({ id }) => (
              <LinearGradient id={id} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'rgb(211, 167,122)'} stopOpacity={1} />
                <Stop offset={'100%'} stopColor={'rgb(216, 147,113)'} stopOpacity={1} />
              </LinearGradient>
            )}
            numberOfTicks={2}
          />
          <YAxis
            dataPoints={dataY}
            contentInset={{ top: 30, bottom: 10, backgroundColor: 'red' }}
            labelStyle={{ color: 'white' }}
            formatLabel={value => {
              return dataY.map(num => {
                if (num === value) {
                  return value;
                }
              })
            }}
          />
        </View>

        <XAxis
          style={{ marginRight: 30 }}
          values={dataX}
          formatLabel={(value, index) => value}
          chartType={XAxis.Type.BAR}
          labelStyle={{ color: 'white' }}
        />
      </View>
    )
  }
}

export default AreaChart;