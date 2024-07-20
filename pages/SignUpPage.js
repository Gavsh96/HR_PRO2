import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import Input from "../components/Input";
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';

import axios from 'axios';

const SignUpPage = ({ switchScreen }) => {
  const [customerId, setCustomerId] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

      </View>
      <Heading2 style={styles.h2}>Get Started with</Heading2>
      <Heading1 style={styles.h1}>HR PRO2 ESS</Heading1>
      <Input
        inputText="Enter your Customer ID"
        value={customerId}
        onChangeText={setCustomerId}
        textColor="#000"
        keyboardType="default"
        style={styles.input}
      />
      <Button title="Continue" style={styles.button} />
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    width: screenWidth,
    height: screenHeight,
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 50, // Adjust this value to position the logo properly
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A33B3B', // Adjust this color to match your logo
  },
  h2: {
    marginTop: 150,
    marginBottom: 10,
    marginLeft: 35,// Updated marginBottom value
  },
  h1: {
    marginBottom: 40,
    marginLeft: 35,// Updated marginBottom value
  },
  button: {
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default SignUpPage;
