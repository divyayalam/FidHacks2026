import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import IntroScreen from './src/screens/IntroScreen';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <>
        <IntroScreen onFinish={() => setShowIntro(false)} />
        <StatusBar style="dark" />
      </>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}