
import React, { useState, useLayoutEffect } from 'react'
import { Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getRfqJob } from '../Redux/Slice/RfqSlice';
import Loading from './Loading';
import CustomRfqflatlist from './CustomRfqflatlist';
import { Stack, Alert, IconButton, HStack, VStack, CloseIcon, Center } from "native-base";


const ViewRfq = ({ navigation }) => {

    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
    const { isLoading, message, refresh } = useSelector((rfq) => rfq.rfq)
    const allRfq = useSelector((rfq) => rfq.rfq.allrfq)

    const [error, setError] = useState(false);
    const token = auth?.token
    // console.log(token, 'ttttttt');
    useLayoutEffect(() => {
        dispatch(getRfqJob(token))
            .unwrap().then((res) => {
                //  console.log(res, 'res');

            }).catch((err) => {

                if (err) {
                    setError(true)
                }



            })
    }, [dispatch, refresh])
    // console.log(materialPost, 'materialPost');
    // console.log(material, 'material');


    if (isLoading === true && error === false) {
        return <>
            <Loading />
        </>
    }
    else if (isLoading === false && error === true) {
        return <Center style={{ flex: 1, position: 'relative' }}>
            <Stack space={3} w="85%" maxW="400" style={{ position: 'absolute', bottom: 0 }}>
                <Alert w="100%" status='error'>
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" />
                                <Text fontSize="md" color="coolGray.800">
                                    {message}
                                </Text>
                            </HStack>
                            <IconButton
                                onPress={() => setError(false)}
                                variant="unstyled" _focus={{
                                    borderWidth: 0
                                }} icon={<CloseIcon size="3" />} _icon={{
                                    color: "coolGray.600"
                                }} />
                        </HStack>
                    </VStack>
                </Alert>

            </Stack>
        </Center>

    }
    return (
        <>
            <CustomRfqflatlist itemData={allRfq} navigation={navigation} />

        </>
    )
}

export default ViewRfq