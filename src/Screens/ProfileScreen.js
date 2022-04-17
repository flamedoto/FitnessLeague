import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';

import React from 'react'
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";


import * as Progress from 'react-native-progress';
const ProfileScreen = ({navigation}) => {


  return (

    
    <View style={styles.container}>
        
          <View style={styles.header}></View>
          
          <Image style={styles.avatar} source={require('../Assets/pfp.png')}/>

          
          <View style={styles.body}>

            <TouchableOpacity>
              <Text style={{alignSelf:'center', color:'red'}}> Click to Redeem Cheat Meal</Text>
              <Progress.Bar style={{alignSelf:'center'}} progress={0.6} width={100} color={'#696969'} />
            </TouchableOpacity>

            <View style={styles.bodyContent}>
              
              <Text style={styles.name}>Demo Name</Text>
              <Text style={styles.mail}>demo@mail.com</Text>
              <Text style={styles.weight}>Weight: 55</Text>

              <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}> 
                  <Text> Change Weight </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=> navigation.navigate('LoginScreen')}
              > 
                  <Text> Logout </Text>
              </TouchableOpacity>
              </View>

            </View>
        </View>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
        marginTop:"15%",
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      position: 'absolute',
      marginTop: '6%',
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    mail:{
      fontSize:16,
      color: "#00BFFF",
      position: 'absolute',
      marginTop:"22%",
      
    },
    weight:{
      fontSize:20,
      color: "#696969",
      position: 'absolute',
      marginTop:"34%",
      textAlign: 'center'
    },

    button:{
    
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative",
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
    },

    buttonContainer:{
    marginTop:"45%",
    flexDirection:'column',
    },
  });
  