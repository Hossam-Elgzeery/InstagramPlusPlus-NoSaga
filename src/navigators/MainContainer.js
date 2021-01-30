import React,{useEffect} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import TabsNavigator from './TabsNavigator';
import {useSelector} from 'react-redux';


const MainContainer=()=>{
    
     const userid=useSelector(state=>state.userid);
     useEffect(()=>{

     },[]);

    return (
        <NavigationContainer>
            <StatusBar hidden/>
            {(userid==null)?
            <AuthenticationStack/>            
            :<TabsNavigator />}
            
        </NavigationContainer>
    );
}

export default MainContainer;