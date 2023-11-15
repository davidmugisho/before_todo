import react, { useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet,TouchableOpacity } from "react-native";

import{MaterialCommunityIcons} from'@expo/vector-icons';

import axios from 'axios';
// import Card from "./components/Card";

const Main = ({ navigation, route }) => {

    console.log('token :::', route.params.user.full_name);

    const [tasks, setTasks] = useState([
        'labrador', 'German Shepherd', 'Rottweiler', 'Boxer','Pug','Shih Tzu','Great Dane','Golden Retriever ','Chihuahua'
    ])

    return <View style={{
        backgroundColor: '#eee',
        flex: 1,
    }} > 
        <View style={{ backgroundColor: '#3D2B1F',}}> 
            <Image style={{ marginTop: 100, borderRadius: 45, height: 90, width: 90, alignSelf: 'center' }}
                source={{uri:'https://i.pinimg.com/564x/c9/c0/95/c9c095ba928b22f448e01b11cfa2f05f.jpg'}} />
            <Text style={{
                color: '#FFF', fontSize: 18,
                textAlign: 'center', fontWeight: 'bold', marginBottom: 15
            }}>
                Welcome {route.params.user.full_name}</Text>
        </View>

<View style={{padding:20 }}> 
         <View style={{ 
            backgroundColor:'rgb(255, 0, 0)',margin:20
        }}>
            <Image style={{ marginTop: 100, borderRadius: 45, height: 90, width: 90, alignSelf: 'center' }}
                source={require('../assets/profile.png')} />
         
        </View> 
{/* 
        <Card
        title="david"
        Subtile="100$"
        Image="./assets/profile.png"
        /> */}

        <View style={{ backgroundColor:'rgba(0, 0, 255, 0.5)',margin:20, padding:10}}>
            <Text style={{
                fontWeight: '700', padding:20,}}>All Dogs for Sale</Text>
            <View style={{
                backgroundColor: '#fff',
                padding: 20,
                elevation: 2,
                borderRadius: 10

            }}>
                <Text style={{
                fontWeight: 'bold', fontSize: 20, color:'tomato', textDecorationLine:'underline'}}>All categories</Text>
                <ScrollView>
                    {

                        tasks.map((val, key) => {
                            return <View>
                            <Text>{val}</Text>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        </View>

<View style={{ margin:20,backgroundColor:'#00ff00'}}>
        <TouchableOpacity style={styles.continueButton} onPress={() => console.log('clikked')}><Text style={{
            textAlign:'center', color:'white' , fontSize:25,fontWeight:'bold'
        }}>BUY</Text>
        </TouchableOpacity>
</View>
        
 </View>
 </View>
}

const styles = StyleSheet.create({
    continueButton:{
        width:'50%',
        height:50,
        left:90,
        backgroundColor:"#3D2B1F",
        top:-15 ,
        borderColor:'white',
        borderRadius:30, 
        borderWidth:10  ,
        shadowOffset:{width:10, height:10},
        shadowOpacity:1,
        shadowColor:'grey',
        shadowRadius:10,
        elevation:20,
    },


})

export default Main;
