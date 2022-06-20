import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import api from '../FirebaseData/DataExtract'
import LottieView from 'lottie-react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'
const FruitScanScreen = ({ navigation }) => {
  const [scanData, setScanData] = useState('Loading')
  const [modalVisible, setModalVisible] = useState(false);
  const [fruitData, setFruitData] = useState([])
  useEffect(()=>{
    api.getUserFruitTask().then(uD=>{
        setFruitData(uD)
    })
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
      


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        

      >
        <View style={styles.CloseButtonView}>
            <Pressable onPress={()=>setModalVisible(false)} >
                <AntIcon name="closecircle" size={30} color={"black"} />
            </Pressable>
          </View>

          <View style={styles.FoodsView}>





            <FlatList
                data={fruitData}
                renderItem={item => {
                  const FlatData = item.item._data
                  var d = FlatData.date.toDate()

                  let date = d.getDate();
                  let month = d.getMonth() + 1;
                  let year = d.getFullYear();

                  if(FlatData.Completed == true){
                    var Completed = "true"
                  }else{
                    var Completed = "false"

                  }


                  if(FlatData.Active == true){
                    var Active = "true"
                  }else{
                    var Active = "false"
                  }

                  return(
                    <View style={styles.FoodView}>
              
                    <View style={styles.FoodTextView}>
                      <Text style={styles.FoodName}>Fruit Name : {FlatData.foodName}</Text>
                      <Text style={styles.FoodDesc}>Fruit Points : {FlatData.points}</Text>
                      <Text style={styles.FoodDesc}>Active : {Active}</Text>
                      <Text style={styles.FoodDesc}>Completed : {Completed}</Text>
                    </View>

                    <Text style={styles.FoodDate}>{date}/{month}/{year}</Text>
                  </View>
                  )
                }}
                keyExtractor={item => item.ref._documentPath._parts[1]}          
              />







            </View>



        </Modal>



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

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.rewardButtonContainer}
        >
          <Text style={styles.allRDataButton}>Show Scanned Fruits</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FruitScanScreen

const styles = StyleSheet.create({

  allRDataButton: {
    fontSize: 20,
    marginBottom: 5,
    color:'white'
  },

  rewardButtonContainer: {
    
    marginTop:'10%',
    alignSelf:'center',
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom:'5%'
  },

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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
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

})