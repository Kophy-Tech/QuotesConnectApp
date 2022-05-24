
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { getMaterial } from '../Redux/Slice/materialSlice';
import Loading from './Loading';
import RenderItem from './RenderItem';

const ViewMaterial = () => {

    const auth = useSelector((auth) => auth.auth.user?.token)
    const dispatch = useDispatch()
    const loading = useSelector((material) => material.material.isLoading)
    const material = useSelector((material) => material.material.material)
    const [materialPost, setMaterialPost] = useState([
     

      ]);

console.log(material);
    useEffect(() => {
    //  dispatch(getMaterial(auth)).unwrap().then(()=>{
    //     setMaterialPost(material)
    //  }).catch((err)=>{
    //      console.log(err)
    //  })
    }, [])
    console.log(materialPost, 'materialPost');

const HeaderComponent =()=>{
    return(
        <>
            <View style={styles.tableColumnHeader}>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Category Name</Text>
                </View>
                <View style={styles.tableColumnRegular2}>
                    <Text style={[styles.textLineItem, {
                        fontSize: 13
                    }]}>Sub Item Description</Text>
                </View>

            </View>
        </>
    )
}
const  EmptyContainer =()=>{
    return<View  style={{ width:'100%', justifyContent:'center', alignItems:'center', height:100,
    alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'#FFF'
    }}>

        <Text style={{fontSize:20,}}> No data</Text>
    </View>
}
    if(loading){
        return <>
            <Loading />
        </>
    }
  return (
      <>
      
            
              <FlatList
                  data={materialPost}
                  renderItem={({item})=> {
                return <RenderItem item={item}/>}
                }
                  showsHorizontalScrollIndicator={false}
ListHeaderComponent={HeaderComponent}
ListEmptyComponent={EmptyContainer}
                  keyExtractor={item => item._id}
                  contentContainerStyle={{ paddingHorizontal: 22, paddingVertical: 9 }}
              />
            
            
             
         
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