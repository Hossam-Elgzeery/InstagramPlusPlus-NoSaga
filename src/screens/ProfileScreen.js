import React,{useEffect,useState} from 'react';
import {StyleSheet,View,Text,ActivityIndicator,Alert,TouchableOpacity} from 'react-native';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import HeadBar from '../components/HeadBar';
import {useSelector} from 'react-redux';
import fakeapi from '../apis/fakeapi';
import UserCard from '../components/UserCard';


const ProfileScreen=()=>{

    const userid=useSelector(state=>state.userid);
    const [userST,setUser]=useState(null);
    const [loadingST,setLoading]=useState(true);

    const[reloadST,setReload]=useState(false);

    const getUser=async(id)=>{

           setLoading(true);
            try{
                const response=await fakeapi.get(`/users?id=${id}`);
    
               if (response.data.length>0)
               {
               
                setReload(false);
                setUser(response.data[0]);
                
               
               }
               else 
               {
                setReload(true);
                Alert.alert('No Data','No Data Found');
               }
            }
            catch(e)
            {
               
                Alert.alert('Error',e);
                console.log(e);
                setReload(true);
            }

            finally
            {
                setLoading(false);
            }
        
        }
  

    useEffect(()=>{

        getUser(userid);

    },[]);
  
 
    return(
    <View style={styles.mainContainer}>
        <HeadBar title='Profile' />
        {
            (loadingST)?

                <ActivityIndicator style={styles.loadingStyle} size="large" color="#3b5998" />
                :
                (reloadST)?
                    <TouchableOpacity style={styles.refreshbtn} onPress={()=>{
                
                        getUser(userid);
                    }} >
                        
                            <Text style={styles.btnText}>Retry</Text>
                        
                    </TouchableOpacity>
                :
                    <UserCard user={userST} />
        
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


});

export default ProfileScreen;