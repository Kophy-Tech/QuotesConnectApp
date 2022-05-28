import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import {
  COLOR,
  WP,
  HP,
  RADIUS,
  SPACING_PERCENT,
  TEXT_SIZES,
  MOBILE_WIDTH,
  ONBOARD_DATA,
} from '../Utils/theme';
import AppBar from '../component/AppBar';
import preferences from '../preferences';

const Onboarding = ({navigation}) => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, MOBILE_WIDTH + SPACING_PERCENT * 2);
  const [scrolloffset, setscrolloffset] = useState(0);
  console.log(scrolloffset, 'scrool');

  //On Skip Clickj
  const _onNextClick = () => {
    if (scrolloffset !== 3) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: scrolloffset + 1,
      });
      setscrolloffset(scrolloffset + 1);
    } else {
      preferences._setItem('onboarding', '1').then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Auth'}],
        });
      });
    }
  };

  const _onSkipClick = () => {
    preferences._setItem('onboarding', '1').then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
    });
  };

  // React.useEffect(() => {
  //   if (scrolloffset !== 3) {
  //     flatListRef.current.scrollToIndex({
  //       animated: true,
  //       index: scrolloffset + 1,
  //     });
  //     setscrolloffset(scrolloffset + 1);
  //   } else {
  //     preferences._setItem("onboarding", "1").then(() => {
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: "authstack" }],
  //       });
  //     });
  //   }
  // }, [ ]);

  return (
    <View style={Styles._mainContainer}>
      <AppBar type="light" backgroundColor={COLOR.BgColor} />
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToInterval={WP('100%')}
        ref={flatListRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        style={{flexGrow: 0}}
        contentContainerStyle={Styles._scrollContainer}
        data={ONBOARD_DATA}
        keyExtractor={(item, index) => 'Onboarding-item' + index.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * WP('100%'),
            index * WP('100%'),
            (index + 1) * WP('100%'),
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [WP('100%'), 0, -WP('100%')],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <View style={Styles._itemContainer}>
              <Image source={item.intro_image} style={Styles.inner_image} />
              <View style={Styles.TitleContainer}>
                <Animated.Text
                  style={[Styles._title, {transform: [{translateX}]}]}>
                  {item.title}
                </Animated.Text>

                <Animated.Text
                  style={[Styles._subTitle, {transform: [{translateX}]}]}>
                  {item.subTitle}
                </Animated.Text>
              </View>
              <TouchableOpacity
                onPress={() => _onNextClick()}
                style={Styles._nextBtn}>
                <Text style={Styles._nextText}>{item.nextBtn}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => _onSkipClick()}
                style={Styles._skipBtn}>
                <Text style={Styles._skipText}>{item.skipbtn}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: COLOR.BgColor,
  },
  _skipBtn: {
    position: 'absolute',
    top: HP(SPACING_PERCENT * 14 + 8),
    alignSelf: 'center',
    zIndex: 1,
  },
  _skipText: {
    // fontFamily: FONT,
    fontSize: WP(TEXT_SIZES.info_2),
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    color: COLOR.whiteColor,
    fontSize: WP(5),
  },
  _nextBtn: {
    position: 'absolute',
    top: HP(SPACING_PERCENT * 12 + 6),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: COLOR.whiteColor,
    padding: WP('3%'),
    paddingHorizontal: WP('30.5%'),
    borderRadius: WP('2'),
    alignSelf: 'center',
  },
  _nextText: {
    fontSize: WP(5),
    color: COLOR.BgColor,
    fontWeight: 'bold',
  },
  _scrollContainer: {},
  _itemContainer: {
    width: WP('100%'),
    height: HP('100%'),
    // padding: WP(SPACING_PERCENT),
    // justifyContent: 'center',
  },
  _image: {
    width: WP('100%'),
    height: HP('100%'),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  TitleContainer: {
    position: 'absolute',
    padding: WP(SPACING_PERCENT),
    marginTop: HP(SPACING_PERCENT),
    width: WP('100%'),
    alignItems: 'center',
  },
  _title: {
    // fontFamily: FONT,
    fontSize: WP(5.3),
    fontWeight: '900',
    textAlign: 'center',
    color: COLOR.whiteColor,
    top: HP(37.5),
    fontWeight: 'bold',
    position: 'relative',
  },
  _subTitle: {
    // fontFamily: FONT,
    fontSize: WP(3.7),
    fontWeight: '300',
    textAlign: 'center',
    color: COLOR.whiteColor,
    top: HP(37.5),
    position: 'relative',
  },
  inner_image: {
    position: 'absolute',
    bottom: WP('45%'),
    resizeMode: 'contain',
    padding: WP(SPACING_PERCENT),
    alignSelf: 'center',
    height: HP('95%'),
  },
  _bullet: {
    // fontFamily: FONT,
    fontSize: WP(TEXT_SIZES.info_1),
    // color: COLORS.lightGrey,
    marginTop: HP(SPACING_PERCENT / 5),
  },
  _dotsView: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: HP(SPACING_PERCENT),
  },
});

export default Onboarding;
