import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import api from '../FirebaseData/DataExtract'
import LottieView from 'lottie-react-native';
const FruitScanScreen = ({ navigation }) => {
  const [scanData, setScanData] = useState('Loading')
  useEffect(()=>{
    api.getUserFoodTask().then((userD)=>{
      setScanData(userD);
      console.log(userD)
    // console.log(userD.Location._latitude)
    }).catch(()=>{
      setScanData('None')
    });
  },[])


  if(scanData == 'Loading'){
    return <LottieView source={require('../Assets/fruitLoader1.json')} autoPlay loop />
  }


  return (
    <View style={{ flex: 1, }}>
      
      <Text style={styles.mainHeading}>Scan a fruit to get points</Text>

      <TouchableOpacity style={styles.cameraButton} onPress={()=>{
        if(scanData == 'None'){
          alert('Nothing to scan')
        }else{
          navigation.navigate('CameraScreen')
        }
    }}>
        <EntypoIcon name={"camera"} size={90} color={"black"} />
      </TouchableOpacity>    
      <Text style={styles.sFruit}>Scan a Fruit</Text>

      {scanData == 'None' ? 


        <Text style={styles.challengeHeading}>No Fruit Task Available</Text>
       :
        <View style={styles.challengeView}>
          <View style={styles.challengeLeftSide}>
            <Text style={styles.challengeHeading}>Fruit to scan</Text>
            <Text style={styles.challengeDesc}>{scanData.foodName}</Text>
          </View>

          <View style={styles.challengeRightSide}>
            <Text style={styles.challengeHeading}>Points of Challenge</Text>
            <Text style={styles.challengeDesc}>{scanData.points}</Text>
          </View>

        </View>
      }
    </View>
  )
}

export default FruitScanScreen

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#FF7363',
    
  },
  cameraButton: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: "25%",
    backgroundColor: '#9c9c9c',
    padding: 25,
    borderRadius: 15,
  },
  sFruit:{
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5
  },
  challengeView: {
    //flexDirection: 'row',
    //justifyContent: 'space-evenly',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,

  },
  challengeLeftSide: {
    marginTop: 20,
    flexDirection: 'column'
  },
  challengeRightSide: {
    marginTop: 30,
    flexDirection: 'column'
  },
  challengeHeading: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  challengeDesc: {
    color: '#FF7363',
    textAlign: 'center',

  },
})