import { View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList } from 'react-native'

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { COLORS, SIZES } from '../constants/theme';
import React , {useState} from 'react'
import VideoLink from '../Data/VideoLink';



const ExerciseScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'#C7B8F5'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.4 * SIZES.height,
          padding: 30,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>
        <Image
          source={require('../Assets/images/BgPurple.png')}
          style={{
            position: 'absolute',
            height:'100%',
            width:'100%'
          }}
        />
       
        <Text style={{fontSize: 16, opacity: 0.6,}}>
        Live happier and healthier by learning the fundamentals of kegel exercises
        </Text>
        <Text style={{fontSize: 12, color:'red'}} > 10-20 MIN Course </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white,
            width: '60%',
            height: 50,
            borderRadius: 25,
            marginVertical: 30,
          }}>
          <FontAwesome5Icons
            name="search"
            size={22}
            style={{
              marginHorizontal: 20,
            }}
          />
          <TextInput placeholder="Search" style={{flex: 1}} />
        </View>

                  {/* SESSION VIEWS 1, 2 */}

        <View style={{flexDirection:'row', marginTop:'55%',}}> 

              
          <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#C7B8F5',
          elevation: 5,
        }}>
        <TouchableOpacity
            onPress={()=>{
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/kegles%2F1.mp4?alt=media&token=375b3fbc-84a2-4123-ba2f-7651bfd7e9ff'
                navigation.navigate('VideoPlayerScreen')
            }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#C7B8F5',
            backgroundColor: '#C7B8F5',
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{color:'white'}}
          />
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>Session 1</Text>
          </View>

          <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#C7B8F5',
          elevation: 5,
        }}>
        <TouchableOpacity
            onPress={()=>{
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/kegles%2F2.mp4?alt=media&token=2b6c4c00-9920-4837-874d-40e1957977bf'
                navigation.navigate('VideoPlayerScreen')
            }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#C7B8F5',
            backgroundColor: '#C7B8F5',
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{color:'white'}}
          />
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>Session 2</Text>
          </View>

      </View>
            {/* SESSION VIEWS 3 , 4*/}
  <View style={{flexDirection:'row',}}> 
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#C7B8F5',
          elevation: 5,
        }}>
        <TouchableOpacity
            onPress={()=>{
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/kegles%2F3.mp4?alt=media&token=b9ccabbd-2ab3-4b99-b285-70084752bc7b'
                navigation.navigate('VideoPlayerScreen')
            }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#C7B8F5',
            backgroundColor: '#C7B8F5',
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{color:'white'}}
          />
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>Session 3</Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#C7B8F5',
          elevation: 5,
        }}>
        <TouchableOpacity
            onPress={()=>{
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/kegles%2F4.mp4?alt=media&token=36d5f37e-5afc-40a4-9318-7ef416ef3fec'
                navigation.navigate('VideoPlayerScreen')
            }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#C7B8F5',
            backgroundColor: '#C7B8F5',
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{color:'white'}}
          />
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>Session 4</Text>
      </View>
 </View>

          {/* SESSION VIEWS 5 , 6*/}
      <View style={{flexDirection:'row',}}> 
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#C7B8F5',
          elevation: 5,
        }}>
        <TouchableOpacity
            onPress={()=>{
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/kegles%2F5.mp4?alt=media&token=54400113-d6c1-4d76-bf21-d6f5f97ae219'
                navigation.navigate('VideoPlayerScreen')
            }}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#C7B8F5',
            backgroundColor: '#C7B8F5',
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{color:'white'}}
          />
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>Session 5</Text>
      </View>


      </View>




      {/* BOTTOM CARD */}
      
        <Image
          source={
            require('../Assets/images/Exercise4.png')
          }
          style={{
            position: 'absolute',
            bottom: 40,
            right: -130,
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: 300, marginHorizontal: 30}}>
       
   
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white,
            borderRadius: 15,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image
            source={
              require('../Assets/images/Exercise4.png')
            }
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text style={{fontSize:15, fontWeight:'800', color: 'black'}}>Kegle Exercise</Text>
            <Text style={{ color: 'black' }}>Start your Exercise</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseScreen

const styles = StyleSheet.create({})