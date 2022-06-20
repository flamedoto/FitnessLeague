import React, { useEffect, useState } from 'react';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList  } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import RNLocation from 'react-native-location';
import api from '../FirebaseData/DataExtract'
import { ActivityIndicator } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import PerosnalData from '../Data/PersonalData';
import LottieView from 'lottie-react-native';

import AntIcon from 'react-native-vector-icons/AntDesign'

const TodayScreen = () => {
  const [steps, setSteps] = useState(0);
  const [defaultSteps, setDefaultSteps] = useState(0);
  const [userLocation, setUserLocation] = useState('')
  const [userData, setUserData] = useState({})
  const [rewardLocation, setRewardLocation] = useState('')
  const [rewardCompleted, setRewardCompleted] = useState(false)
  const [pointsData, setPointsData] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(true)
  var focus = useIsFocused();


  useEffect(()=>{
    if(focus == true){
    api.getAllUsersTask().then((userD)=>{
      setPointsData(userD);
      console.log(32132)
    // console.log(userD.Location._latitude)
    }).catch(()=>{
      setPointsData('None')
    });


    setUserData(PerosnalData);
    //setSteps(PerosnalData.Steps)

      api.getUserSteps().then((userD)=>{
        setSteps(userD.Steps)
        setDefaultSteps(userD.Steps)
      });

  
      api.getUserTask().then((userD)=>{
        setRewardLocation(userD);
      // console.log(userD.Location._latitude)
      }).catch(()=>{
        setRewardLocation('None')
      });


      let locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
        //        console.log(locations)
                setUserLocation(locations[0])
        
                if(rewardLocation != 'None'){
                  if(rewardLocation != '' && rewardCompleted == false){
                  // let rL = new firestore.GeoPoint(rewardLocation.Location._latitude, rewardLocation.Location._longitude)
                    let uL = new firestore.GeoPoint(locations[0].latitude, locations[0].longitude)
                    let onLocation = rewardLocation.Location.isEqual(uL);
                  // console.log(onLocation)
                    if(onLocation == true){
                      setRewardCompleted(true)
                      api.RewardCompleted({ Points: PerosnalData.points + rewardLocation.rewards }).then((r)=>{
                        PerosnalData.points += rewardLocation.rewards
                        alert('Your Task is Complete Rewards: '+ rewardLocation.rewards.toString())
                      })
                    }
                  }
                }
                /* Example location returned
                {
                  speed: -1,
                  longitude: -0.1337,
                  latitude: 51.50998,
                  accuracy: 5,
                  heading: -1,
                  altitude: 0,
                  altitudeAccuracy: -1
                  floor: 0
                  timestamp: 1446007304457.029,
                  fromMockProvider: false
                }
                */
              })
        
              return () => locationSubscription();
            }

  },[focus])

  useEffect(() => {

   // api.UpdateCalories({ Steps: 19, Gender: userData ? userData.Gender : 'male', CaloriesConsumed: 0 })



    api.getAllUsersTask().then((userD)=>{
      setPointsData(userD);
      console.log(32132)
    // console.log(userD.Location._latitude)
    }).catch(()=>{
      setPointsData('None')
    });


    setUserData(PerosnalData);
    //setSteps(PerosnalData.Steps)

      api.getUserSteps().then((userD)=>{
        setSteps(userD.Steps)
        setDefaultSteps(userD.Steps)
      });

  
      api.getUserTask().then((userD)=>{
        setRewardLocation(userD);
      // console.log(userD.Location._latitude)
      }).catch(()=>{
        setRewardLocation('None')
      });



    RNLocation.getLatestLocation().then((lat_loc)=>{
      console.log(lat_loc)
      api.updateLocation({Longitude: lat_loc.longitude, Latitude: lat_loc.latitude, Speed: lat_loc.speed})
    })


    
    
    
    
    const config = {
      default_threshold: 100.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: (stepCount) => { 
        //console.log(123)
        let step = defaultSteps + stepCount
        api.UpdateCalories({ Steps: step })
       
        api.UpdateSteps({ Steps: step})
        setSteps(step) 
      },
      onCheat: () => { console.log("User is Cheating") }
    }
    startCounter(config);
    return () => { 
      RNLocation.getLatestLocation().then((lat_loc)=>{
        console.log(lat_loc)
        api.updateLocation({Longitude: lat_loc.longitude, Latitude: lat_loc.latitude, Speed: lat_loc.speed})
      })      
      stopCounter() 
    }
  }, []);


 /* useEffect(()=>{
    console.log(steps)
    api.UpdateSteps({ Steps: steps})
  },[steps])*/


  

  if(userLocation == '' || rewardLocation == '' || pointsData == ''){
    return <LottieView source={require('../Assets/workout_load.json')} autoPlay loop />
  }

  return (
    
    <View>






      
      <View style={styles.container}>






      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        

      >
        <View style={styles.CloseButtonView}>
            <TouchableOpacity onPress={()=>setModalVisible(false)} >
                <AntIcon name="closecircle" size={30} color={"black"} />
            </TouchableOpacity>
          </View>

          <View style={styles.FoodsView}>





            <FlatList
                data={pointsData}
                renderItem={item => {
                  const FlatData = item.item._data
                  var d = FlatData.date.toDate()

                  let date = d.getDate();
                  let month = d.getMonth() + 1;
                  let year = d.getFullYear();

                  if(FlatData.Completed == true){
                    var complete = "true"
                  }else{
                    var complete = "false"

                  }


                  if(FlatData.active == true){
                    var active = "true"
                  }else{
                    var active = "false"
                  }


                  return(
                    <View style={styles.FoodView}>
              
                    <View style={styles.FoodTextView}>
                      <Text style={styles.FoodName}>Task Points : {FlatData.rewards}</Text>
                      <Text style={styles.FoodDesc}>Active : {active}</Text>
                      <Text style={styles.FoodDesc}>Completed : {complete}</Text>
                    </View>

                    <Text style={styles.FoodDate}>{date}/{month}/{year}</Text>
                  </View>
                  )
                }}
                keyExtractor={item => item.ref._documentPath._parts[1]}          
              />







            </View>



        </Modal>



     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: userLocation.latitude,
         longitude: userLocation.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       <Marker
        key={1}
        coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
        title={userData.firstName}
        pinColor = {"purple"}
        
        >
        <FontAwesome name={"map-marker"} size={35} color={"red"}/>
        </Marker>
       {rewardLocation == 'None' ? null :
        <Marker
          key={2}
          coordinate={{ latitude: rewardLocation.Location._latitude, longitude: rewardLocation.Location._longitude }}
          title={"Reward"}
          pinColor = {"blue"}
          //description={marker.description}
        >
        <FontAwesome5Icon name={"map-pin"} size={35} color={"black"}/>
          
        </Marker>
      }
     </MapView>
   </View>
    
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.allRDataButton}>Show all rewards</Text>
        </TouchableOpacity>
        <Text style={styles.step}>Steps Walked: {steps}</Text>
        <Text style={styles.pointsText}>Task points: {rewardLocation.rewards}</Text>
        <Text style={styles.pointsText}>{ rewardLocation == 'None' ? <Text>No new task available</Text> : <Text>Task Avaiable</Text> }  </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    marginTop: '120%',
    alignItems:'center',
  },
  step: {
    fontSize: 20,
    color: 'black'
  },
  pointsText: {

    fontSize: 20,
    color: 'black',
    marginTop: 10
  },
  allRDataButton: {
    
    fontSize: 20,
    marginBottom: 10
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  FoodsView: {
    flex: 1,
    width: "90%",
    alignSelf: 'center',
    zIndex: 500,
    marginTop: 20,
  },
  FoodView: {
    marginBottom: 10,
    backgroundColor: '#817DC0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  FoodTextView:{

  },
  FoodDesc:{
    color: 'white'
  },
  FoodName:{
    marginBottom: 7,
    fontSize: 17,
    fontWeight: 'bold'
  },
  FoodDate: {
    color: 'white',
    fontWeight: 'bold'
  }, CloseButtonView: {
    zIndex: 1,
    alignSelf: 'flex-end',
    padding: 20,
},
  
});

export default TodayScreen;
