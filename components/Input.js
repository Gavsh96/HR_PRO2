import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const Input = ({
  inputText,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  placeholderTextColor,
  textColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{inputText}</Text>
      <TextInput
        style={[styles.input, {color: textColor}]}
        placeholder={placeholder}
        placeholderTextColor="#357ED9"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 10,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#357ED9', // Adjust color to match the label color in the image
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#357ED9', // Adjust color to match the underline color in the image
    fontSize: 16,
    marginTop: 8,
    marginBottom: 10,
  },
});

export default Input;
