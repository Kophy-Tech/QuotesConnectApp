import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const ButtonH = ({ style,children , onPress, rest}) => {
  return (
      <TouchableOpacity style={[styles.button, style]} {...rest} onPress={onPress}>
          {children}
      </TouchableOpacity>
  )
}

export default ButtonH

const styles = StyleSheet.create({

    button: {
        height: 47,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   

})