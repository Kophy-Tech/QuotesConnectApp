import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

const InputSearch = ({ value,  onChangeText, rest, placeholder, onClear}) => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Input w="100%" 
            //   autoCorrect={false}

 value={value}
 onChangeText={ onChangeText}
            //   onClear={onClear}
style={{
    color: 'black'

}}
      
          InputLeftElement={
              <Icon
                  name="search"
                  size={25}
                  color="black"

              />
          } placeholder={placeholder}
              _focus={{ borderColor: 'black', backgroundColor: 'transparent' }} //? focus here left to implement.
          />
      </TouchableWithoutFeedback>
  )
}


export default InputSearch;
