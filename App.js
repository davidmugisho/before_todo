import React from "react";
import Splash from "./screens/Splash";
import Signup from "./screens/Signup.js";
import Login from "./screens/Login";
// import Main from "./screens/Main";




// import { StatusBar } from 'expo-status-bar';
// import {StyleSheet,
//   Animated,
//   style, 
//   Text, 
//   Alert,
//   Button, 
//   View ,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback, 
//   Image, 
//   SafeAreaView,
// ImageBackground} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


const App = () => {
  return <NavigationContainer>

<Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{
        headerShown: false
      }} name="Splash" component={Splash} />
      <Stack.Screen name="Signup" component={Signup} options={{
        headerShown: false
      }} />
       <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
       {/* <Stack.Screen name="Main" component={Main} options={{
        headerShown: false
      }} /> */}

          </Stack.Navigator>
  </NavigationContainer>
}
export default App;


  // const backgroundImageUri = 'https://i.pinimg.com/564x/40/72/24/407224af48964230c0431424b4ba0516.jpg';
    

    {/* <ImageBackground
      source={{uri:"https://i.pinimg.com/564x/40/72/24/407224af48964230c0431424b4ba0516.jpg"}}
      style={styles.background}
    >

    <View style={styles.container}> 
  
    <Animated.Text style={{
        color:'#62D2C3',
            fontSize: 35, 
            top:100,
            fontWeight: 'bold',
            lineHeight: 33,
            textAlign: 'center',
            textShadowOffset: { width: 40, height: 10},
            textShadowRadius: 15,
            textShadowColor: '#000',
        }}>ROZO ADOPTION🐶😺</Animated.Text>
      <Image style={{ height: 170, width: 187.16, top:80, left:4, alignItems:'center',borderRadius: 45}} source={{ 
        uri: "https://i.pinimg.com/564x/56/58/fb/5658fbc61477e76eb958d096a769b73d.jpg"}}/>

      <Text style={{
        color:'white',
            fontSize: 22, 
            top:40,
            fontWeight: 700,
            lineHeight: 33,
            alignItems:'center'
        }}> Give them love and affection in your {"\n"}{'                     '} <Text  style={styles.separator}> new home 
        </Text>  
          </Text> 
        
        <Text style={{
            color:'white',
            top:20,
            fontSize:17,
            fontWeight:600,
            lineHeight:22.5,
            alignItems:'center'
        }}> Welcome to Pawsome Adoption! Where furry dreams come true. Explore our world of wagging tails and endless love. Browse, meet, and adopt your new best friend. Unleash joy, adopt today! 🏡🐕 #PawsomeAdoption #AdoptDontShop
        </Text>
        <View style={styles.Image}>
        <Image style={{  marginHorizontal: 5, height: 160, width: 100, top:-1, left:4, alignItems:'center',borderRadius: 15}} 
        source={{ uri: "https://i.pinimg.com/564x/db/8d/15/db8d158622959b5590fa973e16dbdf7c.jpg"}}/>
        
        <Image style={{  marginHorizontal: 5, height: 160, width: 100, top:-1, left:4, alignItems:'center',borderRadius: 15}} 
        source={{ uri: "https://i.pinimg.com/564x/21/db/a7/21dba7d617b2b849cc296c5e0ff0b906.jpg"}}/>
        
        <Image style={{  marginHorizontal: 5, height: 160, width: 100, top:-1, left:4, alignItems:'center',borderRadius: 15}} 
        source={{ uri: "https://i.pinimg.com/564x/92/63/25/926325c60db7031c2a4d568384970273.jpg"}}/>
        </View>
        

        <TouchableOpacity
    style={styles.button}
    onPress={() => Alert.alert("My title","my message", [
      {text:"yes", onPress : () => console.log("yes")},
      {text: "no", onPress :() => console.log("no") },
    ])}>
    <Text style={{ 
      color: "#000000", 
      fontSize: 20, 
      alignSelf:'center', 
      lineHeight:30, 
      fontWeight:700,
      }}>
        Get started</Text>
</TouchableOpacity>
      </View>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
      flex: 1,
      padding: 5,
      // backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
  },
  button: {
      backgroundColor: "#62D2C3",
      padding: 10,
      borderRadius: 20,
      marginTop: 10,
      width: 335,
      height:60,
      top:-30,
  },
  separator:{
    color: "#FF5733", // Adjust the color for the separator
    fontWeight: "bold",
    fontSize: 30,
        },
        Image:{
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems:'center'
          
        }
}); */}
