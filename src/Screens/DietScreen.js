import { StyleSheet, Text, View,Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React,{ useState, useEffect } from 'react'
import * as Progress from 'react-native-progress';
import { COLORS, SIZES } from '../constants/theme';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import { useIsFocused } from '@react-navigation/native';
import firebase from '../../firebase';
import axios from "axios";
import api from '../FirebaseData/DataExtract'
import firestore from '@react-native-firebase/firestore';
import BMIData from '../Data/BMIData';

const DietScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [searchNow, setSearchNow] = useState(false)
  const [resultData, setResultData] = useState([])
  const [foodData, setFoodData] = useState([])
  var focus = useIsFocused();
  const [caloBurnorConsume, setcaloBurnorConsume] = useState('gain')
  const [caloriesPercentage, setCaloriesPercentage] = useState(0)
  const [caloriesData, setCaloriesData] = useState({})
  const SearchData = async (search)=> {

    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      params: {query: search},
      headers: {
        'X-RapidAPI-Key': '67788ea32fmsh8da2d4b17d71bc7p122a9bjsnd1ee31e0c4a4',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setResultData(response.data);
      console.log(response.data)
    }).catch(function (error) {
      console.error(error);
    }); 

  }

/*
total_miliseconds=(time.seconds+(time.nanoseconds)*0.00000001)*1000. // 1 nanosecond=1e-9 means 0.00000001

new Date(total_miliseconds)
*/ 
    const Reload = () =>{
      api.getUserFood().then((data)=>{
        setFoodData(data)
        
      }) 


      api.getUserCalories().then(cal=>{
        setCaloriesData(cal)
        if(BMIData.weightType =='gain'){


          let c = cal.caloriesConsumed - cal.caloriesBurned;

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesConsumed - cal.caloriesBurned)
          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }


        }else{

          let c = cal.caloriesBurned - cal.caloriesConsumed

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesBurned - cal.caloriesConsumed)
          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }

        }
      }).catch(e=>{
        console.log(e)
      })

    }
    useEffect(()=>{
      api.getUserFood().then((data)=>{
        setFoodData(data)
        
      }) 


      api.getUserCalories().then(cal=>{
        setCaloriesData(cal)
        if(BMIData.weightType =='gain'){


          let c = cal.caloriesConsumed - cal.caloriesBurned;

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesConsumed - cal.caloriesBurned)
          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }


        }else{

          let c = cal.caloriesBurned - cal.caloriesConsumed

          if(c > cal.caloriesTarget){
            alert('Daily target completed')
          }

          setcaloBurnorConsume(cal.caloriesBurned - cal.caloriesConsumed)
          if(c/cal.caloriesTarget < 0){
            setCaloriesPercentage(0)
          }else{
            setCaloriesPercentage(c/cal.caloriesTarget)
          }

        }

      }).catch(e=>{
        console.log(e)
      })



    },[])

    useEffect(()=>{
      if(focus == true){
        console.log(focus)
        api.getUserCalories().then(cal=>{
  
  
          setCaloriesData(cal)
          if(BMIData.weightType =='gain'){
            let c = cal.caloriesConsumed - cal.caloriesBurned;
  
            if(c > cal.caloriesTarget){
              alert('Daily target completed')
            }
  
            setcaloBurnorConsume(cal.caloriesConsumed - cal.caloriesBurned)
            if(c/cal.caloriesTarget < 0){
              setCaloriesPercentage(0)
            }else{
              setCaloriesPercentage(c/cal.caloriesTarget)
            }
  
  
  
  
          }else{
  
  
            let c = cal.caloriesBurned - cal.caloriesConsumed
  
            if(c > cal.caloriesTarget){
              alert('Daily target completed')
            }
  
            setcaloBurnorConsume(cal.caloriesBurned - cal.caloriesConsumed)
            if(c/cal.caloriesTarget < 0){
              setCaloriesPercentage(0)
            }else{
              setCaloriesPercentage(c/cal.caloriesTarget)
            }
  
  
          }
        }).catch(e=>{
          console.log(e)
        })
      }
  
    },[focus])



    return (
      <View style={{width:'100%',height:'100%', backgroundColor: COLORS.accent+'30'}}>


        <View style={styles.SearchView}>
          <View
            style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start',
                    height:50, borderTopLeftRadius:8,borderTopRightRadius: 8, backgroundColor: COLORS.white, marginTop:40,}}
            >
            <FontAwesome5Icons 
            name="search"
            size={22}
            style={{marginHorizontal:20}}
            />
            <TextInput
              value={searchText}
              placeholder='Search' 
              style={{ color: 'black' }}
              placeholderTextColor={{ color: 'black' }}
              onChangeText={(e)=>{
                setSearchText(e)
              

                if(searchText.replace(/\s/g, '') == ''){
                  setSearchNow(false)
                }else{
                  setSearchNow(true)
                }
              
                SearchData(e)


              }}
              
             // onBlur={()=>setSearchNow(false)}

              onFocus={(e)=>{
                console.log(123)
                if(searchText.replace(/\s/g, '') != ''){
                  setSearchNow(true)
                }
              }}
            />
          </View>

          {searchNow == true ?  
          <>
              {resultData.length != 0 ?

              <View style={styles.searchItems}>
              <FlatList
                data={resultData}
                renderItem={item => {
                  return(
                    <View style={styles.searchItem} >

                    <View style={styles.searchiteminside}>
                      <Text style={styles.searchItemText}>{item.item.name}</Text>
                      <Text style={styles.searchItemSmallText}>{item.item.calories} Calories</Text>
                    </View>
      
                    <TouchableOpacity style={styles.iconviewsearch} onPress={()=>{

                      setSearchNow(false)
                      let d = new Date();
                      d.setHours(0,0,0,0);
                      let timestamp1 = firestore.Timestamp.fromDate(d);

                      let FoodData = {
                        calories: item.item.calories,
                        carbohydrates: item.item.carbohydrates_total_g,
                        fat: item.item.fat_total_g,
                        protein: item.item.protein_g,
                        name: item.item.name,
                        time: timestamp1,
                        userId: firebase.auth().currentUser.uid
                      }
                      api.AddUserFood(FoodData).then(e=>{
                        Reload()
                      })
                      api.UpdateCalories({ CaloriesConsumed: item.item.calories })
                      setSearchText('')
                      
                    }}>
                      <AntDesgin name={"plus"} size={25} color={"black"}/>
                    </TouchableOpacity>

                  </View>
                  )
                }}
                keyExtractor={item => item.name}          
              />

              
              </View>
              : null
              }
          </>
          : null }

        </View>

           <Image source={require('../Assets/images/BgOrange.png')} 
        style={{marginTop:'50%', position:'absolute',alignSelf:'center',}}
        />
     <Text style={{alignSelf:'center', marginTop:'5%', fontWeight:'300',fontSize:25}}> Log Your Food </Text>
        <View style={{alignSelf:'center', marginTop:'2%'}}> 
        <Progress.Pie progress={caloriesPercentage} size={300}  color="red"
        animated={true} />
        </View>


        <View style={styles.FoodsView}>





        <FlatList
                data={foodData}
                renderItem={item => {
                  const FlatData = item.item._data
                  var d = FlatData.time.toDate()

                  let date = d.getDate();
                  let month = d.getMonth() + 1;
                  let year = d.getFullYear();


                  return(
                    <View style={styles.FoodView}>
              
                    <View style={styles.FoodTextView}>
                      <Text style={styles.FoodName}>{FlatData.name}</Text>
                      <Text style={styles.FoodDesc}>Calories : {FlatData.calories}</Text>
                      <Text style={styles.FoodDesc}>carbohydrates : {FlatData.carbohydrates}</Text>
                      <Text style={styles.FoodDesc}>protein : {FlatData.protein} fat : {FlatData.fat} </Text>
                    </View>
      
                    <Text style={styles.FoodDate}>{date}/{month}/{year}</Text>
                  </View>
                  )
                }}
                keyExtractor={item => item.ref._documentPath._parts[1]}          
              />







        </View>

      </View>
    );
}

export default DietScreen

const styles = StyleSheet.create({
  SearchView : {
    flexDirection: 'column',
    alignSelf: 'center',
    width: "90%" ,
    justifyContent: 'space-around',
  },
  searchItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    zIndex: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serachText: {
    color: 'black',
  },
  iconviewsearch: {
    paddingTop: 10
  },

  searchItemText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  searchiteminside:{
  },
  searchItemSmallText: {
    fontSize: 12,
    color: 'black'

  },
  searchItems:{
    paddingTop: 15,
    backgroundColor: 'white'
  },
  FoodsView: {
    width: "90%",
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 500,
    flex: 1,
  },
  FoodView: {
    marginBottom: 10,
    backgroundColor: 'white',
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
    color: 'black'
  },
  FoodName:{
    marginBottom: 7,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  FoodDate: {

  },
});