import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Button from '../components/Button';
import Heading1 from '../components/Heading1';
import Heading3 from '../components/Heading3';

const UnsuccessfulSignUpPage = ({switchScreen}) => {
  return (
    <View style={styles.container}>
      <Heading1 style={styles.h2}>Oops!</Heading1>
      <Heading3 style={styles.h3}>Check whether your</Heading3>
      <Heading3 style={styles.h3}>Customer ID is correct.</Heading3>
      <Image
        source={require('../assets/UnsuccessfulSignUp.png')}
        style={styles.image}
      />
      <Button title="Try Again" style={styles.button} />
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
    marginTop: 20,
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
    marginTop: 20,
  },
});

export default UnsuccessfulSignUpPage;
