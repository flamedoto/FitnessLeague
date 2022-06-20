import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import { COLORS,SIZES } from '../constants/theme'
import React, { useState, useEffect } from 'react';
import api from  '../FirebaseData/DataExtract'
import BMIData from '../Data/BMIData';

const BMIScreen = () => {

   const [bmi, setBmi] = useState(0);
   const [height, setHeight] = useState('');
   const [weight, setWeight] = useState('');
  
   const [userData, setUserData] = useState(BMIData)


    const GetBMI = async ()=>{
        await api.BMIGet().then((userD)=>{
            setUserData(userD);
            BMIData.BMI = userD.BMI
            BMIData.Height = userD.Height
            BMIData.TargetCalories = userD.TargetCalories
            BMIData.Weight = userD.Weight
            BMIData.userId = userD.userId
            BMIData.weightType = userD.weightType
            console.log(userD)
    
          });
    }

   useEffect(()=>{
      GetBMI();

   },[])


  return (
  

      <View style={{width:'100%',height:'100%', backgroundColor: COLORS.accent+'30',}}>

           <Image source={require('../Assets/images/BgOrange.png')} 
        style={{marginTop:'50%', position:'absolute',alignSelf:'center',}}
        />

           <Text style={styles.textStyle}>Bio Mass Index</Text>
          
        <TextInput onChangeText={setHeight} value={height} keyboardType='numeric' placeholder='Enter Height (meter)' style={styles.heightEnter}></TextInput>
        <TextInput onChangeText={setWeight} value={weight} keyboardType='numeric' placeholder='Enter Weight (kg)' style={styles.weightEnter}></TextInput>

        <TouchableOpacity style={styles.Button}
         onPress={()=> {
            let bmi = weight/(height*height)
            api.UpdateUserBMI({ BMI: bmi,Weight: weight,Height: height }).then((s)=>{
                console.log(s)
                GetBMI();
            }).catch((e)=>{
                console.log(e)
            })
         }}
        >
             <View> 
                <Text style={{fontSize:20,}}>Submit</Text>
                
            </View>
        </TouchableOpacity>

       
        
       <Text style={styles.showBMI}> BMI: {userData.BMI} </Text>
       {/* You need to lose wait */}
    </View>
  )
}

export default BMIScreen

const styles = StyleSheet.create({

    textStyle:{
        marginTop:'20%',
        alignSelf:'center',
        fontSize:20,
        fontWeight: '500',
        textDecorationLine:'underline',
        position:'relative'
    },

    heightEnter:{

            alignSelf:'center',
            alignItems:'flex-start',
            marginTop:'14%',
            borderRadius: 23,
            paddingHorizontal: '25%',
            borderColor: '#ffb3d9',
            borderWidth: 1,
    },

    weightEnter:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:'10%',
        borderRadius: 23,
        paddingHorizontal: '25%',
        borderColor: '#ffb3d9',
        borderWidth: 1,
    },

    Button:{
        marginTop: '5%',
        alignSelf:'center',
        borderWidth: 1,
        borderRadius: 23,
        paddingHorizontal: '5%',
        backgroundColor: '#ff8080',
    },

    showBMI:{
            fontSize:25,
            marginTop:'10%',
            alignSelf:"center",
            color: COLORS.accent,
            fontFamily: 'serif',
    },
})