import React,{useState,useCallback} from 'react';
import {StyleSheet,View,Text,ActivityIndicator,Alert,TouchableOpacity} from 'react-native';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import HeadBar from '../components/HeadBar';
import {useFocusEffect,useNavigation} from '@react-navigation/native';
import fakeapi from '../apis/fakeapi';
import PostCard from '../components/PostCard';
import { FlatList } from 'react-native-gesture-handler';




const NewsFeedScreen=()=>{

    const navigation=useNavigation();    
    const [dataST,setData]=useState([]);
    const [loadingST,setLoading]=useState(true);    
    const[reloadST,setReload]=useState(false);
 

    const getData=async()=>{

           setLoading(true);
            try{
                const response=await fakeapi.get('/posts');
    
               if (response.data.length>0)
               {               
                setReload(false);
                setData(response.data.reverse());             
               
               }
               else 
               {
                setReload(true);
                Alert.alert('No Data','No Data Found');
               }
            }
            catch(e)
            {               
                Alert.alert('Error',e.message);
                setReload(true);
            }

            finally
            {
                setLoading(false);
            }
        
        }
  

        useFocusEffect(
            useCallback(
            ()=>{
    
            getData();
    
            return () => setLoading(true);
    
        },[]));

        
  
 
    return(
    <View style={styles.mainContainer}>
        <HeadBar title='News Feed' />
        {
            (loadingST)?

                <ActivityIndicator style={styles.loadingStyle} size="large" color="#3b5998" />
                :
                (reloadST)?
                    <TouchableOpacity style={styles.refreshbtn} onPress={()=>{
                
                        getData();
                    }} >
                        
                            <Text style={styles.btnText}>Retry</Text>
                        
                    </TouchableOpacity>
                :
                    <FlatList
                  
                    showsVerticalScrollIndicator={false}
                    style={{flex:1}}
                    data={dataST}
                    renderItem={({item})=>{
                     
                        return (
                        <PostCard data={item}/>
                        )
                    }}
                    keyExtractor={item => String(item.id)}
                />
        
        }

        <TouchableOpacity onPress={()=>{
            navigation.navigate('Add')
        }} style={styles.fbutton}>
            <Text style={styles.ftext}>+</Text>
        </TouchableOpacity>  

    </View>
    )
}

const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center'
    
},


loadingStyle:{
  
    marginTop:heightRate(5),
},

refreshbtn:{
    backgroundColor:'#3b5998',
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
   
    
},
fbutton:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:widthRate(5),    
    bottom:heightRate(2),
    width:widthRate(10),
    height:heightRate(5),
    borderRadius:10,
    backgroundColor:'#3b5998',


    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    
},
ftext:{
    color:'white',
    fontSize:30,
    
}


});

export default NewsFeedScreen;