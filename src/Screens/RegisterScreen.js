import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ScrollView } from 'react-native'
import AntDesign  from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from '../../firebase';
import auth from '@react-native-firebase/auth';

import LoginState from '../Data/LoginState'


import React,{useState} from 'react'

const RegisterScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastNaem] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');



  const [openGender, setOpenGender] = useState(false);
  const [itemsGender, setItemsGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]);








  const handleSignUp = () => {


    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert("Email is Not Correct");
      return;
    }


    if(password.length < 6){
      alert("Password must be alphanumeric and 8 character long");
      return;
    }
    if (/^([a-zA-Z0-9]+)$/.test(password) && /\d/.test(password) &&
    /[A-Z]/i.test(password)) {
      
    }else{
      console.log(1)
      alert("Password must be alphanumeric and 8 character long");
      return;
    }

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (U) => {
      await firebase
      .auth()
      .currentUser.sendEmailVerification();

      console.log('User account created & signed in!');
      var user = firebase.auth().currentUser;

      firebase.firestore()
      .collection('account')
      .add({
          firstName: firstName,
          lastName: lastName,
          userId: user.uid,
          Email: email,
          Height: height,
          Weight: weight,
          Steps: 0,
          points: 0,
          Gender: gender,
          Location: '',
          calories: '0',
          TargetCalories: '0',
      });

      let bmi = weight/(height*height);

      if(bmi < 25){
        var weightType = 'gain'
      }else{
        var weightType = 'lose'
      }

      if(gender == 'female'){
        var caloriestarget = 1600
      }else{
        var caloriestarget = 2000
      }

      firebase.firestore()
      .collection('userBMI')
      .add({
          weightType: weightType,
          TargetCalories: caloriestarget,
          Height: height,
          Weight: weight,
          BMI: bmi,
          userId: user.uid,
      });

     /* firebase.firestore()
      .collection('calories')
      .add({
          calories: 'Utkarsha',
          TargetCalories: 'Utkarsha',
          userId: 'Utkarsha',
      });
*/

     /* firebase.firestore()
      .collection('userDiet')
      .add({
          userId: 'Utkarsha',
          foodName: 'Utkarsha',
          foodCalories: 'Utkarsha',
          Time: 'Utkarsha',
      });



      firebase.firestore()
      .collection('userTask')
      .add({
          userId: 'Utkarsha',
          geolocationCoordinates: 'Utkarsha',
          expireTime: 'Utkarsha',
          startTime: '',
          taskPoints: ''
      });*/

      firebase.auth().signOut();
     // LoginState.userLoginin = true
     alert('Account created successfully, Please verify your email address to login')
      navigation.navigate('LoginScreen')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }


  return (
    
      <ScrollView style={{
        marginBottom: 40,
      }}>

      <Image source={require('../Assets/logo.jpg')} 
      style={{width: '100%', marginTop: 10,}}
      />
      <Text style={{ fontSize: 28, color: "black",alignSelf: 'center', marginTop: 20,
    }}
      > Become the Fittest </Text>
               

       <View
          style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                  paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
          <AntDesign name={"lock"} size={24} color="#84bef5" />
          <TextInput style={{ paddingHorizontal:15, }} placeholder=" First Name" onChangeText={text => setFirstName(text)} />
       </View>

       <View
          style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                  paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
          <AntDesign name={"lock"} size={24} color="#84bef5" />
          <TextInput style={{ paddingHorizontal:15, }} placeholder=" Last Name" onChangeText={text => setLastNaem(text)} />
       </View>


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


          <AntDesign name={"mail"} size={24} color="#84bef5" />
          <DropDownPicker
                open={openGender}
                value={gender}
                items={itemsGender}
                setOpen={setOpenGender}
                setValue={setGender}
                
                setItems={setItemsGender}
                style={{ backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)', }}
                
              />

       </View>





       <View
          style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:90,
                  paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
          <AntDesign name={"lock"} size={24} color="#84bef5" />
          <TextInput style={{ paddingHorizontal:15, }} placeholder=" Height (meter)" onChangeText={text => setHeight(text)} />
       </View>


       <View
          style={{ borderWidth: 2, flexDirection: "row", alignItems:"center", marginHorizontal:55,marginTop:20,
                  paddingHorizontal: 10, borderRadius: 23, borderColor:"#84bef5", paddingVertical: 2,}}> 
          <AntDesign name={"lock"} size={24} color="#84bef5" />
          <TextInput style={{ paddingHorizontal:15, }} placeholder=" Weight (kg)" onChangeText={text => setWeight(text)} />
       </View>






       <TouchableOpacity onPress={handleSignUp}
        style={{marginHorizontal:55,alignItems:'center',justifyContent:'center',marginTop:"8%",backgroundColor:"#84bef5",
            borderRadius:20, paddingVertical:8}}> 
           <Text style={{color:"white" , fontSize:15}} > Signup </Text>
       </TouchableOpacity>

       <TouchableOpacity  onPress={()=>navigation.navigate('LoginScreen')} >
       <Text style={{color:"#94cef5", alignSelf:"center", fontSize:15, marginTop:"5%"}} > Already Have an Account? </Text> 
       </TouchableOpacity>

    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})