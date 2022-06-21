import { View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    StyleSheet,
    FlatList, 
    TouchableOpacity} from 'react-native'
  
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
            source={require('../Assets/images/BgOrange.png')}
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F1.mp4?alt=media&token=2fd3911a-d472-45a5-8472-fbcd8f785a59'
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F2.mp4?alt=media&token=562dc0d5-fa4d-444b-a4a4-e5a01d3f07db'
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F3.mp4?alt=media&token=edfa6705-8d9e-4dd5-97b9-549e8519e0fd'
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F4.mp4?alt=media&token=ff652b4d-baf7-4b1a-856d-ff0c363ccbc5'
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F5.mp4?alt=media&token=07c38e47-88e6-4f7f-96df-162cbcefd480'
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
                VideoLink.Link = 'https://firebasestorage.googleapis.com/v0/b/fitneeague.appspot.com/o/Cardio%2F6.mp4?alt=media&token=072169e5-124b-4406-b983-82696104be9f'
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
              require('../Assets/images/nobg_cardio.png')
            }
            style={{
              position: 'absolute',
              bottom: 40,
              right: 0,
              width: 170,
              height: 170,
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
                require('../Assets/images/nobg_cardio.png')
              }
              style={{width: 80, height: 60, resizeMode: 'center',}}
            />
            <View>
              <Text style={{fontSize:15, fontWeight:'800', color: 'black'}}>Cardio Exercise</Text>
              <Text  style={{ color: 'black',  }}>Start your Exercise</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ExerciseScreen
  
  const styles = StyleSheet.create({})