import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import FooterBranding from '../components/FooterBranding';

const SplashScreen = ({switchScreen}) => {
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      switchScreen('SignUp');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/hrprologo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.footerContainer}>
        <Image
          source={require('../assets/iomlogo.png')}
          style={styles.iomlogo}
        />
        <FooterBranding style={styles.footerbranding}>
          Powered by iOM Philippines Inc.
        </FooterBranding>
      </View>
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    width: screenWidth,
    height: screenHeight,
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 35,
  },
  logo: {
    width: screenWidth * 0.6, // Adjusted for screen width
    height: undefined,
    aspectRatio: 250 / 65, // Maintain aspect ratio
    resizeMode: 'contain',
  },
  iomlogo: {
    width: screenWidth * 0.2, // Adjusted for screen width
    height: undefined,
    aspectRatio: 80 / 50, // Maintain aspect ratio
    resizeMode: 'contain',
    marginBottom: 10, // Add some spacing between the logos and footer branding
  },
  footerbranding: {
    alignItems: 'center',
  },
});

export default SplashScreen;
