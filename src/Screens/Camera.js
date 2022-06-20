import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera';
import axios from "axios";
import api from '../FirebaseData/DataExtract'
import LottieView from 'lottie-react-native';
var fs = require('react-native-fs');
const FoodCamra = ({ navigation }) => {

    var CameraRef = useRef();

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
      return <LottieView source={require('../Assets/cameraLoading.json')} autoPlay loop />
    }
  

    const takePicture = async () => {
        if (CameraRef) {
          const options = { quality: 0.5, base64: true,width: 600, height: 600 };
          const data = await CameraRef.takePictureAsync(options);
          //console.log(data);



          postFlaskData(data);

        }
      };

      const postFlaskData = async (uri) => {
       
        var data = new FormData();
        let content = uri?.uri;
        const file = {
          uri: content,
          name: content?.slice(content?.lastIndexOf("/") + 1),
          type: "image/jpg",
        };
        data.append('image', file);
        
        var config = {
          method: 'post',
          url: 'https://api.logmeal.es/v2/image/recognition/complete/v0.9?language=eng',
          headers: { 
            'Authorization': 'Bearer 3e8eaedcf3e13e78a5d9a781ce79ded1b2d43437', 
            "Content-Type": "multipart/form-data",
            //...data.getHeaders()
          },
          data : data
        };
        

       axios(config)
        .then(function (response) {
          let data1 = response.data.recognition_results
          var maxProbs = Math.max(...data1.map(e => e.prob));
          var obj = data1.find(data1 => data1.prob === maxProbs);
          console.log(obj)

          if(obj.name == scanData.foodName){
            api.fruitRewardComeplete({Points: scanData.points}).then(()=>{
              alert('Fruit Scan Task Completed')
              navigation.navigate('FruitScanScreen')
            })
          }else{
            alert('Scanned fruit does not match with required fruit')
          }

        })
        .catch(function (error) {
          console.log(error);
        });


      };


    return(
        <View style={styles.container}>
        <RNCamera
          ref={ref => {
            CameraRef = ref;
          }}
          optio
          ratio={'4:3'}
          
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}


        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>takePicture()} style={styles.capture}>
            <Text style={{ fontSize: 14, color: 'black' }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default FoodCamra;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
})