//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import AppBar from '../component/AppBar';
import {COLOR, WP, HP, IMAGE, FONT, TEXT_SIZES, APP_NAME} from '../Utils/theme';
import {useDispatch, useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import preferences from '../preferences';
const Splash = ({navigation}) => {
  useEffect(() => {
    preferences
      ._getItem('onboarding')
      .then(value => {
        if (value == '1') {
          preferences
            .getAuthSession()
            .then(async session => {
              console.log({session});
              if (session) {
                navigation.dispatch({
                  ...CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Auth',
                        state: {
                          routes: [
                            {
                              name: 'Welcome',
                            },
                          ],
                        },
                      },
                    ],
                  }),
                });
              } else {
                navigation.dispatch({
                  ...CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Auth',
                        state: {
                          routes: [
                            {
                              name: 'Welcome',
                            },
                          ],
                        },
                      },
                    ],
                  }),
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          navigation.navigate('Onboarding');
        }
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <AppBar backgroundColor={COLOR.whiteColor} type={'dark-content'} />
      <Image
        source={IMAGE.splash_icon}
        style={{width: WP('70%'), height: HP('12')}}
        resizeMode="cover"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.whiteColor,
    width: WP('100%'),
  },
});

//make this component available to the app
export default Splash;
