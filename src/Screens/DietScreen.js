import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { COLORS, SIZES } from '../constants/theme';


const DietScreen = () => {

    return (
      <View style={{width:'100%',height:'100%', backgroundColor: COLORS.accent+'30',}}>

           <Image source={require('../Assets/images/BgOrange.png')} 
        style={{marginTop:'50%', position:'absolute',alignSelf:'center',}}
        />
     <Text style={{alignSelf:'center', marginTop:'5%', fontWeight:'300',fontSize:25}}> Log Your Food </Text>
     <View style={{alignSelf:'center', marginTop:'20%'}}> 
     <Progress.Pie progress={0.4} size={300}  color="red"
     animated={true} />
    </View>

      </View>
    );
}

export default DietScreen

const styles = StyleSheet.create({

});