import { Text, TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React from 'react'
import { TextArea } from "native-base";
import { WP, COLOR } from '../Utils/theme';

const CustomTextArea = ({
    title,
    value,
    name,
    onChangeText,
    keyboardType,
    borderColor,
    onFocus,
    rest
}) => {
    return (
        <>
            <Text style={{ fontSize: WP(4.5), paddingBottom: WP(1), color: COLOR.BgColor, fontWeight: '400', fontStyle: 'normal' }}> {title}</Text>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                < TextArea w="100%"
                    h={40}
                    placeholder=""
                    style={{
                        borderWidth: WP(0.2),
                        padding: WP(3),
                        borderColor: borderColor,
                        borderRadius: WP(2),

                    }}
                    value={value}
                    onChangeText={onChangeText}
name={name}
                    onFocus={onFocus}
                    keyboardType={keyboardType}
                    placeholderTextColor={COLOR.blackColor}
                    placeholderStyle={{ fontSize: "bold" }}

                    _focus={{ backgroundColor: 'transparent' }} //? focus here left to implement.
                    {...rest}
                />
            </TouchableWithoutFeedback>

        </>
    )
}

export default CustomTextArea

