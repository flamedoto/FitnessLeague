import { View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  FlatList } from 'react-native'

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { COLORS, SIZES } from '../constants/theme';
import React , {useState} from 'react'



const ExerciseScreen = () => {


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

        <View style={{flexDirection:'row', marginTop:'50%',}}> 

              
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
        <View
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
        </View>
        <Text>Session 1</Text>
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
        <View
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
        </View>
        <Text>Session 2</Text>
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
        <View
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
        </View>
        <Text>Session 3</Text>
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
        <View
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
        </View>
        <Text>Session 4</Text>
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
        <View
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
        </View>
        <Text>Session 5</Text>
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
        <View
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
        </View>
        <Text>Session 6</Text>
      </View>
      </View>




      {/* BOTTOM CARD */}
      
        <Image
          source={
            require('../Assets/images/Exercise2.png')
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
              require('../Assets/images/Exercise2.png')
            }
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text style={{fontSize:15, fontWeight:'800'}}>Cardio Exercise</Text>
            <Text>Start your Exercise</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseScreen

const styles = StyleSheet.create({})