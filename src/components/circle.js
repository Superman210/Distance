import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';

const Circle = ({ label, icon, style }) => {
    return (
      <TouchableOpacity style={[styles.circle, style]}>
        {icon && icon}
        {label && <Text style={styles.text}>{label}</Text>}
      </TouchableOpacity>
    );
};

const styles = {
  circle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'android' ? 60 : 60,
    width: Platform.OS === 'android' ? 60 : 60,
    backgroundColor: 'rgb(48,49,46)',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontFamily: Platform.OS === 'android' ? 'Brandon-med':null
  }
};

export default Circle;
