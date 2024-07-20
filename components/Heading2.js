import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading2 = ({ children, style }) => {
  return <Text style={[styles.heading2, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading2: {
    fontSize: 18,
    fontWeight: '300',
    color: '#A33B3B',
    fontFamily: 'Sarabun',
    lineHeight: 20,
  },
});

export default Heading2;
