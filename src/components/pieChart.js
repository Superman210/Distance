import React from 'react'
import { View, Text, Platform, requireNativeComponent } from 'react-native';
// import { PieChart, ProgressCircle } from 'react-native-svg-charts';
import ProgressCircle from './utils/progressCircle';
import PieChartItem from './pieChartItem';

import * as Progress from 'react-native-progress';

class PieCharts extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <PieChartItem
          style={{ height:175, width:175 }}
          progress={0.6}
          progressColor='rgb(114, 206, 222)'
          title={63}
        />

        <PieChartItem
          style={{ height:145, width:145 }}
          progress={0.95}
          progressColor='rgb(225, 107, 146)'
          title={98}
        />

        <PieChartItem
          style={{ height:115, width:115 }}
          progress={0.85}
          progressColor='rgb(242, 193, 79)'
          title={87}
        />

        <PieChartItem
          style={{ height:85, width:85 }}
          progress={0.75}
          progressColor='rgb(230, 141, 112)'
          title={74}
        />

        <View style={{ position: 'absolute', borderRadius: 100, }}>
          <Text
            style={{ color: 'white', fontSize: 8, fontFamily: Platform.OS === 'android' ? 'Brandon-med':null }}
          >
            DISTANCE
          </Text>
        </View>
      </View>
    )
  }
}

const styles = {
  pieTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 7
  }
};

export default PieCharts