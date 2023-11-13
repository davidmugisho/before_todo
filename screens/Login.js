import react, { useState } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity, ImageBackground } from "react-native";
import axios from 'axios';
const Login = ({ navigation }) => {

    // REACT HOOK
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    // Create a function to Log in
    const LoginHandler = () => {

        axios.post('http://test.ecoforest.green/api/v1/auth/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                setError('');

                //If successfully Navigate to The Main Screen
                navigation.navigate('Main', {
                    user: response.data.user,
                    token: response.data.token
                })
            })
            .catch(function (error) {
                const {
                    data,
                    status,
                    statusText,
                } = error.response;

                console.log('error: ', data?.message);
                setError(data.message)
            });
    }

    return (
        <ImageBackground 
        source={{uri: 'https://i.pinimg.com/564x/bf/db/b0/bfdbb0edb2907b9d60a69e3aa90cb6b4.jpg'}}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{
        backgroundColor: '#eee',
        flex: 1,
        padding: 20,
        justifyContent:'space-around',
        alignItems: 'center',
        borderRadius: 50,
        width: '80%',
        // height: 100,
        marginTop:35,
    }} >


        <Text style={{ fontWeight: 'bold',fontStyle:'normal', fontSize:30 }}>
            Welcome back!
        </Text>
        <Image style={{ height: 200, width: 200, alignSelf: 'center', borderRadius:100}}
            source={{uri :'https://i.pinimg.com/564x/00/17/f1/0017f1bdfde39cac00743f49844b2a84.jpg'}}/>


        <View style={{ width: '100%', top: -20}}>

            <Text>Email</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setEmail}
                value={email}
                placeholder="mary.elliot@mail.com"
            />


            <Text>Password</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="*********"
                secureTextEntry
            />

            {/* TODO : confirmPassword */}
            <Text style={{ color: 'red' }}>{error}</Text>
            <Button style={{ marginTop: 10 }} title="LOGIN" onPress={() => {
                console.log('ok');
                LoginHandler();
            }} ></Button>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Signup')
            }}
            >
                <Text 
                style={{
                    textAlign: 'center'
                 }}>Do you want to <Text style={{color:'red', fontStyle:'noemal', fontSize:20 , fontWeight:'bold'}}>sign up? </Text></Text>

            </TouchableOpacity>


        </View>


    </View>
    </ImageBackground>
    );
}

export default Login;
