import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import MainStore from '../stores/MainStore'

import SignInScreen from '../screens/SignInScreen'
import TestScreen from '../screens/TestScreen';


const Stack = createStackNavigator();



const AuthenticationStack=({})=>{

  
   


 
    return (
        <Provider store={MainStore}>
        <NavigationContainer>
          <StatusBar hidden/>
          <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false,animationEnabled:false }}>
          
           
            <Stack.Screen name="Signin" component={SignInScreen} />
          
            <Stack.Screen name="Test" component={TestScreen} />
            
             
                   
            
            
    
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

export default AuthenticationStack;