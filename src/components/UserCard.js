import React from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';

import {widthRate,heightRate} from '../helperfunc/screenSizes';



const UserCard=({user})=>{

    return (
    <View style={styles.userCard}>

        <Image source={{uri:user.img}}  style={styles.userPic}/>

        <Text style={styles.userName}>{user.name}</Text>

        <Text style={styles.userData}>{user.email}</Text>

        <Text style={styles.userData}>{user.age} years old</Text>

    </View>);

}

const styles=StyleSheet.create({
    userCard:{   
        width:widthRate(100),
        alignSelf:'flex-start',
        paddingHorizontal:widthRate(5),
        paddingVertical:heightRate(3),
        borderBottomWidth:1
     },
     userPic:{
         height:heightRate(30),
         width:widthRate(50),
         resizeMode:'contain'
         
     },
     userName:{
         fontSize:20,
         fontWeight:'bold'
     },
     userData:{
         fontSize:15,
         color:'#333533'
     }
});

export default UserCard;