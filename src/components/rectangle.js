import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const Rectangle = ({ text, icon, contentStyle, containerStyle }) => {
  return (
    <View style={[styles.rectangle, containerStyle]}>
      {text ? <Text style={contentStyle}>{text}</Text> :
        <Icon name={icon} style={contentStyle} />
      }
    </View>
  );
};

const styles = {
  rectangle: {
    height: 40,
    width: 70,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Rectangle;
