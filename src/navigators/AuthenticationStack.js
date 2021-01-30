import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';


const Stack = createStackNavigator();

const AuthenticationStack=({})=>{ 
   
  return (  
          
          <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false,animationEnabled:false }}>       
           
            <Stack.Screen name="Signin" component={SignInScreen} />      
            
    
          </Stack.Navigator>

    );
}

export default AuthenticationStack;