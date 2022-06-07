import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import SearchInput, {createFilter} from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['user.name', 'subject'];

const InputSearch = ({value, onChange, data,searchTerm ,item=[], rest}) => {
  const filteredEmails = item.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Input
        w="100%"
        autoCorrect={false}
        value={value}
        onChange={onChange}
        style={{
          color: 'black',
        }}
        {...rest}
        InputLeftElement={<Icon name="search" size={25} color="black" />}
        placeholder="Search"
        _focus={{borderColor: 'black', backgroundColor: 'transparent'}} //? focus here left to implement.
      />
    </TouchableWithoutFeedback>
  );
};

export default InputSearch;
