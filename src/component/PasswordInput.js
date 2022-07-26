import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLOR, WP} from '../Utils/theme';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PasswordInput = ({
  lablelText,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = React.useState(true);
  const _toggleIcon = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <View style={styles._mainContainer}>
      <Text style={styles._labelText}>{lablelText}</Text>
      <View>
        <TextInput
          style={styles._textInputStyle}
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
        />
        {/* _toggleIcon */}
        <TouchableOpacity style={styles._icon} onPress={() => _toggleIcon()}>
          <FontAwesome5
            name={showPassword ? 'eye' : 'eye-slash'}
            size={WP(3.5)}
            color={COLOR.BgColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  _mainContainer: {
    marginVertical: WP(3),
    bottom: WP(2),
  },
  _labelText: {
    paddingBottom: WP(4),
    fontWeight: '600',
    color: COLOR.blackColor,
    left: WP(1),
  },
  _textInputStyle: {
    borderWidth: 0.7,
    padding: WP(3),
    borderColor: COLOR.BgColor,
    borderRadius: WP(1),
    color: 'black',
  },
  _icon: {
    position: 'absolute',
    left: WP(82),
    top: WP(5),
    backgroundColor: COLOR.iconBlue,
    borderRadius: WP(5),
    padding: WP(-3),
  },
});
