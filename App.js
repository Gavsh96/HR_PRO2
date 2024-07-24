import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import SplashScreen from './pages/SplashScreen';
import SignUpPage from './pages/SignUp/SignUpPage';
import SucessfulSignUpPage from './pages/SignUp/SuccessfulSignUpPage';
import UnsucessfulSignUpPage from './pages/SignUp/UnsuccessfulSignUpPage';
import LoginPage from './pages/Login/LoginPage';
import LoginUnsuccessfulPage from './pages/Login/LoginUnsuccessfulPage';

function App() {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');

  const switchScreen = screenName => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={{flex: 1}}>
      {currentScreen === 'SplashScreen' && (
        <SplashScreen switchScreen={switchScreen} />
      )}
      {currentScreen === 'SignUp' && <SignUpPage switchScreen={switchScreen} />}
      {currentScreen === 'SignUpSuccess' && (
        <SucessfulSignUpPage switchScreen={switchScreen} />
      )}
      {currentScreen === 'SignUpUnSuccess' && (
        <UnsucessfulSignUpPage switchScreen={switchScreen} />
      )}
      {currentScreen === 'Login' && <LoginPage switchScreen={switchScreen} />}
      {currentScreen === 'LoginUnSuccess' && (
        <LoginUnsuccessfulPage switchScreen={switchScreen} />
      )}
    </View>
  );
}

export default App;
