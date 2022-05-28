import { Text} from 'react-native'
import React, { useState, useLayoutEffect } from 'react'


import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getJob } from '../Redux/Slice/JobSlice';
import { Stack, Alert, IconButton, HStack, VStack, CloseIcon, Center } from "native-base";
import CustomJobFlatList from './CustomJobFlat';

const JobHistory = ({ navigation}) => {

    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
  
    const { isLoading, message, refresh } = useSelector((job) => job.job)
    const job = useSelector((job) => job.job.job)

    const [error, setError] = useState(false);
    const token = auth?.token

    useLayoutEffect(() => {
        dispatch(getJob(token))
            .unwrap().then((res) => {
                //  console.log(res, 'res');

            }).catch((err) => {

                if (err) {
                    setError(true)
                }



            })
    }, [dispatch, refresh])
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
          <CustomJobFlatList itemData={job} navigation={navigation}/>
  </>
  )
}

export default JobHistory
