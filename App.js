

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



const App= () => {
 
  return (
  <>
   <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />
     <NavigationContainer>
        <MainStack/>
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
