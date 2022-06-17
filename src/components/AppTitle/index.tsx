import React from 'react';
import {StyleSheet, Text} from 'react-native';

type props = {
  title: string;
};

export const AppTitle = ({title}: props) => {
  return <Text style={styles.name}>{title}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'PressStart2P-Regular',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: '5%',
    marginTop: '2%',
  },
});
