import React,{useState,useCallback} from 'react';
import {StyleSheet,View,Text,ActivityIndicator,TouchableOpacity,Alert,Image,FlatList} from 'react-native';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import HeadBar from '../components/HeadBar';
import {getData,DeleteFromData} from '../helperfunc/handlingStorage';
import {useFocusEffect,useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {useSelector} from 'react-redux';
import {dateFormat} from '../helperfunc/date';
import {generateRand} from '../helperfunc/others'
import fakeapi from '../apis/fakeapi';

const AddPostScreen=()=>{

    const navigation=useNavigation();

    const userData=useSelector(state=>state.userdata);

    
    const [loading,setLoading]=useState(true);
    const [wishST,setWish]=useState(null)
    const [listST,setList]=useState([]);
    const images=[
                  'https://www.hochtief.com/fileadmin/user_upload/berlin-trailer-screen.jpg',
                  'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
                  'https://cdn-image.departures.com/sites/default/files/1584458652/header-empty-clean-grand-canal-venice-CLEANVENICE0320.jpg'
                ];

   
    useFocusEffect(
        useCallback(
        ()=>{

            getData('@list',setList,setLoading);

    },[]));

    const addPostFunc=async(userData,imageurl)=>{

        setLoading(true);
        try{
            const response=await fakeapi.post(`/posts`,{
                image:imageurl,
                date:dateFormat(),
                likes:generateRand(),
                userdata:{
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            img: userData.img,
                            age: userData.age
                        }
            });

         
           console.log(response.data);
           setLoading(false);
        }
        catch(e)
        {
            setLoading(false);
            Alert.alert('Error',e.message);
            
        }
    
    }
  
 
  
 
    return(
    <View style={styles.mainContainer}>

      
            

        <HeadBar title='Add a Post' />

        
        {(loading)?

        <ActivityIndicator style={styles.loadingStyle} size="large" color="#3b5998" />
        :
        <>
        <View  style={styles.imagesContainer}>
        <FlatList                  
                  horizontal
                  showsHorizontalScrollIndicator={false}
                 
                  data={images}
                  renderItem={({item})=>{
                   
                      return (
                      <Image source={{uri:item}} style={styles.imageStyle} />
                      )
                  }}
                  keyExtractor={item => item}
              />

                  </View>
       
            <View style={styles.pickerStyle}>
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
                await addPostFunc(userData,images[Math.floor(Math.random() * 3)]);
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
    backgroundColor:'#ffffff',
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
    backgroundColor:'#3b5998',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
   

},
addtxt:{
    color:'#ffffff',
    fontWeight:'bold'
},
loadingStyle:{
  
    marginTop:heightRate(5),
},

imageStyle:{
width:widthRate(40),
height:heightRate(20),
marginHorizontal:widthRate(2),

borderRadius:5
},
imagesContainer:{
    height:heightRate(30),
    paddingVertical:heightRate(5),
    width:widthRate(100),
},
pickerStyle:{
    backgroundColor:'#8b9dc3',
    width:widthRate(80),
    height:heightRate(5),
    marginVertical:heightRate(5)
}

});

export default AddPostScreen;