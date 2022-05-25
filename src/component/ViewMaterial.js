
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { getMaterial } from '../Redux/Slice/materialSlice';
import Loading from './Loading';
import CustomFlatList from './CustomFlatList';
const ViewMaterial = () => {

    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
    const loading = useSelector((material) => material.material.isLoading)
    const material = useSelector((material) => material.material.material)
    // const [materialPost, setMaterialPost] = useState([
      
    //     ...material
    //   ]);
const token = auth?.token
console.log(token, 'ttttttt');
    useEffect(() => {
        dispatch(getMaterial(token))
     .unwrap().then((res)=>{
        //  console.log(res, 'res');
        // setMaterialPost(res)
     }).catch((err)=>{
         console.log(err)
     })
    }, [dispatch])
    // console.log(materialPost, 'materialPost');
// console.log(material, 'material');


    if(loading){
        return <>
            <Loading />
        </>
    }
  return (
      <>
          <CustomFlatList itemData={material}/>
          
      </>
  )
}

export default ViewMaterial

const styles = StyleSheet.create({
  
    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        // alignSelf: 'stretch',



    },
    tableColumnRegular2: {
        flex: 1.8,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
    tableColumnHeader: {

        flexDirection: "row",
        justifyContent: 'center',

        backgroundColor: BgColor,
        borderRadius: 10,
        height: 62,

    },
    textLineItem: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 18,
       
    },
    textLineItem1: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
        fontFamily: 'sans-serif',

    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'left',
        backgroundColor: bgColor1,
        height: 100,
        marginBottom: 2,
       



    },


})