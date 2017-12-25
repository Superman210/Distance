import React from 'react';
import { Image } from 'react-native';

const ProfImage = ({ source }) => {
    return (
      <Image
        source={source}
        style={styles.image}
      />
    );
};

const styles = {
  image: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#f38368'
  },
};


export default ProfImage;
