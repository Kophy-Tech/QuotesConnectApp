import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton , Box} from "native-base";
const Loading = () => {
  return (
      <Box pt="3" px='6'>
          <Skeleton h="70" w="100%" borderWidth={1} borderColor="#d7e4fa" endColor="#deeafc" startColor="#deeafc" />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />
          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"  />

          <Skeleton borderWidth={1}  borderColor="#d7e4fa" endColor="#d7e4fa" startColor="#b0cbf5"     />
        
      </Box>
          
    
  )
}

export default Loading

const styles = StyleSheet.create({})