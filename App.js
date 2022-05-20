

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,

  StatusBar,
  StyleSheet,
  Text,
  View

 
} from 'react-native';
import MainStack from './src/Navigation/MainStack/Mainstack';
import { NativeBaseProvider} from 'native-base';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store/Store';

const App= () => {
 
  return (
  <>
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <MainStack />
          </NativeBaseProvider>
        </NavigationContainer> 
      </Provider>
    
  </>
    
 
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  }
});

export default App;
