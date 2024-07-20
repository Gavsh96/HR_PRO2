import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Button from '../components/Button';
import Heading1 from '../components/Heading1';
import Heading3 from '../components/Heading3';

const SucessfulSignUpPage = ({switchScreen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}></View>
      <Heading1 style={styles.h2}>Congratulations!</Heading1>
      <Heading3 style={styles.h3}>
        You have signed up to the account successfully.
      </Heading3>
      <Heading3 style={styles.h3}>
        Now you can continue with the log in.
      </Heading3>
      <Image
        source={require('../assets/SuccessfulSignUp.png')}
        style={styles.image}
      />
      <Button title="Continue to Log In" style={styles.button} />
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    width: screenWidth,
    height: screenHeight,
    padding: 20,
  },
  h2: {
    marginTop: 100,
    marginBottom: 10,
    textAlign: 'center',
  },
  h3: {
    textAlign: 'center',
  },
  image: {
    width: 275,
    height: 275,
    resizeMode: 'contain',
    marginVertical: 80,
  },
  button: {
    alignSelf: 'center',
  },
});

export default SucessfulSignUpPage;
