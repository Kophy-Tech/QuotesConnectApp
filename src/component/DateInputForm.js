import { Text, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import React from 'react'
import { Input } from "native-base";
import { WP, COLOR } from '../Utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import moment from 'moment';
const DateInputForm = ({
    title,
    value,
    borderColor,
    onPress,
    rest,
 
}) => {
    return (
        <>
            <Text style={{ fontSize: WP(4.5), paddingBottom: WP(1), color: COLOR.BgColor, fontWeight: '400', fontStyle: 'normal' }}> {title}</Text>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <TouchableOpacity onPress={onPress}

                    style={{
                        borderWidth: 1,
                        borderColor: borderColor,
                        width: '100%',
                        borderRadius: WP(2),

                    }}
                >
                    <Input
  
                        w="100%"
                        value={value}
                        editable={false}
                        {...rest}
                        InputLeftElement={
                            <Icon
                                name="date-range"
                                size={25}
                                color="black"

                            />
                        }
                        placeholder="DD.MM.YY"
                        placeholderTextColor={COLOR.blackColor}
                        _focus={{ borderColor: 'black', backgroundColor: 'transparent' }}  //? focus here left to implement.
                        {...rest}
                    />
                </TouchableOpacity>
            </TouchableWithoutFeedback>
         
          
        </>
    )
}

export default DateInputForm;

