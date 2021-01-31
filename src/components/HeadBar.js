import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

import {widthRate,heightRate} from '../helperfunc/screenSizes';



const HeadBar=({title})=>{

    return (
    <View style={styles.main}>

        <Text style={styles.title}>
            {title}
        </Text>

    </View>);

}

const styles=StyleSheet.create({
main:{
    width:widthRate(100),
    height:heightRate(6),    
    borderBottomWidth:1,
    backgroundColor:'#8b9dc3',
    paddingTop:heightRate(1)
    
    
    
},
title:{
    textAlign:'center',
    fontSize:25
}
});

export default HeadBar;