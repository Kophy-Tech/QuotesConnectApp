import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton , Box} from "native-base";
const Loading = () => {
  return (
      <Box pt="3" px='6'>
      <Skeleton h="70" w="100%" borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec" />
      <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />
                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />

                <Skeleton.Text borderWidth={1} borderColor="#ececec" endColor="#ececec" startColor="#ececec"  />


         
        
      </Box>
          
    
  )
}

export default Loading

const styles = StyleSheet.create({})