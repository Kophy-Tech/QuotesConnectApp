import { StyleSheet } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons';

import { VStack, HStack, Button, IconButton, Icon, Text,Box,  } from "native-base";
const Header = () => {
  return (
    <>
          <Box safeAreaTop bg="#6200ee" />
          <HStack bg="#6200ee"  py="3" justifyContent="space-between" alignItems="center" w="100%" >
              <HStack alignItems="center">
                  {/* <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} /> */}
                  <Text color="black" fontSize="20" fontWeight="bold">
                      Home
                  </Text>
              </HStack>
              <HStack>
                  <IconButton icon={<Icon as={MaterialCommunityIcons} name="favorite" size="sm" color="white" />} />
                  <IconButton icon={<Icon as={MaterialCommunityIcons} name="search" size="sm" color="white" />} />
                  <IconButton icon={<Icon as={MaterialCommunityIcons
                } name="more-vert" size="sm" color="white" />} />
              </HStack>
          </HStack>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})