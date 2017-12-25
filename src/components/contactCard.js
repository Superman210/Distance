import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import ProfImage from './profImage';


const Card = ({ imageUrl, text, textBgColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ProfImage source={imageUrl}/>
      </View>
      <View style={[styles.textContainer, { backgroundColor: textBgColor }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    width: 80,
    backgroundColor: '#31302e',
    borderRadius: 5,
    marginRight: 5,
    justifyContent: 'space-between'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  textContainer: {
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 8
  }
}

export default Card
