import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from './utils/progressCircle';

const PieChartItem = ({ style, progressColor, title, progress }) => {

  return (
    <View style={{ position: 'absolute' }}>
      <View style={{ alignItems: 'center', position: 'absolute', zIndex: 2 }}>
        <ProgressCircle
          style={style}
          progress={progress}
          progressColor={progressColor}
        />
        <Text style={[styles.pieTitle, { bottom: 3 }]}>{title}</Text>
      </View>

      <View style={{ alignItems: 'center', zIndex: 1, }}>
        <ProgressCircle
          style={style}
          progress={1}
          progressColor={'rgb(61,60,58)'}
        />
      </View>
    </View>
  );
};

const styles = {
  pieTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 7
  }
};

export default PieChartItem;
