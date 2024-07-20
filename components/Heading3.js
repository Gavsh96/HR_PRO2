import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Heading3 = ({children, style}) => {
  return <Text style={[styles.heading3, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading3: {
    fontSize: 18,
    fontWeight: '400',
    color: '#357ED9',
    fontFamily: 'Sarabun',
    lineHeight: 20,
  },
});

export default Heading3;
