
import React from 'react'
import {
 TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import {   Input } from "native-base";
import Icon from 'react-native-vector-icons/EvilIcons';

const InputSearch = ({value, onChange, rest}) => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Input w="100%" 
              value={value}
onChange={onChange}
          {...rest}
          InputLeftElement={
              <Icon
                  name="search"
                  size={25}
                  color="black"

              />
          } placeholder="Search"
              _focus={{ borderColor: 'black', backgroundColor: 'transparent' }} //? focus here left to implement.
          />
      </TouchableWithoutFeedback>
  )
}

export default InputSearch

