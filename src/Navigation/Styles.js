import { StyleSheet, Platform } from 'react-native';



export const commonStyles = StyleSheet.create({
    screenHeader: {
        backgroundColor: "rgba(255,255,255,0)",
        height: Platform.OS == "ios" ? 95 : 100,
      
    },
    // headerTitleStyle: {
    //     color: '#fff',
    //     fontWeight: 'bold'
    // },
    // headerImageStyle: {
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     width: 150,
    //     resizeMode: 'contain'
    // }
});