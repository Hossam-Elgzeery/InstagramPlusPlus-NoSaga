import React,{useState,useCallback} from 'react'
import {StyleSheet,View,Text,FlatList,ActivityIndicator,TextInput,TouchableOpacity} from 'react-native'
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import HeadBar from '../components/HeadBar'
import {getData,storeData} from '../helperfunc/handlingStorage';
import {useFocusEffect} from '@react-navigation/native'



const BucketListScreen=()=>{

    const[placeST,setPlace]=useState('');
    const [loading,setLoading]=useState(true);
    const [listST,setList]=useState([]);

   
    useFocusEffect(
        useCallback(
        ()=>{

            getData('@list',setList,setLoading);

    },[]));
  
 
  
 
    return(
    <View style={styles.mainContainer}>

        <HeadBar title='Bucket List' />
        {(loading)?

        <ActivityIndicator style={styles.loadingStyle} size="large" color="#d64045" />
        :
        <>
        <View style={styles.bucketInput}>
            <TextInput placeholder='place' value={placeST} onChangeText={input=>setPlace(input)} style={styles.placeinput}  />

            <TouchableOpacity onPress={()=>{
                storeData('@list',setList,setLoading,placeST,listST);
               setPlace('');
            }} style={styles.addbtn}>
                <Text style={styles.addtxt}>
                    Add
                </Text>
            </TouchableOpacity>

        </View>


       

        <FlatList
            style={{flex:1}}
            data={listST}
            renderItem={({item})=>{
                        
            return (
            <View style={{width:widthRate(80),borderBottomWidth:.5,paddingVertical:heightRate(1)}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{item}</Text>
            </View>
           )
            }}

            keyExtractor={item => String(item)}
        />
       </>
        
    }   
    </View>
    )
}

const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'#9ed8db',
    alignItems:'center'
    
},

bucketInput:{
    flexDirection:'row',
   justifyContent:'space-between',
   width:widthRate(90)
},
placeinput:{
    height:heightRate(5),
    width:widthRate(70),
    marginVertical:heightRate(2),
    backgroundColor:'#e9fff9',
    borderRadius:5
},
addbtn:{

    height:heightRate(5),
    width:widthRate(15),
    marginVertical:heightRate(2),
    backgroundColor:'black',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
   

},
addtxt:{
    color:'white',
    fontWeight:'bold'
},
loadingStyle:{
  
    marginTop:heightRate(5),
},



});

export default BucketListScreen;