import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button1 from '../../components/Button1';
import Button2 from '../../components/Button2';
import Heading1 from '../../components/Heading1';
import Heading3 from '../../components/Heading3';

const LoginUnsuccessfulPage = ({switchScreen}) => {
  const navigateToLogin = () => {
    switchScreen('Login');
  };

  return (
    <View style={styles.container}>
      <Heading1 style={styles.h1}>Oops!</Heading1>
      <Heading3 style={styles.h3}>Your logging attempt</Heading3>
      <Heading3 style={styles.h3bottom}>was unsuccessful</Heading3>
      <Image
        source={require('../../assets/UnsuccessfulLogin.png')}
        style={styles.img}
      />

      <Button1
        title="Try Again"
        onPress={navigateToLogin}
        style={styles.button1}
      />

      <Button2
        title="Cancel"
        onPress={navigateToLogin}
        style={styles.button2}
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
    padding: screenWidth * 0.05,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.08,
  },
  logo: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    resizeMode: 'contain',
  },
  h3: {
    marginTop: screenHeight * 0.02,
    textAlign: 'center',
  },
  h3bottom: {
    marginBottom: screenHeight * 0.02,
    textAlign: 'center',
  },
  h1: {
    textAlign: 'center',
  },
  input: {
    marginBottom: screenHeight * 0.02,
    width: '100%',
  },
  button1: {
    alignSelf: 'center',
    marginTop: screenHeight * 0.1,
  },
  button2: {
    alignSelf: 'center',
  },
});

export default LoginUnsuccessfulPage;
