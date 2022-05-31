import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { HP, WP, COLOR } from '../Utils/theme'
import Autocomplete from 'react-native-autocomplete-input';

import React from 'react'

const AutoCompeletCreate = ({ valueJob, onChangeJobText, allJob}) => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Autocomplete
              value={valueJob}
              onChangeText={(text) => onChangeJobText(text)}
              style={{ backgroundColor: 'transparent' }}
              inputContainerStyle={{
                  borderRadius: 5,
                  borderColor: COLOR.BgColor,
              }}

              data={allJob}
              flatListProps={{
                  keyboardShouldPersistTaps: 'always',
                  keyExtractor: (job) => job._id,
                  renderItem: (({ item }) => {
                      if (valueJob === '') {
                          return <Text>aaa</Text>
                      }
                  })
              }}
          />
      </TouchableWithoutFeedback>
  )
}

export default AutoCompeletCreate

const styles = StyleSheet.create({})