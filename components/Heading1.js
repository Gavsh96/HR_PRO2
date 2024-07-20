import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Heading1 = ({ children, style }) => {
  return <Text style={[styles.heading1, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8F1E1E', // The specified color
    fontFamily: 'Sarabun',
    lineHeight: 22, // Adjusted to match font-size
  },
});

export default Heading1;
