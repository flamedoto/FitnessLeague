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
  import React , {useRef, useState} from 'react'
  
  import Video from 'react-native-video'
  import VideoLink from '../Data/VideoLink';
  const VideoPlayerScreen = () => {
    
    var player = useRef();
    const videoBuffer = (isBuffer) =>{


        console.log(isBuffer)
        //here you could set the isBuffer value to the state and then do something with it
        //such as show a loading icon
        }
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <View>

        <Video
        source={VideoLink.Link}
        style={{ width: 300, height: 300 }}
        controls={true}
        audioOnly={true}
        resizeMode={"contain"}
        
        onBuffer={videoBuffer}
        ref={(ref) => {
        player = ref
        }} />


        </View>
        </View>
    );
  };
  
  export default VideoPlayerScreen
  
  const styles = StyleSheet.create({})