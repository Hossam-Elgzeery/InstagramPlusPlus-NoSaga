import React from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';

import {widthRate,heightRate} from '../helperfunc/screenSizes';
import {datediff} from '../helperfunc/date';

const PostCard=({data})=>{

    return (
        <View style={styles.postcard}>

            <View style={styles.userrow}>

                <Image source={{uri:data.userdata.img}} style={styles.userimg} />

                <Text style={styles.username}>{data.userdata.name}</Text>

                <Text style={styles.date}>{datediff(data.date)}</Text> 

            </View>

            <Image source={{uri:data.image}} style={styles.postimage} />

            <Text style={styles.likes}>{data.likes} Likes</Text>

    </View>);

}

const styles=StyleSheet.create({
    postcard:{
        paddingHorizontal:widthRate(2),
        paddingVertical:heightRate(1),
        borderBottomWidth:.5,
        width:widthRate(100),
        marginVertical:heightRate(1),
        height:heightRate(40)
    },
    userrow:{
        flexDirection:'row',
        height:heightRate(10),
        alignItems:'center'
    },
    userimg:{
        height:heightRate(7),
        width:widthRate(15),
        resizeMode:'stretch',
        borderRadius:300
    },
    username:{
        textAlignVertical:'center',
        marginHorizontal:widthRate(2)
    },
    date:{
        position:'absolute',
        right:0
    },
    postimage:{
        height:heightRate(25),
        width:widthRate(95),
        resizeMode:'stretch',
        borderRadius:10,
        alignSelf:'center'
    },
    likes:{
        color:'#5e6472',
        marginHorizontal:widthRate(1)
    }



    
});

export default PostCard;