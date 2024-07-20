import React, {useState} from 'react';
import SignUpPage from './pages/SignUpPage';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import SucessfulSignUpPage from './pages/SuccessfulSignUpPage';
import UnsucessfulSignUpPage from './pages/UnsuccessfulSignUpPage';

// Import other screens if you have

function App() {
  const [currentScreen, setCurrentScreen] = useState('SignUp');

  const switchScreen = screenName => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {currentScreen === 'SignUp' && <SignUpPage switchScreen={switchScreen} />}
      {currentScreen === 'SignUpSuccess' && (
        <SucessfulSignUpPage switchScreen={switchScreen} />
      )}
      {currentScreen === 'SignUpUnSuccess' && (
        <UnsucessfulSignUpPage switchScreen={switchScreen} />
      )}
    </View>
  );
}

export default App;
