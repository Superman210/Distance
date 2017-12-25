import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../components/utils/dimensions';
import Header from '../../components/common/header';
import ProfImage from '../../components/profImage';
import Circle from '../../components/circle';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    tabBarIcon: ({ focused }) => (
      <Image style={{ width: 15, height: 15, }}
             source={require('../../../Design_Assets/lower_menu/profile_active.png')}
      />
    ),
  });

  render() {
    const header = (
      <Header
        leftIcon='menu'
        rightIcon='mail'
        badgeText='1'
      />
    );

    const profInitialData = (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ProfImage source={require('../../../Design_Assets/me.png')} />

            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>

            <View style={{ flex:1, flexDirection: 'row' }}>
              <Circle style={styles.circle}
                 icon={<Icon name='image' style={styles.circleIcon} />}
              />
              <Circle style={styles.circle}
                 icon={<Icon name='ios-bookmark-outline' style={styles.circleIcon} />}
              />
            </View>
          </View>
        </View>


        <View style={{ flex: 2, backgroundColor: 'green' }} />
      </View>
    );

    return (
      <Container>
        <ImageBackground
          source={require('../../../Design_Assets/bgprofile.png')}
          style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, }}
        >
          {header}

          <Content>
            {profInitialData}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  text: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'Brandon-med' : null
  },
  editBtn: {
    borderColor: '#f38368',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: 'black',
    marginHorizontal:2
  },
  circleIcon:{
    backgroundColor: 'transparent',
    fontSize:25,
    color: 'white'
  }
};

export default ProfileScreen;
