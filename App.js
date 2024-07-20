import React, {useState} from 'react';
import SignUpPage from './pages/SignUpPage';
import 'react-native-gesture-handler';
import { View } from "react-native";

// Import other screens if you have


function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const switchScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {currentScreen === 'Login' && <SignUpPage switchScreen={switchScreen} />}
    </View>
  );
}

export default App;
