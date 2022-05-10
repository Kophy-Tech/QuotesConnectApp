import {  TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { HStack, Text, Box, Avatar, Flex, } from "native-base";
const Header = () => {
    return (
        <>
            {/* <Box safeAreaTop bg="#6200ee" /> */}
            <HStack px="6" py="5" justifyContent="space-between" alignItems="center" w="100%" style={{ backgroundColor: 'transparent' }}>
                <Flex direction="row" alignItems="center" >
                    <Box>
                        <Avatar bg="black" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} />
                    </Box>
                    <Box pl="2">
                        <Text style={{ fontSize: 18 }} bold> Hi Bedlam,</Text>
                        <Text style={{ fontSize: 12 }}> Good day.</Text>
                    </Box>
                </Flex>
                <HStack>
                  <TouchableOpacity>
                        <Icon
                            name="bell-badge"
                            size={35}
                            color="#5080FA"


                        />
                  </TouchableOpacity>
                </HStack>
            </HStack>
        </>
    )
}

export default Header

