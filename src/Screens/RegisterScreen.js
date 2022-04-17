import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import AntDesign  from 'react-native-vector-icons/AntDesign';

import { authentication } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



import React,{useState} from 'react'

const RegisterScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {

    createUserWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
        console.log(re);
        setIsSignedIn(true)
    })
    .catch((re)=>{
      console.log(re);
    })
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
       <TextInput style={{ paddingHorizontal:15, }} placeholder=" Password" secureTextEntry={true} value={password}  onChangeText={text => setPassword(text)} />
       </View>

       <View
       style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
       <AntDesign name={"lock"} size={24} color="#84bef5" />
       <TextInput style={{ paddingHorizontal:15, }} placeholder=" Password" secureTextEntry={true} />
       </View>

       <TouchableOpacity onPress={handleSignUp}
       style={{marginHorizontal:55,alignItems:'center',justifyContent:'center',marginTop:"8%",backgroundColor:"#84bef5",
            borderRadius:20, paddingVertical:8}}> 
           <Text style={{color:"white" , fontSize:15}} > Signup </Text>
       </TouchableOpacity>

       <TouchableOpacity  onPress={()=>navigation.navigate('LoginScreen')} >
       <Text style={{color:"#94cef5", alignSelf:"center", fontSize:15, marginTop:"5%"}} > Already Have an Account? </Text> 
       </TouchableOpacity>

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})