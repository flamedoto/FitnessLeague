import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
//import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../firebase';
import auth from '@react-native-firebase/auth';

import LoginState from '../Data/LoginState'

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {


   /* let echeck = await firebase.auth().fetchSignInMethodsForEmail(email);
    if(echeck.length == 0){
      window.alert("Email address or Password incorrect!")
      return
    }
*/
  
    
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res)
      console.log('User logged-in successfully!')
    
      LoginState.userLoginin = true
    })
    .catch(error => alert("Email or Password Incorrec. TRY AGAIN"))


   /* signInWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
        navigation.navigate('HomeScreen')
      
    })
    .catch((re)=>{
      console.log(re);
    })*/
  }



 

  return (
    <View>
      <Image source={require('../Assets/logo.jpg')} 
      style={{width: '100%', marginTop: 10,}}
      />
      <Text style={{ fontSize: 28, color: "black",alignSelf: 'center', marginTop: 20,
    }}
      > Become the Fittest </Text>
               

       <View
       style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
       <AntDesign name={"mail"} size={24} color="#84bef5" />
       <TextInput style={{ paddingHorizontal:15, }} placeholder=" Email" value={email} onChangeText={text => setEmail(text)}  />
       </View>

       <View
       style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
       <AntDesign name={"lock"} size={24} color="#84bef5" />
       <TextInput style={{ paddingHorizontal:15,}} placeholder=" Password" secureTextEntry={true} value={password} onChangeText={text => setPassword(text)}  />
       </View>

       <TouchableOpacity
       style={{marginHorizontal:55,alignItems:'center',justifyContent:'center',marginTop:"15%",backgroundColor:"#84bef5",
            borderRadius:20, paddingVertical:8}}
            onPress={handleSignIn}>
              
           <Text style={{color:"white" , fontSize:15}} > Login</Text>
       </TouchableOpacity>

<TouchableOpacity  onPress={()=>navigation.navigate('RegisterScreen')} >
       <Text style={{color:"#94cef5", alignSelf:"center", fontSize:20, marginTop:"5%"}} > Register Now!</Text> 
       </TouchableOpacity>
       
    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({})