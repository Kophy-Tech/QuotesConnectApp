import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import MainStack from './src/Navigation/MainStack/Mainstack';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/Store';
import {Provider as PaperProvider} from 'react-native-paper';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

// LogBox.ignoreLogs([
//   'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ])

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <NativeBaseProvider>
              <MainStack />
            </NativeBaseProvider>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
