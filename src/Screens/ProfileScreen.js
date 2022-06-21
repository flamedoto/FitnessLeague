import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, Pressable, Alert, FlatList, Modal,
  } from 'react-native';


import React,{ useState, useEffect } from 'react'
import { useIsFocused} from '@react-navigation/native';
import api from '../FirebaseData/DataExtract';
import { MaximumPoints } from '../constants/index';
import * as Progress from 'react-native-progress';
import PersonalData from '../Data/PersonalData';
import AntIcon from 'react-native-vector-icons/AntDesign'
import BMIData from '../Data/BMIData';
import firebase from '../../firebase';
import LoginState from '../Data/LoginState';
const ProfileScreen = ({navigation}) => {
  const [userData, setUserData] = useState(PersonalData)
  const [userBMIData, setUserBMIData] = useState(BMIData)
  const [userProgress, setUserProgress] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [stepsData, setStepsData] = useState([])
  var focus = useIsFocused();

  useEffect(()=>{
    setUserProgress(PersonalData.points/MaximumPoints)
   /* api.personalDetailGet().then((userD)=>{
      setUserData(userD);

    });

    api.BMIGet().then((userD)=>{
      setUserBMIData(userD);

    });*/

    api.getAllUsersSteps().then((data)=>{
      setStepsData(data)
      
    }) 


  },[])




  useEffect(()=>{
    if(focus == true){

      setUserBMIData(BMIData)
      setUserData(PersonalData)
      setUserProgress(PersonalData.points/MaximumPoints)
    }

  },[focus])

 /* useFocusEffect(()=>{
    api.personalDetailGet().then((userD)=>{
      setUserData(userD);

    });

    api.BMIGet().then((userD)=>{
      setUserBMIData(userD);

    });
    setUserBMIData(BMIData)
    setUserData(PersonalData)
    setUserProgress(PersonalData.points/MaximumPoints)




  })*/

  return (

    
    <View style={styles.container}>
        

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
                data={stepsData}
                renderItem={item => {
                  const FlatData = item.item._data
                  var d = FlatData.Date.toDate()

                  let date = d.getDate();
                  let month = d.getMonth() + 1;
                  let year = d.getFullYear();

                  return(
                    <View style={styles.FoodView}>
              
                    <View style={styles.FoodTextView}>
                      <Text style={styles.FoodName}>Steps : {FlatData.Steps}</Text>
                    </View>

                    <Text style={styles.FoodDate}>{date}/{month}/{year}</Text>
                  </View>
                  )
                }}
                keyExtractor={item => item.ref._documentPath._parts[1]}          
              />







            </View>



        </Modal>

          <View style={styles.header}></View>
          
          <Pressable
        style={[styles.buttonModal, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Steps</Text>
      </Pressable>

          <Image style={styles.avatar} source={require('../Assets/pfp.png')}/>

          
          <View style={styles.body}>

            <View style={styles.bodyContent}>
              
              <Text style={styles.name}>{userData.firstName} {userData.lastName}</Text>
              <Text style={styles.mail}>{userData.Email}</Text>
              <Text style={styles.weight}>Weight: {userBMIData.Weight}</Text>

              <Text style={{ fontSize: 17,fontWeight: '300',marginTop: 30, }}>Your weight Type is <Text style={{ fontWeight: 'bold' }}>{userBMIData.weightType}</Text></Text>

              <Text style={{ color: 'black',textAlign: 'center',padding: 10, color:'blue', fontSize:20,marginTop: 30, }}>Rewards Points</Text>
              <TouchableOpacity style={{ position: 'relative', marginBottom: 20, }}>
                <Progress.Bar style={{alignSelf:'center'}} progress={userProgress} width={100} animated={true} color={'#696969'} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                if(userData.points >= MaximumPoints){
                  api.updatePoints()
                  PersonalData.points = 0;
                  setUserProgress(0/MaximumPoints)
                  setUserData(PersonalData)
                  alert('Cheat meal redeemed !')
                }else{
                  alert('Can not Redeem cheat meal yet!')
                }
              }}> 
                  <Text> Redeem Cheat Meal </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={async ()=> {
                  //navigation.navigate('LoginScreen')
                  LoginState.userLoginin = false
                  await firebase.auth().signOut()
                }}
              > 
                  <Text> Logout </Text>
              </TouchableOpacity>

            </View>
        </View>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      position: 'absolute',
      marginBottom:10,
      alignSelf:'center',
      marginTop:130
    },
    body:{
        marginTop:"15%",
    },
    bodyContent: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600",

    },
    mail:{
      fontSize:16,
      color: "#00BFFF",
      
    },
    weight:{
      fontSize:20,
      color: "#696969",
      textAlign: 'center'
    },

    button:{
    
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative",
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
    },
    buttonModal:{
    
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute",
      marginBottom:20,
      width:70,
      right:0,
      marginRight: 10,
      marginTop:10,
      borderRadius:30,
      backgroundColor: "white",
      },
    buttonContainer:{
    marginTop:"45%",
    flexDirection:'column',
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
  });
  