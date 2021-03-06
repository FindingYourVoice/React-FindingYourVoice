import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from 'config/colors.json';

function PageHeader({ source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 240,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
