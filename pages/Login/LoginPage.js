import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button1';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Heading1 from '../../components/Heading1';
import Heading3 from '../../components/Heading3';

const LoginPage = ({switchScreen}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const loginFunc = () => {
    try {
      /*const userId = await AsyncStorage.getItem('userId');*/
      if (userId == '123' && password == '123') {
        switchScreen('SignUpSuccess');
      } else {
        switchScreen('LoginUnSuccess');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <Heading1 style={styles.h1}>Welcome Back!</Heading1>
      <Heading3 style={styles.h3}>Log in to your account with</Heading3>
      <Heading3 style={styles.h3bottom}>User ID and Password</Heading3>

      <Input
        inputText="User ID"
        value={userId}
        onChangeText={setUserId}
        textColor="#000"
        keyboardType="default"
        style={styles.input}
      />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
        textColor="#000"
        style={styles.input}
      />
      <Button title="Login" onPress={loginFunc} style={styles.button} />
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
  button: {
    alignSelf: 'center',
    marginTop: screenHeight * 0.1,
  },
});

export default LoginPage;
