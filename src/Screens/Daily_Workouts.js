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
            backgroundColor: 'white',
            position: 'relative',
          }}>
          <Image
            source={require('../Assets/images/BgOrange.png')}
            style={{
              position: 'absolute',
              height:'100%',
              width:'100%'
            }}
          />
         
          <Text style={{fontSize: 16, opacity: 0.6, color: 'black'}}>
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/1.mp4")
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/2.mp4")
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/3.mp4")
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/4.mp4")
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/5.mp4")
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
                VideoLink.Link = require("../Assets/videos/Lose/daily_workout/6.mp4")
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
          <Text  style={{ color: 'black' }}>Session 6</Text>
        </View>
        </View>
  
  
  
  
        {/* BOTTOM CARD */}
        
          <Image
            source={
              require('../Assets/images/nobg_workout.png')
            }
            style={{
              position: 'absolute',
              bottom: 40,
              right: 0,
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
          />
        </View>
  
        <View style={{marginTop: -30, marginHorizontal: 30}}>
         
     
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
                require('../Assets/images/nobg_workout.png')
              }
              style={{width: 80, height: 60, resizeMode: 'center'}}
            />
            <View>
              <Text style={{fontSize:15, fontWeight:'800', color: 'black'}}>Daily Workouts</Text>
              <Text  style={{ color: 'black' }}>Start your Exercise</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ExerciseScreen
  
  const styles = StyleSheet.create({})