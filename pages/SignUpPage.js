import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import Input from '../components/Input';
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';

import axios from 'axios';

const SignUpPage = ({switchScreen}) => {
  const [customerId, setCustomerId] = useState('');

  const checkLicenseCode = async () => {
    try {
      /*const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        switchScreen('Home');
      }*/
      switchScreen('SignUpSuccess');
    } catch (error) {
      console.error('Error checking license code:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Heading2 style={styles.h2}>Get Started with</Heading2>
      <Heading1 style={styles.h1}>HRPRO2e</Heading1>
      <Input
        inputText="Enter your License Code"
        value={customerId}
        onChangeText={setCustomerId}
        textColor="#000"
        keyboardType="default"
        style={styles.input}
      />
      <Button
        title="Continue"
        onPress={checkLicenseCode}
        style={styles.button}
      />
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center children horizontally
    backgroundColor: '#FAFAFA',
    width: screenWidth,
    height: screenHeight,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
  },
  h2: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  h1: {
    marginBottom: 80,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default SignUpPage;
