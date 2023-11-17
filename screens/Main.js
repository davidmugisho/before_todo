import react, { useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet,TouchableOpacity } from "react-native";

import{MaterialCommunityIcons} from'@expo/vector-icons';

import axios from 'axios';
import Card  from "./components/Card";
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

<View style={{padding:10 }}> 
         {/* <View style={{ 
            backgroundColor:'rgb(255, 0, 0)',margin:20
        }}>
            <Image style={{ marginTop: 100, borderRadius: 45, height: 90, width: 90, alignSelf: 'center' }}
                source={require('../assets/profile.png')} />
         
        </View>  */}

        <Card
        title="david mugisho"
        // Subtile="100$"
        Image="https://i.pinimg.com/564x/76/0c/48/760c488bd61903f481dc0bd10bec193e.jpg"
        />

        <View style={{ backgroundColor:'rgba(0, 0, 255, 0.5)', padding:20}}>
            <Text style={{
                fontWeight: '700', padding:10,}}>All Dogs for Sale</Text>
            <View style={{
                backgroundColor: '#fff',
                padding: 30,
                elevation: 2,
                borderRadius: 15

            }}>
                <Text style={{
                fontWeight: 'bold', fontSize: 25, color:'tomato', textDecorationLine:'underline'}}>All categories</Text>
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

<View style={{ margin:10,backgroundColor:'#00ff00'}}>
        <TouchableOpacity style={styles.continueButton} onPress={() => console.log('clikked')}>
            <Text style={{
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
