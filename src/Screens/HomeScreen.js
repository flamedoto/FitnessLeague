import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, FlatList,TouchableOpacity, ScrollView } from 'react-native'

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SIZES } from '../constants/theme';
import ExerciseScreen from './ExerciseScreen';
import React from 'react'

let exercises = [

  {
    title: 'Yoga',
    image: require('../Assets/images/Exercise4.png'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
];

const HomeScreen = ({navigation}) => {

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
            <Text style={{fontWeight:'700', textDecorationLine:'underline'}} >BMI</Text>
              
            

         </View>
        </View>
        </TouchableOpacity>
                  <Text style={{fontSize:30, lineHeight:45}}>Good Morning Maib!</Text>
                  <View
                  style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start',
                          height:50, borderRadius:25, backgroundColor: COLORS.white, marginVertical:40,}}
                  >
                    <FontAwesome5Icons 
                    name="search"
                    size={22}
                    style={{marginHorizontal:20}}
                    />
                    <TextInput placeholder='Search' style={{flex: 1}} />
                  </View>
      </View>

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
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500'}}> Diet Plan </Text>
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
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500'}}> Exrcise </Text>
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
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500'}}> Yoga </Text>
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
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight:'500'}}> Kegles </Text>
      </TouchableOpacity>

      </View>
      
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})