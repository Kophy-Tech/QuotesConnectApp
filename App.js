

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




const App= () => {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content' } />
   <Text> Welcome To QuotesConnect</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
