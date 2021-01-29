import React,{useEffect,useState} from 'react'
import {Alert,StyleSheet,View,TextInput,TouchableOpacity,Text,ActivityIndicator,Image} from 'react-native'


import { useNavigation,useRoute } from '@react-navigation/native';
import {widthRate,heightRate} from '../components/screenSizes';
import {useDispatch} from 'react-redux'

import fakeapi from '../apis/fakeapi'


const TestScreen=()=>{

  
 
    return(
    <View style={styles.mainContainer}>

        <Image source={require('../assets/logo.png')}  style={styles.logo}/>

        <Text>Test</Text>

    </View>
    )
}

const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'#9ed8db',
    alignItems:'center'
    
},

logo:{
    height:heightRate(40),
    width:widthRate(50),
    resizeMode:'cover'
    
}


});

export default TestScreen;