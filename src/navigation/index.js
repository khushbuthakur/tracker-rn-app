import React from 'react'

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailsScreen from '../screens/TrackDetailsScreen';
import TrackListScreen from '../screens/TrackListScreen';

import {
    NavigationContainer
} from '@react-navigation/native';

import {
    createStackNavigator
} from '@react-navigation/stack';

import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

const AuthenticationStack = createStackNavigator();
const TrackStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const isLoggedIn = true;

const Navigation = () => {

    createBottomStack = () => {
       return (<BottomTabs.Navigator>
                <BottomTabs.Screen name="Account" component={AccountScreen}/>
                <BottomTabs.Screen name="TrackCreate" component={TrackCreateScreen}/>
                <BottomTabs.Screen name="TrackList" component={TrackListScreen}/>
            </BottomTabs.Navigator>)
    }

    createStack = () =>{
        return (<Stack.Navigator initialRouteName={isLoggedIn ? "Dashboard" : 'Signin'}> 
        {isLoggedIn ? (
            <>
            <Stack.Screen name="TrackDetails" component={TrackDetailsScreen}/>
            <Stack.Screen name="Dashboard" children={this.createBottomStack}/>
            </>
        ) : (
            <>
            <Stack.Screen name="Signin" component={SigninScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            </>
        )}        
               </Stack.Navigator>)
    }

    return (
        <NavigationContainer>
          {createStack()}
        </NavigationContainer>
      )
}

export default Navigation;