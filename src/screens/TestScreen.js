import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'



import {widthRate,heightRate} from '../components/screenSizes';



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