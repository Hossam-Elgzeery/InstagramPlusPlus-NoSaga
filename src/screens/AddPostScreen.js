import React,{useState,useCallback} from 'react';
import {StyleSheet,View,Text,ActivityIndicator,TouchableOpacity} from 'react-native';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import HeadBar from '../components/HeadBar';
import {getData,DeleteFromData} from '../helperfunc/handlingStorage';
import {useFocusEffect,useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';



const AddPostScreen=()=>{

    const navigation=useNavigation();

    const [imageST,setImage]=useState('');
    const [loading,setLoading]=useState(true);
    const [wishST,setWish]=useState(null)
    const [listST,setList]=useState([]);

   
    useFocusEffect(
        useCallback(
        ()=>{

            getData('@list',setList,setLoading);

    },[]));
  
 
  
 
    return(
    <View style={styles.mainContainer}>

        <HeadBar title='Add a Post' />
        {(loading)?

        <ActivityIndicator style={styles.loadingStyle} size="large" color="#d64045" />
        :
        <>
        <View style={styles.bucketInput}>
           

           

        </View>


       
            <View style={{backgroundColor:'white',width:widthRate(80),height:heightRate(5),marginVertical:heightRate(5)}}>
                <Picker
                        onValueChange={(value,position)=>{                           
                        setWish(value);
                        console.log(value);                   
                    
                }}

                selectedValue={wishST}   
                 
                    
                mode='dropdown'
                >            
                    <Picker.Item key='null' label='select place' value={null}/>              
        
                                {
                                    
                                    (listST)?
                                    
                                    listST.map((item)=>{
        
                                    
                                    return (<Picker.Item key={toString(item)} label={item} value={item} />)
        
                                    }):
                                    null
                            
                                }
                                
                            
                </Picker>
            </View>
       
       
            <TouchableOpacity onPress={async()=>{
                {(wishST) && await DeleteFromData('@list',setList,setLoading,wishST,listST)}
                navigation.navigate('NewsFeed');
               
            }} style={styles.addbtn}>
                <Text style={styles.addtxt}>
                    Add
                </Text>
            </TouchableOpacity>

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

addbtn:{

    height:heightRate(5),
    width:widthRate(30),
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

export default AddPostScreen;