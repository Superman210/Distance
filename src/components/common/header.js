import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Badge } from 'native-base';

import Icon from 'react-native-vector-icons/Feather';

const header = ({ title, leftIcon, rightIcon, badgeText }) => {
  return (
    <Header style={styles.header}>
      <Left style={{ flex: 1 }}>
        <Button transparent>
          <Icon name={leftIcon} style={styles.icon} />
        </Button>
      </Left>
      <Body style={styles.body}>
      <Title style={styles.title}>{title}</Title>
      </Body>
      <Right style={{ flex: 1 }}>
        <Button transparent>
          <Icon name={rightIcon} style={styles.icon} />
          {
            badgeText && <View style={styles.badge}>
              <Text style={styles.badgeText}>{badgeText}</Text>
            </View>
          }
        </Button>
      </Right>
    </Header>
  );
};

const styles = {
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'GaspoSlab-Medium',
  },
  icon: {
    color: '#F8F9F9',
    backgroundColor: 'transparent',
    marginLeft: 20,
    fontSize: 25
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 5,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: 'black',
    fontSize: 9
  }
};

export default header;
