import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text>ScreenOne</Text>
    </View>
  )
}

export default ScreenOne

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})