import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackMain from './src/screens/Stack/StackMain';
import UserContextProvider from './src/Context/UserContext';

export default () => {
  return(

    <UserContextProvider>

      <NavigationContainer>

        <StackMain />
        
      </NavigationContainer>

    </UserContextProvider>

  );
}