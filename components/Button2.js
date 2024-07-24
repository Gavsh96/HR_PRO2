import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button2 = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 205,
    height: 42,
    marginTop: 20,
    backgroundColor: '#D0E5FC', // light blue background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1, // add border
    borderColor: '#357ED9', // blue border color
  },
  buttonText: {
    color: '#357ED9', // blue text color
    fontFamily: 'Sarabun',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
  },
});

export default Button2;
