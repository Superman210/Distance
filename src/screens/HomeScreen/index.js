import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    tabBarIcon: ({ focused }) => (
        <Image style={{ width: 15, height: 15, }}
               source={require('../../../Design_Assets/lower_menu/homewhite.png')}
        />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default HomeScreen;
