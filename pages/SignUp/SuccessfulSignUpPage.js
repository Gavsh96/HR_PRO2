import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Button from '../../components/Button1';
import Heading1 from '../../components/Heading1';
import Heading3 from '../../components/Heading3';

const SucessfulSignUpPage = ({switchScreen}) => {
  const navigateToLogin = () => {
    switchScreen('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}></View>
      <Heading1 style={styles.h1}>Congratulations!</Heading1>
      <Heading3 style={styles.h3}>
        You have signed up to the account successfully.
      </Heading3>
      <Heading3 style={styles.h3}>
        Now you can continue with the log in.
      </Heading3>
      <Image
        source={require('../../assets/SuccessfulSignUp.png')}
        style={styles.image}
      />
      <Button
        title="Continue to Log In"
        onPress={navigateToLogin}
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
  h1: {
    marginTop: screenHeight * 0.1, // Responsive margin
    marginBottom: screenHeight * 0.02, // Responsive margin
    textAlign: 'center',
  },
  h3: {
    textAlign: 'center',
  },
  image: {
    width: screenWidth * 0.75, // Responsive width
    height: screenWidth * 0.75, // Responsive height (maintains aspect ratio)
    resizeMode: 'contain',
    marginVertical: screenHeight * 0.1, // Responsive margin
  },
  button: {
    marginTop: screenHeight * 0.05, // Responsive margin
  },
});

export default SucessfulSignUpPage;
