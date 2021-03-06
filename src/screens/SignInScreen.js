import React,{useState} from 'react';
import {Alert,StyleSheet,View,TextInput,TouchableOpacity,Text,ActivityIndicator,Image} from 'react-native';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import {useDispatch} from 'react-redux';
import fakeapi from '../apis/fakeapi';


const SignInScreen=()=>{

    

    const [loadingST,setLoading]=useState(false);
    const [usernameST,setUsername]=useState('');
    const [passwordST,setPassword]=useState('');
    const [wrongST,setWrong]=useState(false);

    const dispatchUserData=useDispatch();

    const loginFunc=async(name,password)=>{

        setLoading(true);
        try{
            const response=await fakeapi.get(`/users?name=${name}&password=${password}`);

           if (response.data.length>0)
           {
            setLoading(false);
            dispatchUserData({type:'login',payload:{userid:response.data[0].id,userdata:response.data[0]}})
           
           }
           else 
           {
            setWrong(true);
            setLoading(false);
           }
        }
        catch(e)
        {
            setLoading(false);
            Alert.alert('Error',e.message);
            
        }
    
    }
 
    return(
    <View style={styles.mainContainer}>

        <Image source={require('../assets/logo.png')}  style={styles.logo}/>

        <TextInput placeholder='Username' value={usernameST} onChangeText={(input)=>{
            setUsername(input);

            {(wrongST) && setWrong(false)}

            }} style={styles.inputBoxes} />

        <TextInput placeholder='Password' value={passwordST} onChangeText={(input)=>{
            setPassword(input);

            {(wrongST) && setWrong(false)}

            }} style={styles.inputBoxes} secureTextEntry />

            {(wrongST) && <Text style={styles.wrong}>Wrong user or password</Text>}
       
       {
       (loadingST)?
       
       <ActivityIndicator style={styles.loadingStyle} size="large" color="#dfe3ee" />
       
       :
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{
             
            loginFunc(usernameST,passwordST)
        }} >
            
                <Text style={styles.btnText}>Login</Text>
            
        </TouchableOpacity>
    }

    </View>
    )
}

const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'#3B5998',
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
marginVertical:heightRate(2),
backgroundColor:'#f7f7f7',
borderRadius:5

},
loginBtn:{
    backgroundColor:'#dfe3ee',
    height:heightRate(5),
    width:widthRate(30),
    alignContent:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:heightRate(5),
    
},
btnText:{
    color:'#000000',
    fontSize:20,   
    textAlign:'center',
   
    
},
loadingStyle:{
   
    
    
    marginTop:heightRate(5),
},
wrong:{
    color:'#ffffff'
}

});

export default SignInScreen;