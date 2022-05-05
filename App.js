

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


const App= () => {
 
  return (
  <>
     <NavigationContainer>
        <NativeBaseProvider>
          <MainStack />
        </NativeBaseProvider>
    </NavigationContainer> 
  </>
    
 
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  }
});

export default App;
