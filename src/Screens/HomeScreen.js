import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, FlatList,TouchableOpacity, ScrollView } from 'react-native'

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from '../constants/theme';
import ExerciseScreen from './ExerciseScreen';
import React, { useEffect, useState } from 'react'
import api from '../FirebaseData/DataExtract';
import { NavigationContainer, useIsFocused, useNavigation} from '@react-navigation/native';
import RNLocation from 'react-native-location';
import PersonalData from '../Data/PersonalData';
import BMIData from '../Data/BMIData';
import OneSignal from 'react-native-onesignal'
import * as Progress from 'react-native-progress';


RNLocation.configure({
  distanceFilter: 5, // Meters
  desiredAccuracy: {
    android: "highAccuracy"
  },
  androidProvider: "auto",
  // Android only
  interval: 1000, // Milliseconds
  fastestInterval: 1000, // Milliseconds
  maxWaitTime: 1000, // Milliseconds
})






const HomeScreen = ({navigation}) => {

  const [userData, setUserData] = useState({})
  const [userBMIData, setUserBMIData] = useState({})
  const [caloriesData, setCaloriesData] = useState({})
  var focus = useIsFocused();
  const [caloBurnorConsume, setcaloBurnorConsume] = useState('gain')
  const [caloriesPercentage, setCaloriesPercentage] = useState(0)

  const registerNotifications = async () => {

    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId('ef452881-d432-4b08-864f-312de068bc78');
    OneSignal.setLogLevel(0, 0);
    const deviceState = await OneSignal.getDeviceState();
    console.log(deviceState)
    api.updateOneSignalId(deviceState.userId)

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
        // console.log("OneSignal: notification will show in foreground:", notifReceivedEvent);
        // let notif = notifReceivedEvent.getNotification();
    });
    OneSignal.setNotificationOpenedHandler(async (openedEvent) => {
        // console.log("OneSignal: notification opened:", openedEvent);
        const { action, notification } = openedEvent;
        const { additionalData } = notification
        console.log(additionalData)
        if(additionalData.type == "Task"){
          navigation.navigate('TodayScreen')
        }else{
          navigation.navigate('FruitScanScreen')
        }

 
    });
    OneSignal.setInAppMessageClickHandler(event => {
        // console.log("OneSignal IAM clicked:", event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
        // console.log("OneSignal: email subscription changed: ", event);
    });
    OneSignal.addSubscriptionObserver(event => {
        // console.log("OneSignal: subscription changed:", event);
    });
    OneSignal.addPermissionObserver(event => {
        // console.log("OneSignal: permission changed:", event);
    });
   }

   useEffect(()=>{
    if(focus == true){
      console.log(focus)
      api.getUserCalories().then(cal=>{


        setCaloriesData(cal)
        if(BMIData.weightType =='gain'){
          let c = cal.caloriesConsumed - cal.caloriesBurned;

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesConsumed - cal.caloriesBurned)


          if(c < 0){
            setcaloBurnorConsume(0)
          }

          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }




        }else{


          let c = cal.caloriesBurned - cal.caloriesConsumed

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesBurned - cal.caloriesConsumed)


          if(c < 0){
            setcaloBurnorConsume(0)
          }

          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }


        }
      }).catch(e=>{
        console.log(e)
      })
    }

  },[focus])


  useEffect(()=>{

    

    registerNotifications()
    RNLocation.checkPermission({
      android: {
        detail: 'fine' 
      }
    }).then(location=>{

      if(location == false){


        RNLocation.requestPermission({
          android: {
            detail: "fine",
            rationale: {
              title: "We need to access your location",
              message: "We use your location to show where you are on the map",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        }).then(granted => {
            if (granted) {
              RNLocation.getLatestLocation().then((lat_loc)=>{
                console.log(lat_loc)
                api.updateLocation({Longitude: lat_loc.longitude, Latitude: lat_loc.latitude, Speed: lat_loc.speed})
              });
            }
          })

        
      }else{
        
        RNLocation.getLatestLocation().then((lat_loc)=>{
          console.log(lat_loc)
          api.updateLocation({Longitude: lat_loc.longitude, Latitude: lat_loc.latitude, Speed: lat_loc.speed})
        });

      }

    })

      api.personalDetailGet().then((userD)=>{
        setUserData(userD);
        PersonalData.Email = userD.Email
        PersonalData.Gender = userD.Gender
        PersonalData.Location = userD.Location
        PersonalData.points = userD.points
        PersonalData.Steps = userD.Steps
        PersonalData.firstName = userD.firstName
        PersonalData.lastName = userD.lastName
        PersonalData.userId = userD.userId

      }).catch(e=>{
        
      });

      api.BMIGet().then((userD)=>{
        setUserBMIData(userD);

        console.log(userD.BMI)
        BMIData.BMI = userD.BMI
        BMIData.Height = userD.Height
        BMIData.TargetCalories = userD.TargetCalories
        BMIData.Weight = userD.Weight
        BMIData.userId = userD.userId
        BMIData.weightType = userD.weightType
  
      }).catch(e=>{

      });


      api.getUserCalories().then(cal=>{
        setCaloriesData(cal)
        if(BMIData.weightType =='gain'){


          let c = cal.caloriesConsumed - cal.caloriesBurned;

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesConsumed - cal.caloriesBurned)

          if(c < 0){
            setcaloBurnorConsume(0)
          }

          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }


        }else{

          let c = cal.caloriesBurned - cal.caloriesConsumed

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesBurned - cal.caloriesConsumed)


          if(c < 0){
            setcaloBurnorConsume(0)
          }

          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }

        }
      }).catch(e=>{
        console.log(e)
      })

  },[])


   /*useFocusEffect(()=>{
   api.personalDetailGet().then((userD)=>{
      setUserData(userD);
      PersonalData.Email = userD.Email
      PersonalData.Gender = userD.Gender
      PersonalData.Location = userD.Location
      PersonalData.points = userD.points
      PersonalData.Steps = userD.Steps
      PersonalData.firstName = userD.firstName
      PersonalData.lastName = userD.lastName
      PersonalData.userId = userD.userId

    });

    api.BMIGet().then((userD)=>{
      setUserBMIData(userD);

      BMIData.BMI = userD.BMI
      BMIData.Height = userD.Height
      BMIData.TargetCalories = userD.TargetCalories
      BMIData.Weight = userD.Weight
      BMIData.userId = userD.userId
      BMIData.weightType = userD.weightType
    });

  })*/



  

  return (
    
    <ScrollView style={{flex:1,position:'relative',}}>

      
        
      <StatusBar backgroundColor={COLORS.accent + '30'} 
      barStyle='dark-content'
      animated={true}
      />

      
      <View style={{width:'100%', height:0.45*SIZES.height, padding:30, backgroundColor: COLORS.accent+'30',position:'relative'}}>
        <Image source={require('../Assets/images/BgOrange.png')}
        style={{
        position:'absolute', 
        top:60, 
        left:-50,
      }}
        />
      
    <TouchableOpacity
    onPress={()=> navigation.navigate('BMIScreen')}
    >
        
        <View
        style={{flexDirection:'row',alignItems:'center',justifyContent: 'flex-end',}}>
          <View style={{width: 60, height:60, backgroundColor: COLORS.accent+'40',
          marginRight:0,borderRadius:30,justifyContent:'center',alignItems:'center',
        }}> 
            <Text style={{fontWeight:'700', textDecorationLine:'underline', color:'blue'}}>BMI</Text>
              
            

         </View>
        </View>
        </TouchableOpacity>
                  <Text style={{fontSize:30, lineHeight:45}}>GOOD MORNING</Text>
                  <Text style={{fontSize:30, lineHeight:45, color:'blue',textTransform: 'uppercase'}}>{userData.firstName}</Text>

        {/* <Text style={{ color: 'black',marginTop: 10,fontWeight: 'bold' }}>Calroies History</Text> */}

        <View style={styles.caloriesBar}>
          <Text style={styles.caloriesText}>GOAL :  {parseInt(caloBurnorConsume)}/{caloriesData.caloriesTarget}</Text>
          <Progress.Bar progress={caloriesPercentage} width={320}  style={{ width: 300,alignSelf:'center', marginBottom:'5%' }}/>
          <Text style={styles.caloriesText}>Burned: {caloriesData.caloriesBurned}</Text>
          <Text style={styles.caloriesText}>Consumed: {caloriesData.caloriesConsumed}</Text>
        </View>
      </View>



      {userBMIData.weightType != 'lose' ? 
      <View>
        <View style={{flexDirection:'row'}}>

          {/* Main Screen 1 , 2 Card */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DietScreen')
          }
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.white,
            width: 0.5 * SIZES.width - 35,
            margin: 10,
            height: 180,
            borderRadius: 10,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image style={{width: '100%',resizeMode: 'cover', flex: 1, }}
          source={require('../Assets/images/food_recommend.png')} />
          <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Food Logger </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Cardio')
          }
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.white,
            width: 0.5 * SIZES.width - 35,
            margin: 10,
            height: 180,
            borderRadius: 10,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image style={{width: '100%',resizeMode: 'cover', flex: 1,}}
          source={require('../Assets/images/cardio.jpg')} />
          <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Cardio </Text>
        </TouchableOpacity>

        

        </View>
    {/* Main Screen 2 , 3 Card */}

    <View style={{flexDirection:'row'}}>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Daily_Workout')
          }
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.white,
            width: 0.5 * SIZES.width - 35,
            margin: 10,
            height: 180,
            borderRadius: 10,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image style={{width: '100%',resizeMode: 'cover', flex: 1, }}
          source={require('../Assets/images/workout.jpg')} />
          <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Daily Workouts </Text>
        </TouchableOpacity>

      

        </View>
      </View>
      : 
      
      <View>
      <View style={{flexDirection:'row'}}>

        {/* Main Screen 1 , 2 Card */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DietScreen')
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image style={{width: '100%',resizeMode: 'cover', flex: 1, }}
        source={require('../Assets/images/food_recommend.png')} />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Food Logger </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseScreen')
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image style={{width: '100%',resizeMode: 'cover', flex: 1,}}
        source={require('../Assets/images/Exercise2.png')} />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Exrcise </Text>
      </TouchableOpacity>

      

      </View>
  {/* Main Screen 2 , 3 Card */}

  <View style={{flexDirection:'row'}}>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('YogaScreen')
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image style={{width: '100%',resizeMode: 'cover', flex: 1, }}
        source={require('../Assets/images/Exercise3.png')} />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Yoga </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('KegleScreen')
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image style={{width: '100%',resizeMode: 'cover', flex: 1,}}
        source={require('../Assets/images/Exercise4.png')} />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500', color: 'black'}}> Kegles </Text>
      </TouchableOpacity>

      </View>
    </View>
      }
      
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  caloriesBar:{
    justifyContent: 'center',
    flex: 1,
  },
  caloriesText:{
    marginBottom: 8,
    color: 'black',
    alignSelf:'center',
  }
})