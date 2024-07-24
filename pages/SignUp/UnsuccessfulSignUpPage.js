import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Button from '../../components/Button1';
import Heading1 from '../../components/Heading1';
import Heading3 from '../../components/Heading3';

const UnsuccessfulSignUpPage = ({switchScreen}) => {
  const navigateToSignUp = () => {
    switchScreen('SignUp');
  };
  return (
    <View style={styles.container}>
      <Heading1 style={styles.h1}>Oops!</Heading1>
      <Heading3 style={styles.h3}>Check whether your</Heading3>
      <Heading3 style={styles.h3}>Customer ID is correct.</Heading3>
      <Image
        source={require('../../assets/UnsuccessfulSignUp.png')}
        style={styles.image}
      />
      <Button
        title="Try Again"
        onPress={navigateToSignUp}
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

export default UnsuccessfulSignUpPage;
