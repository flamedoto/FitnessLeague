import React,{useState, useEffect} from 'react';
import Navigate from './src/Navigation/Navigate';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginState from './src/Data/LoginState';
import firebase from './firebase';

import OneSignal from 'react-native-onesignal'
import api from './src/FirebaseData/DataExtract'

const App = () => {
  

  
  const [user, setUser] = useState(false);





  const interval = setInterval(() => {
    setUser(LoginState.userLoginin)
  }, 3000);
  useEffect(() => {

    const init = async () => {
      const user = firebase.auth().currentUser
      //console.log(user)
      if (user != null){
          LoginState.userLoginin = true
          setUser(true)
      }

    };

    init().finally(async () => {
     
    });


    //setUser(LoginState.userLoginin)
    interval;
    console.log(LoginState.userLoginin)
  }, []);




  return (
    <Navigate userLogininState={user} />
  )};

const styles = StyleSheet.create({
  
});

export default App;
