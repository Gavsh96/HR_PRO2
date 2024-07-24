import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button1 = ({title, onPress, style, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={disabled ? null : onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 205,
    height: 42,
    marginTop: 20,
    backgroundColor: '#357ED9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Sarabun',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
  },
});

export default Button1;
