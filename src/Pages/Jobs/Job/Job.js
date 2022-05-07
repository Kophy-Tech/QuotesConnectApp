import {
    StyleSheet, View, TouchableWithoutFeedback, Keyboard,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native'
import React from 'react'
import Header from '../../../component/Header'
import { HStack, Text, Box,Flex, Input } from "native-base";
import Icon from 'react-native-vector-icons/EvilIcons';
import ButtonH from '../../../component/ButtonH';
import { BgColor } from '../../../Utils/Colors';
import JobHistory from '../../../component/JobHistory';
import JobCreate from '../../../component/JobCreate';
import AppBar from '../../../component/AppBar';
import { COLOR } from '../../../Utils/theme';

const Job = () => {
   const [index, setIdex] = React.useState(true)
    return (
        < SafeAreaView style={{ flex: 1, marginBottom:80 }}>
            <AppBar type="black" backgroundColor={COLOR.whiteColor} />


            <Header />
            <Box px="6">
                <Box>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <Input w="100%" InputLeftElement={
                            <Icon
                                name="search"
                                size={25}
                                color="black"


                            />
                        } placeholder="Search"
                            _focus={{ borderColor: 'black', backgroundColor: 'transparent' }} //? focus here left to implement.
                        />
                    </TouchableWithoutFeedback>

                </Box>

                <Flex direction="row" mt="4" justifyContent="space-between">
                    <ButtonH style={{

                        borderColor: BgColor,
                        width: '48%',
                        backgroundColor: index ? BgColor : 'transparent',
                        borderRadius: 5


                    }}
                        onPress={() => setIdex(!index)}
                    >
                        <Text style={[styles.butttonText,
                        { color: index ? "#fff" : BgColor }
                        ]}>View History</Text>
                    </ButtonH>
                    <ButtonH style={{

                        borderColor: BgColor,
                        width: '48%',
                        backgroundColor: !index ? BgColor : 'transparent',
                        borderRadius: 5

                    }}
                        onPress={() => setIdex(!index)}
                    >
                        <Text style={[styles.butttonText,
                        { color: !index ? "#fff" : BgColor }

                        ]}>Create New</Text>
                    </ButtonH>
                </Flex>

            </Box>

            {
                index &&<ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Box px="6" pt="5">

                        <JobHistory />
                    </Box>

                </ScrollView>
            }
  {
                !index && <Box px="6" pt="5">
                    <JobCreate/>
                </Box>
  }
        </ SafeAreaView>
       
    )
}

export default Job

const styles = StyleSheet.create({
    butttonText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'normal',
        fontFamily: 'General Sans'
    },
    JobContainer:{
        paddingTop:40
    }

})