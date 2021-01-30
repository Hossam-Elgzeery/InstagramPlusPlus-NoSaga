import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import AddPostScreen from '../screens/AddPostScreen';



const Stack = createStackNavigator();
const NewsFeedStack=({})=>{

    return (   
          
          <Stack.Navigator initialRouteName="NewsFeed" screenOptions={{headerShown: false,animationEnabled:false }}>         
           
            <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
            <Stack.Screen name="Add" component={AddPostScreen} />            
    
          </Stack.Navigator>

    );
}

export default NewsFeedStack;