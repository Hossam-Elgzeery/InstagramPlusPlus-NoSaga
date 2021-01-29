import React,{useEffect,useState} from 'react'
import {StyleSheet,View,TextInput,TouchableOpacity,ImageBackground,Text, KeyboardAvoidingView,ActivityIndicator,Image,Pressable,ToastAndroid} from 'react-native'


import { useNavigation,useRoute } from '@react-navigation/native';
import {widthRate,heightRate} from '../components/screenSizes';


const SignInScreen=()=>{

    const [usernameST,setUsername]=useState('');
    const [passwordST,setPassword]=useState('');
 
    return(
    <View style={styles.mainContainer}>

        <Image source={require('../assets/logo.png')}  style={styles.logo}/>

        <TextInput placeholder='Username' value={usernameST} onChangeText={(input)=>{setUsername(input)}} style={styles.inputBoxes} />

        <TextInput placeholder='Password' value={passwordST} onChangeText={(input)=>{setPassword(input)}} style={styles.inputBoxes} secureTextEntry />
       
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{
             ToastAndroid.show("Login", ToastAndroid.SHORT);
        }} >
            
                <Text style={styles.btnText}>Login</Text>
            
        </TouchableOpacity>
       

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
    
},
inputBoxes:{
height:heightRate(5),
width:widthRate(80),
backgroundColor:'white',
marginVertical:heightRate(2),
backgroundColor:'#e9fff9',
borderRadius:5

},
loginBtn:{
    backgroundColor:'#d64045',
    height:heightRate(5),
    width:widthRate(30),
    alignContent:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:heightRate(5),
    
},
btnText:{
    color:'#F7F7FF',
    fontSize:20,   
    textAlign:'center',
   
    
}
});

export default SignInScreen;