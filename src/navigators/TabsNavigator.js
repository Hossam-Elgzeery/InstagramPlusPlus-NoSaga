import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import BucketListScreen from '../screens/BucketListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {widthRate,heightRate} from '../helperfunc/screenSizes';
import NewsFeedStack from './NewsFeedStack';

const Tab = createBottomTabNavigator();

const TabsNavigator=()=> {
  return (
   
        <Tab.Navigator tabBarOptions={{tabStyle:{backgroundColor:'#dfe3ee'}}}>
            <Tab.Screen name="NewsFeed"  component={NewsFeedStack} options={{tabBarLabel:'News Feed',tabBarIcon:()=><Image source={require('../assets/newsfeed.png')} style={{height:heightRate(5),width:widthRate(5),resizeMode:'contain'}} />}} />
            <Tab.Screen name="BucketList" component={BucketListScreen} options ={{tabBarLabel:'Bucket List',tabBarIcon:()=><Image source={require('../assets/list.png')} style={{height:heightRate(5),width:widthRate(5),resizeMode:'contain'}} />}} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarLabel:'Profile',tabBarIcon:()=><Image source={require('../assets/profile.png')} style={{height:heightRate(5),width:widthRate(5),resizeMode:'contain'}} />}} />
        </Tab.Navigator>
  );
}

export default TabsNavigator;