import firebase from '../../firebase';
import firestore from '@react-native-firebase/firestore';
import { CaloriesPerStep } from '../constants/index'
import PerosnalData from '../Data/PersonalData';
import BMIData from '../Data/BMIData';

const personalDetailGet = async () =>{

    return new Promise(async(resolve, reject) => {
        const usersCollection = firebase.firestore()
        .collection('account')
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(collectionSnapshot => {
          //  console.log('Total users: ', collectionSnapshot.size);
          //  console.log('user: ', collectionSnapshot.docs[0]._data);
          //console.log(collectionSnapshot.docs[0]._data.points)
            resolve(collectionSnapshot.docs[0]._data)
        });
    })
}



const userBMIGet = async () =>{

    return new Promise(async(resolve, reject) => {




        const usersCollection = firebase.firestore()
        .collection('userBMI')
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(collectionSnapshot => {
          //  console.log('Total users: ', collectionSnapshot.size);
          //  console.log('user: ', collectionSnapshot.docs[0]._data);
            resolve(collectionSnapshot.docs[0]._data)
        });
    })
}


const UpdateUserBMI = ({ BMI, Weight, Height }) => {


    return new Promise(async(resolve, reject) =>{


        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);


        if(BMI < 25){
            var weightType = 'gain'
          }else{
            var weightType = 'lose'
          }
    
       
    
        firebase.firestore().collection("userBMI")
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()


        .then(function(querySnapshot) {

          querySnapshot.forEach(function(document) {
           document.ref.update({
            BMI: BMI,
            Height: Height,
            Weight: Weight,
            weightType: weightType,
            //TargetCalories: TargetCalories

           }).then(()=>{

            updateCalBmi().then(e=>{

                resolve('data updated')
            })

            }).catch((e)=>{
                reject(e)
            }); 



          });
        });

    })

}


const updateCalBmi = () => {
    return new Promise(async(resolve, reject)=>{

        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);

        var CaloBMI = firebase.firestore().collection("calories")


        CaloBMI = CaloBMI.where('userId', '==', firebase.auth().currentUser.uid)
        CaloBMI = CaloBMI.where('Date', '==', timestamp1)


        CaloBMI.get()
        .then(function(querySnapshot) {


            if(querySnapshot.size == 0 ){
           }else{


                querySnapshot.forEach(function(document) {
                document.ref.update({

                    caloriesBurned: 0,
                    caloriesConsumed: 0,

                 }).then(()=>{

                resolve('')

                }).catch((e)=>{
                    reject(e)
                }); 

                });
            }
        });


    })
}

const updateOneSignalId = (deviceId) => {
    return new Promise(async(resolve, reject) =>{




       
    
        firebase.firestore().collection("account")
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()


        .then(function(querySnapshot) {

          querySnapshot.forEach(function(document) {
           document.ref.update({
            deviceId: deviceId,

            //TargetCalories: TargetCalories

           }).then(()=>{
            resolve('data updated')
            }).catch((e)=>{
                reject(e)
            }); 



          });
        });

    })
}

const updateLocation = ({ Longitude, Latitude, Speed }) => {
    return new Promise(async(resolve, reject)=>{
        var loc = new firestore.GeoPoint(Latitude, Longitude)
        firebase.firestore().collection("account")
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(document) {
            document.ref.update({
                Location: loc,
                speed: Speed,
            

           }).then(()=>{
            resolve('data updated')
            }).catch((e)=>{
                reject(e)
            }); 



          });
        });


    })
}


const updatePoints = () => {
    return new Promise(async(resolve, reject)=>{
        firebase.firestore().collection("account")
        .where('userId', '==', firebase.auth().currentUser.uid)
        .get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(document) {
            document.ref.update({
                points: 0,
            

            }).then(()=>{
            resolve('data updated')
            }).catch((e)=>{
                reject(e)
            }); 



            });
        });


    })
}



const getUserTask = async () =>{

    return new Promise(async(resolve, reject) => {
        var usertaskCollection = firebase.firestore()
        .collection('userTask')

        usertaskCollection = usertaskCollection.where('userId', '==', firebase.auth().currentUser.uid)
        usertaskCollection = usertaskCollection.where('active', '==', true)


        
        usertaskCollection.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs[0]._data)
            }
        });
    })
}
const getAllUsersTask = async () =>{

    return new Promise(async(resolve, reject) => {
        var usertaskCollection = firebase.firestore()
        .collection('userTask')

        usertaskCollection = usertaskCollection.where('userId', '==', firebase.auth().currentUser.uid)


        
        usertaskCollection.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs)
            }
        });
    })
}



const getAllUsersSteps = async ()=> {
    return new Promise(async(resolve, reject) => {
       
        var stepsCount = firebase.firestore()
        .collection('steps')

        stepsCount = stepsCount.where('userId', '==', firebase.auth().currentUser.uid)


        
        stepsCount.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs)
            }
        });
    })
}


const getUserFruitTask = async () =>{

    return new Promise(async(resolve, reject) => {
        var foodData = firebase.firestore()
        .collection('foodScanTask')

        foodData = foodData.where('userId', '==', firebase.auth().currentUser.uid)


        
        foodData.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs)
            }
        });
    })
}

const getUserSteps = async () =>{

    return new Promise(async(resolve, reject) => {
        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);
        var stepsCount = firebase.firestore()
        .collection('steps')

        stepsCount = stepsCount.where('userId', '==', firebase.auth().currentUser.uid)
        stepsCount = stepsCount.where('Date', '==', timestamp1)


        
        stepsCount.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs[0]._data)
            }
        });
    })
}


const UpdateSteps = ({ Steps }) => {
    return new Promise(async(resolve, reject)=>{

        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);

        var stepsCount = firebase.firestore().collection("steps")


        stepsCount = stepsCount.where('userId', '==', firebase.auth().currentUser.uid)
        stepsCount = stepsCount.where('Date', '==', timestamp1)


        stepsCount.get()
        .then(function(querySnapshot) {


            if(querySnapshot.size == 0 ){
                firebase.firestore().collection('steps')
                .add({
                    Date: timestamp1,
                    Steps: Steps,
                    userId: firebase.auth().currentUser.uid
                }).then(() => {
                    resolve('Data Added')
                    console.log('User added!');
                });
           }else{


                querySnapshot.forEach(function(document) {
                document.ref.update({
                    Steps: Steps,
                 }).then(()=>{
                resolve('data updated')
                }).catch((e)=>{
                    reject(e)
                }); 

                });
            }
        });


    })
}


const AddUserFood = (Food) => {
    return new Promise(async(resolve, reject)=>{
        firebase.firestore().collection('userFoodEaten')
        .add(Food).then(() => {
            resolve('Data Added')
            console.log('User added!');
        });
         


    })
}



const getUserFood = async () =>{

    return new Promise(async(resolve, reject) => {
        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);
        var foodData = firebase.firestore()
        .collection('userFoodEaten')

        foodData = foodData.where('userId', '==', firebase.auth().currentUser.uid)
        foodData = foodData.where('time', '==', timestamp1)


        
        foodData.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs)
            }
        });
    })
}


const UpdateCalories = async ({ Steps, CaloriesConsumed }) => {
    return new Promise(async(resolve, reject) => {

        var calo = CaloriesPerStep * Steps

        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);


       /* if(BMIData.weightType == 'gain'){
            var calototal = CaloriesConsumed ? CaloriesConsumed : 0 - calo ? calo : 0;
            console.log(calototal)
        }else{
            var calototal = calo ? calo : 0 - CaloriesConsumed ? CaloriesConsumed : 0;
            console.log(calototal, 123123)
        }*/
       

        if(Steps > 0){
            var dataUpdate = {
                caloriesBurned: calo,
            };



            var dataAdd = {
                Date: timestamp1,
                caloriesBurned: calo,
                caloriesConsumed: CaloriesConsumed || 0,
                caloriesTarget: BMIData.TargetCalories,
                userId: firebase.auth().currentUser.uid
            }
        }else{

            

            var dataUpdate = {
                caloriesConsumed: CaloriesConsumed,
            };



            var dataAdd = {
                Date: timestamp1,
                caloriesBurned: 0,
                caloriesConsumed: CaloriesConsumed,
                caloriesTarget: BMIData.TargetCalories,
                userId: firebase.auth().currentUser.uid
            }

        }

        var caloriesCollection = firebase.firestore()
        .collection('calories')

        caloriesCollection = caloriesCollection.where('userId', '==', firebase.auth().currentUser.uid)
        caloriesCollection = caloriesCollection.where('Date', '==', timestamp1)


        
        caloriesCollection.get()
        .then(collectionSnapshot => {
            
            /*  Data Does not Exist add new data */
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                firebase.firestore().collection('calories')
                .add(dataAdd).then(() => {
                    console.log('User added!');
                    resolve('Data Added')
                });
           }else{

                if(Steps > 0){
                    dataUpdate.caloriesBurned = calo +  collectionSnapshot.docs[0]._data.caloriesBurned;
                }else{
                    dataUpdate.caloriesConsumed = CaloriesConsumed + collectionSnapshot.docs[0]._data.caloriesConsumed;
                }





                /*  Data ALready exists updating data  */
                collectionSnapshot.forEach(function(document) {
                    document.ref.update(dataUpdate).then(()=>{
                    resolve('data updated')
                    }).catch((e)=>{
                        reject(e)
                    }); 
        
        
        
                });

               
            }
        });


    })
}



const RewardCompleted = async ({ Points }) => {
    return new Promise(async(resolve, reject)=>{

        var usertaskCollection = firebase.firestore().collection("userTask")
        

        usertaskCollection = usertaskCollection.where('userId', '==', firebase.auth().currentUser.uid)
        usertaskCollection = usertaskCollection.where('active', '==', true)        
        
        usertaskCollection.get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(document) {
            document.ref.update({
                Completed: true,
                active: false,
            

           }).then(()=>{
            
            /*  UPDATE USER POINTS   */
            firebase.firestore().collection("account")
            .where('userId', '==', firebase.auth().currentUser.uid)
            .get()
            .then(function(querySnapshot) {
    
                querySnapshot.forEach(function(document) {
                document.ref.update({
                    points: Points,
                
    
               }).then(()=>{
                resolve('data updated')
                }).catch((e)=>{
                    reject(e)
                }); 
    
    
    
              });
            });

            /*  UPDATE USER POINTS  END */


            }).catch((e)=>{
                reject(e)
            }); 



          });
        });


    })    
}


const getUserFoodTask = async () =>{

    return new Promise(async(resolve, reject) => {
        var userfoodtaskCollection = firebase.firestore()
        .collection('foodScanTask')

        userfoodtaskCollection = userfoodtaskCollection.where('userId', '==', firebase.auth().currentUser.uid)
        userfoodtaskCollection = userfoodtaskCollection.where('Active', '==', true)


        
        userfoodtaskCollection.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs[0]._data)
            }
        });
    })
}



const fruitRewardComeplete = async ({ Points }) => {
    return new Promise(async(resolve, reject)=>{

        var userFoodCompleted = firebase.firestore().collection("foodScanTask")
        

        userFoodCompleted = userFoodCompleted.where('userId', '==', firebase.auth().currentUser.uid)
        userFoodCompleted = userFoodCompleted.where('Active', '==', true)        
        
        userFoodCompleted.get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(document) {
            document.ref.update({
                Completed: true,
                Active: false,
            

           }).then(()=>{
            
            /*  UPDATE USER POINTS   */
            firebase.firestore().collection("account")
            .where('userId', '==', firebase.auth().currentUser.uid)
            .get()
            
            .then(function(querySnapshot) {

                //console.log(querySnapshot.docs[0]._data.points)  
                //console.log(Points)   
                //console.log(querySnapshot.docs[0]._data.points + Points)   
                querySnapshot.forEach(function(document) {
                document.ref.update({
                    points: querySnapshot.docs[0]._data.points + Points,
                
    
               }).then(()=>{
                resolve('data updated')
                }).catch((e)=>{
                    reject(e)
                }); 
    
    
    
              });
            });

            /*  UPDATE USER POINTS  END */


            }).catch((e)=>{
                reject(e)
            }); 



          });
        });


    })    
}


const getUserCalories = async () =>{

    return new Promise(async(resolve, reject) => {
        var d = new Date();
        d.setHours(0,0,0,0);
        const timestamp1 = firestore.Timestamp.fromDate(d);
        var caloriesData = firebase.firestore()
        .collection('calories')

        caloriesData = caloriesData.where('userId', '==', firebase.auth().currentUser.uid)
        caloriesData = caloriesData.where('Date', '==', timestamp1)


        
        caloriesData.get()
        .then(collectionSnapshot => {
           // console.log('Total users: ', collectionSnapshot.size);
           //console.log('user: ', collectionSnapshot.docs[0]._data);
           if(collectionSnapshot.size == 0 ){
                reject("No Data")
           }else{
                resolve(collectionSnapshot.docs[0]._data)
            }
        });
    })
}



//userTask
export default {
    personalDetailGet: personalDetailGet,
    BMIGet: userBMIGet,
    UpdateUserBMI,
    updateLocation,
    UpdateSteps,
    getUserTask,
    RewardCompleted: RewardCompleted,
    UpdateCalories,
    getUserSteps,
    updatePoints,
    AddUserFood,
    getUserFood,
    getAllUsersSteps,
    getAllUsersTask,
    updateOneSignalId,
    getUserFoodTask,
    fruitRewardComeplete,
    getUserCalories,
    getUserFruitTask
};
