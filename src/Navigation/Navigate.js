import { StyleSheet, Text, View,} from 'react-native'


import React from 'react'

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import TodayScreen from '../Screens/TodayScreen';
import ExerciseScreen from '../Screens/ExerciseScreen';
import FruitScanScreen from '../Screens/FruitScanScreen';
import BMIScreen from '../Screens/BMIScreen';
import { COLORS, SIZES } from '../constants/theme';
import DietScreen from '../Screens/DietScreen';
import YogaScreen from '../Screens/YogaScreen'
import KegleScreen from '../Screens/KegleScreen'

import AntDesign  from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'HomeScreen') {
            return <AntDesign name={"home"} size={24} color="#00BFFF" />
          }

          else if (route.name === 'TodayScreen') {
            return <AntDesign name={"calendar"} size={24} color="#00BFFF" />
          }

          else if (route.name === 'FruitScanScreen') {
            return <MaterialCommunityIcons name={"camera"} size={24} color="#00BFFF" />
          }

          else if (route.name === 'ProfileScreen') {
            return <AntDesign name={"profile"} size={24} color="#00BFFF" />
          }
        },
      })}

      tabBarOptions={{
        activeTintColor: '#00bfff',
        inactiveTintColor: "#00bfff",
        showLabel: false,
        
      }}
  
>
      <Tab.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen}/>
      <Tab.Screen options={{ headerShown: false }} name="TodayScreen" component={TodayScreen}/>
      <Tab.Screen options={{ headerShown: false}}  name="FruitScanScreen" component={FruitScanScreen}/>
      <Tab.Screen options={{ headerShown: false }} name="ProfileScreen" component={ProfileScreen}/>
       <Tab.Screen options={{ headerShown: false, tabBarButton: () => null,tabBarVisible: false, }}
       name="BMIScreen" component={BMIScreen}/>
        <Tab.Screen options={{ headerShown: false, tabBarButton: () => null,tabBarVisible: false,}}
       name="ExerciseScreen" component={ExerciseScreen}/>
    </Tab.Navigator>

  );
}

const Navigate = () => {
  

  return (
    <NavigationContainer> 
    <Stack.Navigator> 
        <Stack.Screen options={{ headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false}} name={"HomeScreen"} component={MyTabs} />
        <Stack.Screen options={{ headerShown: false}} name="DietScreen" component={DietScreen} />
        <Stack.Screen options={{ headerShown: false}} name="YogaScreen" component={YogaScreen} />
        <Stack.Screen options={{ headerShown: false}} name="KegleScreen" component={KegleScreen} />
      
    </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigate

const styles = StyleSheet.create({})

