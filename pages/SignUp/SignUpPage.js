import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button1';
import Input from '../../components/Input';
import Heading1 from '../../components/Heading1';
import Heading2 from '../../components/Heading2';

const SignUpPage = ({switchScreen}) => {
  const [licenseCode, setLicenseCode] = useState('');

  const checkLicenseCode = async () => {
    try {
      /*const userId = await AsyncStorage.getItem('userId');*/
      if (licenseCode == '123') {
        switchScreen('SignUpSuccess');
      } else {
        switchScreen('SignUpUnSuccess');
      }
    } catch (error) {
      console.error('Error checking license code:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <Heading2 style={styles.h2}>Get Started with</Heading2>
      <Heading1 style={styles.h1}>HRPRO2e</Heading1>
      <Input
        inputText="Enter your License Code"
        value={licenseCode}
        onChangeText={setLicenseCode}
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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: screenWidth * 0.05, // Responsive padding
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.1, // Responsive margin
  },
  logo: {
    width: screenWidth * 0.2, // Responsive width
    height: screenWidth * 0.2, // Responsive height (maintaining aspect ratio)
    resizeMode: 'contain',
  },
  h2: {
    marginBottom: screenHeight * 0.02, // Responsive margin
    textAlign: 'center',
  },
  h1: {
    marginBottom: screenHeight * 0.1, // Responsive margin
    textAlign: 'center',
  },
  input: {
    marginBottom: screenHeight * 0.02, // Responsive margin
    width: '100%', // Ensure input takes full width of the container
  },
  button: {
    alignSelf: 'center',
    marginTop: screenHeight * 0.1, // Responsive margin
  },
});

export default SignUpPage;
