import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'native-base';

class ExploreScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Explore',
    tabBarIcon: ({ focused }) => (
      <Image style={{ width: 20, height: 15, }}
             resizeMode='contain'
             source={require('../../../Design_Assets/lower_menu/explorewhite.png')}
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
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

export default ExploreScreen;
